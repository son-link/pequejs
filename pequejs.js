/**
 * @class A small Javascript library for manipulate DOM and send AJAX requests
 * @author Alfonso Saavedra "Son Link"
 * @license GPL3
 * @param {*} selector The CSS selector to use or DOM object
 * @url https://son-link.github.io
 */
function $(selector)
{
	'use strict';

	// DOM manipulation
	const self = {
		
		/**
		 * @type Array
		 */
		elements: (typeof selector === 'object') ? [selector] : document.querySelectorAll(selector),
		/**
		 * @description Return the HTML of the firs element or set the HTML for one or more elements
		 * @param {string} [html] Optional. If set change the HTML of the elements. If not return the HTML of the first element.
		 * @returns {string} the HTML of the firts element found if html variable is not set.
		 */
		html: (html)=>{
			if(!html) return self.elements[0];
			else{
				self.each((ele) => {
					ele.innerHTML = html;
				});
			}
		},
		/**
		 * @description Same as html() but for text.
		 * @param {string} [txt] If set change the text of the elements. If not return the text of the first element found.
		 * @returns {string} the HTML of the found element if html variable is not set.
		 */
		text: (txt)=> {
			if(!txt) return self.elements[0].textContent;
			else{
				self.each((ele) => {
					ele.textContent = txt;
				});
			}
		},
		/**
		 * @description Add event to the elements.
		 * @param {string} event event (click, change, keyup, etc)
		 * @param {function} callback The callback function.
		 */
		on: (event, callback) => {
			if (!event && !callback) return undefined;
			self.each((ele)=> {
				ele.addEventListener(event, callback)
			});
		},
		/** Display the element(s) */ 
		show: ()=> {
			
			self.each((ele)=> {
				ele.style.display = 'block'
			});
		},
		/** Hide the element(s) */
		hide: ()=> {
			self.each((ele) => {
				ele.style.display = 'none';
			});
		},
		/**
		 * Set a element atribute or return the attribute of the firts element found.
		 * @param {string} name The attribute name
		 * @param {string/number} [value] The value for the attribute.
		 * @returns {string} The attribute value of the first element found if value is not set.
		 */
		attr: (name, value)=> {
			if(value == null)
				return self.elements[0].getAttribute(name);
			else{
				self.each((ele) => {
					ele.setAttribute(name, value);
				});
			}
		},
		/**
		 * Append a text or HTML to element(S)
		 * @param {string} ele The text or HTML to append
		 */
		append: (ele)=> {
			self.each((ele)=> {
				ele.innerHTML += ele;
			});
		},
		/** Clear all content of the element(s) */
		empty: ()=> {
			self.each((ele)=> {
				while(el.firstChild)
  					el.removeChild(el.firstChild);
			});
		},
		/**
		 * Return if any element have the class name
		 * @param {string} className The class name
		 * @returns {boolean} true if any element has the class or false if not.
		 */
		hasClass: (className)=> {
			//return self.elements[0].classList.contains(className);
			var has = false;
			self.each((ele) => {
				if(ele.classList.contains(className)){
					has = true;
					return;
				}
			});
			return has;
		},
		/**
		 * Add class(es) to each element(s). You can add more than one separated by spaces
		 * @param {string} className The class(es) name
		 */
		addClass: (className)=> {
			self.each((ele) => {
				ele.classList.add(...className.split(' '));
			});
		},
		/**
		 * Remove class(es) on each element. You can remove more than one separated by spaces
		 * @param {string} className The class(es) name
		 */
		removeClass: (className)=> {
			self.each(ele => {
				ele.classList.remove(...className.split(' '));
			});
		},
		/**
		 * Toggle class on each element.
		 * @param {string} className The class name to toggle
		 */
		toggleClass: (className)=> {
			self.each(ele => {
				if ($(ele).hasClass(className)){
					$(ele).removeClass(className);
				}else{
					$(ele).addClass(className);
				}
			});
		},
		/**
		 * Iterate through every element of the collection. The callback function receive the current element.
		 * @param {function} callback The callback function
		 * @returns {object} The actual element
		 */
		each: (callback)=> {
			if (typeof callback !== 'function') return;
			self.each((ele) => {
				if (callback.call(this, ele) === false) return
			});
		}
	}

	/**
	 * @func $.ajax
	 * @description Perform an Ajax request.
	 * @param {string} url The url to send the request.
	 * @param {Object[]} opts A array to set the options. See below.
	 * @param {function} opts.success A callback function when the request was successful.
	 * @param {boolean} [opts.async = true] Set to false to block execution until you finish receiving the response.
	 * @param {string} [opts.contentType='application/x-www-form-urlencoded; charset=UTF-8'] The content type for the request.
	 * @param {string} [opts.data] A object with the variables and her values to send. For example {email: 'mymail@gmail.com', user: 'My User'}.
	 * @param {string} [opts.dataType='json'] What kind of data do you expect to receive (json, text, html)
	 * @param {function} [opts.error] The callback when the request fail.
	 * @param {string} [opts.type='GET'] The HTTP request method (GET, POST, etc)
	 */
	$.ajax = (url, opts)=>{
		if (!url && !opts) return;
		if (!opts.success) return;

		// Set default options variables
		if(!opts.type) opts.type = 'GET';
		else opts.type = opts.type.toUpperCase();
		if(!opts.contentType) opts.contentType = 'application/x-www-form-urlencoded; charset=UTF-8';
		if(!opts.dataType) opts.dataType = 'json';
		if(!opts.async) opts.async = true;		

		var data='';
		if (opts.data) data += Object.keys(opts.data).map(key => `${key}=${encodeURIComponent(opts.data[key])}`).join('&');

		var request = new XMLHttpRequest();
		if (opts.type == 'GET') url += '?'+data;
		request.open(opts.type, url, opts.async);
		request.setRequestHeader('Content-Type', opts.contentType);
		
		request.onload = function() {
			if (this.status >= 200 && this.status < 400) {
				var data;
				if (opts.dataType == 'json') data = JSON.parse(this.response);
				else if(opts.dataType == 'text' || opts.dataType == 'html') data = this.responseText;
				else data = this.response;
				opts.success(data);
			} else {
				if (opts.error) opts.error(this.status, this.statusText)
			}
		}
		request.onerror = function() {
			if (opts.error) opts.error(this.status, this.statusText)
		};
		if(data && opts.type != 'GET') request.send(data);
		else request.send();
	}
	return self;
}
