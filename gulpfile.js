var gulp = require ( 'gulp');
var LiveServer = require ( 'gulp-live-server');
var browserSync = require ( 'browser-sync');
var browserify = require ( 'browserify');
var source = require ( 'vinyl-source-stream');
var reactify = require ( 'reactify');
var babelify = require ( 'babelify');
var mocha = require('gulp-mocha');


gulp.task('env-set', function () {
  var env = process.argv[3];
  if(env == '--production' ){
process.env.NODE_ENV = 'production';
  }
  else if (env == '--test') {
      process.env.NODE_ENV = 'test';
  }
  else{
      process.env.NODE_ENV = 'development';
  }

});

gulp.task('env:test', function () {
      process.env.NODE_ENV = 'test';
});


gulp.task('live-server',function(){
	var server = new LiveServer('server/server.js');
	server.start();
});

gulp.task('bundle',function(){
	return browserify({
		entries:'app/main.jsx',
		debug:true,
	})
});

gulp.task('bundle',function(){
	return browserify({
		entries:'app/main.jsx',
		debug:true,
	})
	.transform(babelify)
	.transform(reactify)
	.transform(babelify.configure({
		stage:0,
		sourceMaps:true
	}))
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest('./.tmp'));
});


gulp.task('temp',function(){
	gulp.src(['app/index.html','app/*.css'])
		.pipe(gulp.dest('./.tmp'));

	gulp.src(['app/images/**'])
		.pipe(gulp.dest('./.tmp/images'));
});

gulp.task('bundle-n-reload',['bundle'],browserSync.reload)

gulp.task('observe-all',function(){
	gulp.watch('app/**/**/*.*',['bundle-n-reload']);

	gulp.watch('app/**/*.*',['bundle-n-reload']);
gulp.watch('app/*.*',['temp']);
	gulp.watch('./server/**/*.js',['live-server']);
});


gulp.task('serve', ['env-set','live-server','bundle','temp','observe-all'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
		port: 9001
	});

});

gulp.task('test',['env:test'], function () {
    return gulp.src('./server/tests/*.js')
        .pipe(mocha({reporter: 'nyan'}))
        .once('error', function (err) {
				//	console.log('Hello Gulp File');
				//	console.log(err);
            process.exit(1);
        })
        .once('end', function () {
            process.exit();
        });
});
