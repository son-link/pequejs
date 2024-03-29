<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## PequeJS

A small Javascript library for manipulate DOM and send AJAX requests

**Parameters**

-   `selector` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object))** The CSS selector to use or DOM object.

**Examples**

```javascript
$(document)
```

```javascript
$('input#username')
```

```javascript
$('a', this)
```

Returns **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** PequeJS object.

**Meta**

-   **author**: Alfonso Saavedra "Son Link"
-   **license**: GPL-3.0-or-later

## Constructor

Create the constructor

**Parameters**

-   `selector` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The selector to use.
-   `parent` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** The father of the element. This is useful, for example, if you are looking for a class that is inside an element, and not outside it. (optional, default `null`)

### html

Return the HTML of the firs element or set the HTML for one or more elements.

**Parameters**

-   `html` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** If set change the HTML of the elements.
    If not return the HTML of the first element.

**Examples**

```javascript
$('p').html();
$('p#title').html('<strong>PequeJS</strong>');
```

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** the HTML of the firts element found if html variable is not set.

### text

Return the text of the firs element or set the text for one or more elements.

**Parameters**

-   `txt` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** If set change the text of the elements.
    If not return the text of the first element found.

**Examples**

```javascript
console.log($('span').text());
$('span#username').text('Son Link');
```

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** the HTML of the found element if html variable is not set.

### on

Add event to the elements.

**Parameters**

-   `event` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** event (click, change, keyup, etc).
-   `selector` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function))** If it is a string, add the event to the element(s) inside the parent, especially if the content is automatically generated. If passed a function it does the same as the callback parameter.
-   `callback` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)?** The callback function. (optional, default `null`)

**Examples**

```javascript
$('button').on('click', function() {
 alert('You clicked');
});
```

Returns **[undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)** Returns undefined if event and callback parameters are empty.

### show

Display the element(s).

**Parameters**

-   `display` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Set the display [block, flex, inline-block, etc] (optional, default `'block'`)

**Examples**

```javascript
$('#modal').show();
```

```javascript
$('.blocks').show('flex');
```

### hide

Hide the element(s).

**Examples**

```javascript
$('#modal').hide();
```

### attr

Set a element attribute or return the attribute of the firts element found.

**Parameters**

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The attribute name
-   `value` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))?** The value for the attribute. (optional, default `null`)

**Examples**

```javascript
$('#mylink').attr('href', 'https://google.es');
link = $('#mylink').attr('href');
```

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The attribute value of the first element found if value is not set.

### removeAttr

Remove a element(s) attribute.

**Parameters**

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The attribute name

**Examples**

```javascript
$('input#name').removeAttr('disabled');
```

### append

Append a text or HTML to element(s).

**Parameters**

-   `ele` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The text or HTML to append

**Examples**

```javascript
$('ul#series').append('<li>The Rookie</li>');
```

### empty

Clear all content of the element(s).

**Examples**

```javascript
$('#series').empty();
```

### hasClass

Return if any element have the class name.

**Parameters**

-   `className` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The class name.

**Examples**

```javascript
$('#modal').hasClass('show');
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** true if any element has the class or false if not.

### addClass

Add class(es) to each element(s). You can add more than one separated by spaces.

**Parameters**

-   `className` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The class(es) name.

**Examples**

```javascript
$('#modal').addClass('show');
$('span#username').addClass('bold color-red');
```

### removeClass

Remove class(es) on each element. You can remove more than one separated by spaces.

**Parameters**

-   `className` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The class(es) name

**Examples**

```javascript
$('#modal').removeClass('show');
$('span#username').removeClass('bold color-red');
```

### toggleClass

Toggle class on each element.

**Parameters**

-   `className` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The class name to toggle.

**Examples**

```javascript
$('#modal').toggleClass('show');
```

### val

Get or set the value for input, textarea or select.

**Parameters**

-   `value` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))?** If set change the value of the firts find element. If not return her value.

**Examples**

```javascript
$('#modal').toggleClass('show');
```

### is

Checks if the current set of elements match a selector and returns true if at least one of these elements matches the given arguments.

**Parameters**

-   `selector` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The CSS selector

**Examples**

```javascript
$('input').is(':valid')
```

```javascript
$('#accept-terms').is(':checked')
```

Returns **any** Bool

### trigger

Trigger a event for the element.

**Parameters**

-   `eventname`  
-   `event` **eventname** The event to trigger

**Examples**

```javascript
$('#myform').trigger('submit')
```

### each

Iterate through every element of the collection.
The callback function receive the current element.

**Parameters**

-   `callback` **[Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** The callback function

**Examples**

```javascript
$('ul#series').each(function(ele) {
 series.push($(ele).text());
});
```

Returns **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** The actual element

### ajax

Perform an Ajax request.

**Parameters**

-   `url` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The URL to send the request.
-   `opts` **[array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** A array to set the options. See below.
    -   `opts.success` **Fuction** A callback function when the request was successful.
    -   `opts.async` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** [true] Set to false to block execution until you finish receiving the response.
    -   `opts.contentType` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** [application/x-www-form-urlencoded; charset=UTF-8] The content type for the request.
    -   `opts.data` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** \[] A object with the variables and her values to send.
    -   `opts.dataType` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** [json] What kind of data do you expect to receive (json, text, html).
    -   `opts.error` **[Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** \[] The callback when the request fail.
    -   `opts.type` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** [GET] The HTTP request method (GET, POST, etc).

**Examples**

```javascript
$().ajax('http://localhost/api', {
 data: {
   user: 'myuser',
   passwd: '123456'
 },
 type: 'POST',
 success: function(response) {
   console.dir(response);
 }
});
```

### get

Perform an GET request. This is a alias for $().ajax.

**Parameters**

-   `url` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The URL to send the request.
-   `data` **([object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function))** A object with the variables and her values to send. If is a function take this as the callback.
-   `callback` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** \[] The callback function when the request success or error.

**Examples**

```javascript
$().get('http://localhost/api?key=123456789',
 function(response) {
   console.dir(response);
 }
);
```

```javascript
$().get('http://localhost/api', {key: '123456789'},
 function(response) {
   console.dir(response);
 }
);
```

### post

Perform an POST request. This is a alias for $().ajax.

**Parameters**

-   `url` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The URL to send the request.
-   `data` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** A object with the variables and her values to send. If is a function take this as the callback.
-   `callback` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** \[] The callback function when the request success or error.

**Examples**

```javascript
$().post('http://localhost/api', {key: '123456789'},
 function(response) {
   console.dir(response);
 }
);
```

## instance

Create a new instance of the constructor

**Parameters**

-   `selector` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The selector to use.
-   `parent` **any?**  (optional, default `null`)

Returns **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** The instance of the library.

## instance

Return the constructor instantiation
