module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.version %> */\n'
      },
      build: {
        src: '<%= pkg.name %>.js',
        dest: '<%= pkg.name %>.min.js'
      }
    },
    documentation: {
      default: {
        files: [{
          'expand': true,
          'cwd': '.',
          'src': ['./*.js']
        }],
        options: {
          destination: 'docs',
          format: 'md',
          filename: 'index.md'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-documentation');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'documentation']);
};
