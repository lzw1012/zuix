var gulp = require('gulp');
var compiler = require('gulp-closure-compiler');
module.exports = function() {
    // Compile/Minify zuix.js
    gulp.src('dist/js/zuix.js', {base: 'dist/js/'})
        .pipe(compiler({
            fileName: 'dist/js/zuix.min.js',  // outputs single file
            compilerFlags: {
                //debug: true, // <-- DO NOT ACTIVATE, causes errors in generated js
                warning_level: 'DEFAULT',
//              useTypesForOptimization: true,
                compilation_level: 'SIMPLE',
                language_in: 'ECMASCRIPT5_STRICT',
//                define: [
//                    "goog.DEBUG=false"
//                ],
                create_source_map: 'dist/js/zuix.min.js.map',
                source_map_location_mapping: 'dist/js/|./',
                output_wrapper: "%output%\n//# sourceMappingURL=zuix.min.js.map"
            }
        }))
        .pipe(gulp.dest('dist/js'));
    // Compile/Minify zuix-bundler.js
    gulp.src('dist/js/zuix-bundler.js', {base: 'dist/js/'})
        .pipe(compiler({
            fileName: 'dist/js/zuix-bundler.min.js',  // outputs single file
            compilerFlags: {
                //debug: true, // <-- DO NOT ACTIVATE, causes errors in generated js
                warning_level: 'DEFAULT',
//              useTypesForOptimization: true,
                compilation_level: 'SIMPLE',
                language_in: 'ECMASCRIPT5_STRICT',
//                define: [
//                    "goog.DEBUG=false"
//                ],
                create_source_map: 'dist/js/zuix-bundler.min.js.map',
                source_map_location_mapping: 'dist/js/|./',
                output_wrapper: "%output%\n//# sourceMappingURL=zuix-bundler.min.js.map"
            }
        }))
        .pipe(gulp.dest('dist/js'));
};