'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      files: ['test/**/*.js']
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      bin: {
        src: ['bin/grunt-clear']
      },
      lib: {
        src: ['lib/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      },
    },
    watch: {
      //clear terminal on any watch task. beauty.
      tasks: ['clear'],
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      bin: {
        files: '<%= jshint.bin.src %>',
        tasks: ['jshint:bin']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['jshint:lib', 'nodeunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'nodeunit']
      },
    },
  });

  // Load local tasks.
  grunt.loadTasks('tasks');

  // Default task.
  // grunt.registerTask('default', ['clear', 'jshint', 'nodeunit']);
  grunt.registerTask('default', ['clear', 'nodeunit', 'jshint']);
  grunt.registerTask('testit', ['before', 'clear', 'after']);

};
