var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    tsProject = tsc.createProject('tsconfig.json'),
    mocha = require('gulp-mocha'),
    path = require('path');
// or requiring in ES5
var merge = require('merge2');
var shell = require('gulp-shell');

/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
function compileTs() {
    var tsResult = tsProject.src()
    .pipe(sourcemaps.init())
    // .pipe(tsc())
    .pipe(tsProject());
    return merge([
        tsResult.dts.pipe(gulp.dest('dist')),
        tsResult.js.pipe(sourcemaps.write('.', {
            // Return relative source map root directories per file.
            includeContent: false,
            sourceRoot: function (file) {
                var sourceFile = path.join(file.cwd, file.sourceMap.file);
                return "../" + path.relative(path.dirname(sourceFile), __dirname);
            }
        })).pipe(gulp.dest('dist'))
    ]);
};

function copyJson () {
    var sourceJsonFiles = [
                            './src/*.json',                //path to typescript files
                            ];

 return gulp.src(sourceJsonFiles).pipe(gulp.dest('dist/src/'));

}

function cleanTs(cb) {
  var typeScriptGenFiles = [
                              './dist/**/*.*'    // path to all JS files auto gen'd by editor
                           ];

  // delete the files
  return del(typeScriptGenFiles, cb);
}

function testFn() {
	return gulp.src('dist/test/**/*.spec.js', {read: false})
		// gulp-mocha needs filepaths so you can't have any plugins before it
		.pipe(mocha({reporter: 'spec', timeout: '360000'})).once('error', () => {
            process.exit(1);
        });
}


//gulp.task('default', gulp.series(['clean-ts', 'compile-ts', 'copy-json', 'test']));
var build = gulp.series(cleanTs, compileTs, copyJson, testFn);

exports.default = build;
