"use strict";
import gulp from 'gulp';

// COMPILERS
import babel from 'gulp-babel';
import postcss from 'gulp-postcss';
import pug from 'gulp-pug';
import pugbem from 'gulp-pugbem';
import sass from 'gulp-sass';
import ts from 'gulp-typescript';

// MINIFIERS
import giflossy from 'imagemin-giflossy';
import imagemin from 'gulp-imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageMinPngQuant from 'imagemin-pngquant';
//import imageminOptipng from 'imagemin-optipng';
import nano from 'gulp-cssnano';
import uglify from 'gulp-uglify';

// LINTERS
import prettier from 'gulp-prettier';
import styleLint from 'gulp-stylelint';
import tslint from "gulp-tslint";

// SERVER
import browserSync from 'browser-sync';

// UTILITIES
import beep from 'beepbeep';
import cFonts from 'cfonts';
import chalk from 'chalk';
import concat from 'gulp-concat';
import cssCount from 'gulp-css-count';
import del from 'del';
import PluginError from 'plugin-error';
import plumber from 'gulp-plumber';
import removeHTML from 'gulp-remove-html';
import rename from 'gulp-rename';
import sizeReport from 'gulp-sizereport';
import through from 'through2';

import pkg from './package';

//Plumber Handler
const onError = (err) => {
	beep([0, 0, 0]);
	console.log(chalk.red(err))
};


const dirs = pkg.directories;
const bs = browserSync.create();


let src = {};

src.pug = ['./' + dirs.src + '/pug/*.pug'];
src.pugAll = ['./' + dirs.src + '/pug/**/*.pug'];

src.ts = [
	'./' + dirs.src + '/ts/app.ts'
];

src.sassWatch = ['./' + dirs.src + '/scss/**/*'];
src.sassLOCAL = ['./' + dirs.src + '/scss/app.scss'];

src.img = './' + dirs.src + '/img/**/*';
src.references = './' + dirs.src + '/references/**/*';

src.indexWatch = [
	'./' + dirs.src + '/pug/**/*.pug'
];

let output = {};

output.html = './' + dirs.output + '/*.pug';

output.sizeCheck = [
	'./' + dirs.output + '/*.html',
	'./' + dirs.output + '/css/app.min.css',
	'./' + dirs.output + '/js/app.min.js'
];

let dist = {};

dist.html = './' + dirs.preview + '/*.html';

// ---------------------------------------------------------------------
// | Helper tasks                                                      |
// ---------------------------------------------------------------------

gulp.task('clean', function(done) {
	return del(['./' + dirs.preview, './' + dirs.output], done);
});



//*****************************        ***********************************/
//***************************** IMAGES ***********************************/
//*****************************        ***********************************/

gulp.task('copy:images', function() {
	return gulp
		.src(src.img)
		.pipe(
			imagemin(
				[
					giflossy({
						optimizationLevel: 3,
						lossy: 95
					}),
					imagemin.svgo({ plugins: [{ removeViewBox: true }] }),
					imageminMozjpeg({
						quality:60
					}),
					//imageminOptipng({ optimizationLevel: 5 })
					imageMinPngQuant({ quality: [0.5,0.6], speed: 4 })
				],
				{ verbose: true }
			)
		)
		.pipe(gulp.dest(dirs.preview + '/img'))
		.pipe(bs.stream());
});
gulp.task('copy:references', function() {
	return gulp
		.src(src.references)
		.pipe(gulp.dest(dirs.preview))
		.pipe(bs.stream());
});

gulp.task('copy',
	gulp.series('copy:images','copy:references',(done)=>{
		mediumText("OPTIMIZED IMAGES",["#74e6ff","#009cbd","#004b5b"]);
		done();
	})
);

//*****************************      ***********************************/
//***************************** HTML ***********************************/
//*****************************      ***********************************/

gulp.task('pugDist', function() {
	return (
		gulp
			.src(src.pug)
			.pipe(
				plumber({
					errorHandler: onError
				})
			)
			.pipe(
				pug({
					data: pkg,
					pretty: true,
					plugins: [pugbem]
				})
			)
			//.pipe(rename("index.html"))
			.pipe(gulp.dest(dirs.preview))
			.pipe(gulp.dest(dirs.output))
			.pipe(bs.stream())
	);
});

gulp.task('pug', gulp.series('pugDist', (done) => {
	mediumText("GENERATED HTML",["#8dff92","#009607","#003d03"]);
	done()
}));

gulp.task('inlineMIN', function() {
	return (
		gulp
			.src(dist.html)
			.pipe(removeHTML())
			//.pipe(rename("output.html"))
			.pipe(gulp.dest(dirs.output))
	);
});

gulp.task('inlineDEL', function(done) {
	return del([output.html], done);
});

gulp.task('inline', gulp.series('inlineMIN', (done) => {
	mediumText("GENERATED AEM ASSETS",["#5478ff","#0025ad","#001975"]);
	done();
}));

gulp.task('htmlChange', gulp.series('pugDist', 'inlineMIN', (done) => {
	smallText("HTML Updated",["#5478ff","#0025ad","#001975"],"left");
	done()
}));

//*****************************    ***********************************/
//***************************** JS ***********************************/
//*****************************    ***********************************/

gulp.task('jsPrettier', function(done) {
	return gulp
		.src(src.ts)
		.pipe(
			plumber({
				errorHandler: onError
			})
		)
		.pipe(prettier())
		.pipe(gulp.dest(function (file) {
			return file.base;
		}))
});
gulp.task('jsDist', function(done) {
	var tsProject = ts.createProject('tsconfig.json');
	var tsResult = gulp
		.src(src.ts)
		.pipe(
			plumber({
				errorHandler: onError
			})
		)
		.pipe(tslint({formatter:"stylish",console:true}))
		.pipe(tslint.report({
			summarizeFailureOutput: true
		}))
		.pipe(concat('concat.ts'))
		.pipe(tsProject());
	return tsResult.js
		.pipe(rename('app.js'))
		.pipe(
			babel({
				presets: ['@babel/env']
			})
		)
		.pipe(gulp.dest(dirs.preview + '/js'))
		.pipe(bs.stream());
});
gulp.task('jsOut', function(done) {
	return gulp
		.src('./' + dirs.preview + '/js/app.js')
		.pipe(reqWrap(pkg.requirejs))
		.pipe(gulp.dest(dirs.output + '/js'))
		.pipe(uglify({ mangle: true }))
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest(dirs.output + '/js'))
});

gulp.task('js', gulp.series('jsPrettier', 'jsDist', 'jsOut', (done) => {
	mediumText("PARSED TYPESCRIPT",["#fff373","#c2b200","#665e00"]);
	done();
}));

gulp.task('jsInline', gulp.series('jsDist', 'jsOut', (done) => {
	smallText("Typescript Updated",["#fff373","#c2b200","#665e00"],"left");
	done()
}));

//*****************************      ***********************************/
//***************************** SASS ***********************************/
//*****************************      ***********************************/

gulp.task('sassPrettier', function(done) {
	return gulp
		.src(src.sassWatch)
		.pipe(
			plumber({
				errorHandler: onError
			})
		)
		.pipe(prettier())
		.pipe(gulp.dest(function (file) {
			return file.base;
		}))
});

gulp.task('sassDist', function(done) {
	return gulp
		.src(src.sassLOCAL)
		.pipe(
			plumber({
				errorHandler: onError
			})
		)
		.pipe(styleLint({
			failAfterError: true,
			fix:true
		}))
		.pipe(
			sass({
				errLogToConsole: true
			}).on('error', sass.logError)
		)
		.pipe(postcss())
		.pipe(rename('app.css'))
		.pipe(gulp.dest(dirs.preview + '/css'))
		.pipe(rename('app.css'))
		.pipe(gulp.dest(dirs.output + '/css'))
		.pipe(nano({
			normalizeUrl: {
				stripWWW: false
			}
		}))
		.pipe(rename('app.min.css'))
		.pipe(gulp.dest(dirs.output + '/css'))
		.pipe(cssCount())
		.pipe(bs.stream({match: '**/*.css'}));
});

gulp.task('sass', gulp.series('sassPrettier', 'sassDist', (done) => {
	mediumText("COMPILED SASS",["#ff7ea5","#c1003b","#63001e"]);
	done();
}));

gulp.task('sassInline', gulp.series('sassDist', (done)=>{
	smallText("SASS Updated",["#ff7ea5","#c1003b","#63001e"],"left");
	done()
}));


// COMPILE

gulp.task('compile-start',(done)=>{
	smallText("OPTIMIZING AND COMPILING ALL SRC ASSETS...",["#FA7483","#3D4583"],"left");
	done();
});
gulp.task('compile-references',gulp.parallel('pug', 'js', 'sass',(done) => done()));
gulp.task('compile',gulp.series('compile-start', 'copy', 'compile-references',(done) => done()));
gulp.task('compile-code',gulp.series('compile-start', 'compile-references',(done) => done()));


gulp.task('sizeCheck', function() {
	return gulp
		.src(output.sizeCheck)
		.pipe(sizeReport())
});

gulp.task('serve', function() {
	mediumText("SERVING BROWSER...",["#8e4aff","#4300b3","#22005b"]);
	bs.init({
		injectChanges: true,
		server: {
			baseDir: './' + dirs.preview
		}
	});

	gulp.watch(src.ts, gulp.series('jsInline'));
	gulp.watch(src.sassWatch, gulp.series('sassInline'));
	gulp.watch(src.img, gulp.series('copy:images'));
	gulp.watch(src.pug, gulp.series('htmlChange'));
});

gulp.task('intro',(done)=>{
	largeText("Vans Boilerplate",["#ff0029","#890016"]);
	smallText("Version "+pkg.version,["#ff0029","#890016"]);
	done();
});

gulp.task(
	'default',
	gulp.series(
		'intro',
		'clean',
		'compile',
		'inline',
		'sizeCheck',
		'serve'
));
gulp.task('all',gulp.series('default'));
gulp.task(
	'code',
	gulp.series(
		'compile-code',
		'inline',
		'sizeCheck',
		'serve'
));

// REQUIRE WRAP

function reqWrap(_rq) {
	const PN = 'require wrap';
	if (!_rq) {
		throw new PluginError(PN, 'Missing require!');
	}
	const rq = _rq;

	// Creating a stream through which each file will pass
	return through.obj(function(file, enc, cb) {
		if (file.isNull()) {
			// return empty file
			return cb(null, file);
		}
		if (file.isBuffer()) {
			let pre = '';
			pre += 'requirejs.config(' + JSON.stringify(rq) + ');';

			let shims = [];
			for (var k in rq.shim) {
				shims.push("'" + k + "'");
			}

			pre += 'require([' + shims.join(',') + '], function(){';

			const P = Buffer.from(pre);
			const E = Buffer.from('});');

			file.contents = Buffer.concat([P, file.contents, E]);
		}
		if (file.isStream()) {
			this.emit('error', new PluginError(PN, 'Streams are not supported!'));
			return cb();
		}

		cb(null, file);
	});
}

function smallText(_text, _colors, _align='center') {
	cFonts.say(_text,{
		align:_align,
		font:"console",
		lineHeight: 0.1,
		spaceless:true,
		colors: _colors
	});
}
function mediumText(_text, _colors, _align='left') {
	cFonts.say(_text,{
		align:_align,
		font:"chrome",
		lineHeight: 0.1,
		spaceless:true,
		colors: _colors
	});
}
function largeText(_text, _colors) {
	cFonts.say(_text,{
		align:"center",
		font:"block",
		lineHeight: 0.1,
		spaceless:true,
		colors: _colors
	});
}
