// Angular-CLI build configuration
// This file lists all the node_modules files that will be used in a build
// Also see https://github.com/angular/angular-cli/wiki/3rd-party-libs

/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
    return new Angular2App(defaults, {

        vendorNpmFiles: [
          'systemjs/dist/system-polyfills.js',
          'systemjs/dist/system.src.js',
          'zone.js/dist/*.js',
          'es6-shim/es6-shim.js',
          'reflect-metadata/*.js',
          'rxjs/**/*.js',
          '@angular/**/*.js',
          'ng2-bootstrap/**/*.js',
          'moment/moment.js'
        ],
        sassCompiler: {
            includePaths: [
              'src/contents/scss'
            ]
        }
    }
     ) ;
};
