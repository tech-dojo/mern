var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var babelify = require('babelify');
var mocha = require('gulp-mocha');
var gulpJsx = require('gulp-jsx-coverage');

gulp.task('env-set', function() {
  var env = process.argv[3];
  if (env == '--production') {
    process.env.NODE_ENV = 'production';
  } else if (env == '--test') {
    process.env.NODE_ENV = 'test';
  } else {
    process.env.NODE_ENV = 'development';
  }
});

gulp.task('env:test', function() {
  process.env.NODE_ENV = 'test';
});

gulp.task('live-server', function() {
  var server = new LiveServer('server/server.js');
  server.start();
});

gulp.task('bundle', function() {
  return browserify({
      entries: 'app/main.jsx',
      debug: true,
    })
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./.tmp'));
});

gulp.task('temp', function() {
  gulp.src(['app/index.html', 'app/*.css'])
    .pipe(gulp.dest('./.tmp'));

  gulp.src(['app/images/**'])
    .pipe(gulp.dest('./.tmp/images'));
});

gulp.task('bundle-n-reload', ['bundle'], browserSync.reload);

gulp.task('observe-all', function() {
  gulp.watch('app/**/**/*.*', ['bundle-n-reload']);

  gulp.watch('app/**/*.*', ['bundle-n-reload']);
  gulp.watch('app/*.*', ['temp']);
  gulp.watch('./server/**/*.js', ['live-server']);
});

gulp.task('frontend_test_cover', gulpJsx.createTask({
  src: ['tests/**/*.jsx'], // will pass to gulp.src as mocha tests
  istanbul: { // will pass to istanbul or isparta
    preserveComments: true, // required for istanbul 0.4.0+
    coverageVariable: '__MY_TEST_COVERAGE__',
    exclude: /node_modules|tests/ // do not instrument these files
  },

  transpile: {
    babel: {
      include: /\.jsx?$/,
      exclude: /node_modules/,
      omitExt: false
    }
  },

  threshold: [ // fail the task when coverage lower than one of this array
    {
      type: 'lines', // one of 'lines', 'statements', 'functions', 'banches'
      min: 50
    }
  ],
  coverage: {
    reporters: ['text-summary', 'json', 'lcov'], // list of istanbul reporters
    directory: 'coverage' // will pass to istanbul reporters
  },

  mocha: { // will pass to mocha
    reporter: 'spec'
  },
  // Recommend moving this to .babelrc
babel: {                                         // will pass to babel-core
    presets: ['es2015', 'react'],                // Use proper presets or plugins for your scripts
    sourceMap: 'both'                            // get hints in covarage reports or error stack
}
}));

gulp.task('test_cover', ['frontend_test_cover'], gulpJsx.createTask({
  src: ['tests/*.js'], // will pass to gulp.src as mocha tests
  istanbul: { // will pass to istanbul or isparta
    preserveComments: true, // required for istanbul 0.4.0+
    coverageVariable: '__MY_TEST_COVERAGE__',
    exclude: /node_modules|tests/ // do not instrument these files
  },

  transpile: {
    babel: {
      include: /\.jsx?$/,
      exclude: /node_modules/,
      omitExt: false
    }
  },

  threshold: [ // fail the task when coverage lower than one of this array
    {
      type: 'lines', // one of 'lines', 'statements', 'functions', 'banches'
      min: 60
    }
  ],
  coverage: {
    reporters: ['text-summary', 'json', 'lcov'], // list of istanbul reporters
    directory: 'coverage' // will pass to istanbul reporters
  },

  mocha: { // will pass to mocha
    reporter: 'spec'
  },
  // Recommend moving this to .babelrc
babel: {                                         // will pass to babel-core
    presets: ['es2015', 'react'],                // Use proper presets or plugins for your scripts
    sourceMap: 'both'                            // get hints in covarage reports or error stack
}
}));

gulp.task('test', ['env:test', 'test_cover']);


gulp.task('serve', ['env-set', 'live-server', 'bundle', 'temp', 'observe-all'], function() {
  browserSync.init(null, {
    proxy: 'http://localhost:3000',
    port: 9001,
  });

});
