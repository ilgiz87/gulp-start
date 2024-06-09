import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';


export const images = () => {
    // return app.gulp.src(app.path.src.images, { encoding: false })
    return app.gulp.src([`${app.path.src.images}/**/*}`], { encoding: false })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "images",
                message: "ERROR: <%= error.message %>"
            })
        ))
        // .pipe(app.gulp.src(app.path.src.images))
        .pipe(app.gulp.src([`${app.path.src.images}`], { encoding: false }))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.gulp.src([`${app.path.src.images}`], { encoding: false }))
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(webp())
        .pipe(app.gulp.dest(app.path.build.images))

        // .pipe(app.gulp.src(app.path.src.images))
        .pipe(app.plugins.if(
            app.isBuild,
            app.gulp.src([`${app.path.src.images}`], { encoding: false }))
        )
        .pipe(app.plugins.if(
            app.isBuild,
            app.plugins.newer(app.path.build.images))
        )
        .pipe(app.plugins.if(
            app.isBuild,
            imagemin({
                progresive: true,
                svgoPlugins: [{
                    removeViewBox: false,
                }],
                interlaced: true,
                optimizationLevel: 2 // от 0 до 7
            }))
        )
        .pipe(app.plugins.if(
            app.isBuild,
            app.gulp.dest(app.path.build.images))
        )



        .pipe(app.gulp.src(app.path.src.svg))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browserSync.stream());
}