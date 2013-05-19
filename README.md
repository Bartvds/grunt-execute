# grunt-execute

> Grunt task to execute code in node

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-execute --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-execute');
```

## The "execute" task

The main use-case is easier testing of apps or loose bits javascript, or use code as a poor-mans grunt-task.

### Overview
In your project's Gruntfile, add a section named `execute` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  execute: {
    target: {
      src: ['script.js']
    }
  }
})
```

### Options

```js
grunt.initConfig({
  execute: {
    options: {
      stdio: 'inherit', //override node spawn's stdio option
      cwd: '.' //overide code cwd (default null uses scripts's own directory)
    },
    many_targets: {
      src: ['apps/**/*.js', 'lib/**/index.js'] //supports globs
    }
  }
})
```

## Todo

* Add options-passing support to fake CLI/env input

* Add pre/post require's

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
