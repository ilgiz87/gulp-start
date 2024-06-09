import spriteSvg from "gulp-svg-sprite";

export const svgSprite = () => {
    // return app.gulp.src(app.path.src.images, { encoding: false })
    return app.gulp.src(`${app.path.src.svgSprite}`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SVG-sprite",
                message: "ERROR: <%= error.message %>"
            })
        ))
        .pipe(spriteSvg({
            mode: {
                stack: {
                    sprite: '../sprite.svg',
                    example: true
                }
            },
        }))
        .pipe(app.gulp.dest(app.path.build.images))
        // .pipe(app.plugins.browserSync.stream());
}