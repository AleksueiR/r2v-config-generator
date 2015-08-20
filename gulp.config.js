﻿module.exports = function () {
    var client = './src/client/';
    var server = './src/server/';
    var clientApp = client + 'app/';
    //var specRunnerFile = 'specs.html';
    //var wiredep = require('wiredep');

    var nodeModules = './node_modules/';
    var bowerModules = './lib/';

    var root = './';
    var src = './src/'
    var build = './dist/';
    var app = src + 'app/';

    var temp = './.tmp/';
    var report = './report/';

    var bowerdir = './lib/';

    var config = {

        index: src + 'index.html',
        indexProtractor: src + 'index-protractor.html',

        js: [
            app + '**/*module*.js',
            app + '**/*.js',
            '!' + app + '**/*.spec.js'
        ],
        jsOrder: [
            '**/app.module.js',
            '**/*.module.js',
            '**/*.js'
        ],

        jslib: [
            bowerdir + 'jquery/dist/jquery.js',
            bowerdir + 'jquery-ui/jquery-ui.js',

            bowerdir + '/angular/angular.js',
            bowerdir + '/angular-sanitize/angular-sanitize.js',
            bowerdir + '/tv4/tv4.js',
            bowerdir + '/objectpath/lib/ObjectPath.js',
            bowerdir + '/angular-schema-form/dist/schema-form.js',
            bowerdir + '/angular-schema-form/dist/bootstrap-decorator.js',

            bowerdir + 'angular-animate/angular-animate.js',
            bowerdir + 'angular-aria/angular-aria.js',
            bowerdir + 'angular-translate/angular-translate.js',
            bowerdir + 'angular-translate-loader-static-files/angular-translate-loader-static-files.js',

            bowerdir + 'angular-ui-ace/ui-ace.js',
            bowerdir + 'angular-ui-sortable/sortable.js',
            bowerdir + 'ace-builds/src-noconflict/ace.js'
        ],

        scss: src + 'content/styles/main.scss',
        css: temp + 'main.css',
        csslib: [
            bowerdir + 'bootstrap/dist/css/bootstrap.css',
            bowerdir + 'bootstrap/dist/css/bootstrap-theme.css'
        ],

        // all html template files
        htmltemplates: app + '**/*.html',
        // angular template cache file to be injected
        templates: temp + 'templates.js',

        specHelpers: [src + 'test/*.js'], // bind-polyfill,
        specs: [app + '**/*.spec.js'],

        vetjs: [src + '**/*.js'],

        watchsass: src + 'content/styles/**/*.scss',
        watchjs: src + '**/*.js',
        watchhtml: src + '**/*.html',

        plato: {
            js: app + '**/*.js'
        },

        /**
         * Template cache settings.
         */
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'app.core',
                root: 'app/',
                standAlone: false
            }
        },

        app: app,
        src: src,
        temp: temp,
        build: build,
        root: root,
        report: report,

        //alljs: [
        //    './src/**/*.js',
        //    './*.js'
        //],
        //build: './build/',
        //client: client,
        //fonts: bowerdir + 'font-awesome/fonts/**/*.*',
        //images: client + 'images/**/*.*',
        //// app js, with no specs

        //optimized: {
        //    app: 'app.js',
        //    lib: 'lib.js'
        //},

        //browserReloadDelay: 1000,

        //packages: [
        //    './package.json',
        //    './bower.json'
        //],

        defaultPort: '6002'
    };

    config.karma = getKarmaOptions();

    function getKarmaOptions() {
        var options = {
            files: [].concat(
                config.jslib,
                bowerModules + 'angular-mocks/angular-mocks.js',
                bowerModules + 'sinon/index.js',
                bowerModules + 'bardjs/dist/bard.js',

                app + '**/*module*.js',
                app + '**/*.js',

                config.specs,
                config.specHelpers
                ),
            coverage: {
                dir: report + 'coverage',
                reporters: [
                    // reporters not supporting the `file` property
                    { type: 'html', subdir: 'report-html' },
                    { type: 'lcov', subdir: 'report-lcov' },
                    { type: 'text-summary' } //, subdir: '.', file: 'text-summary.txt'}
                ]
            },
            preprocessors: {}
        };

        options.preprocessors[app + '**/!(*.spec)+(.js)'] = ['coverage'];

        return options;
    }

    return config;
};
