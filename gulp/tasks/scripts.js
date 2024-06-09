import webpackStream from "webpack-stream";

export const scripts = () => {
    return app.gulp.src(app.path.src.js, { soursemaps: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "JS",
                message: "Ошибка: <%= error.message %>"
            })))
        .pipe(webpackStream({
            mode: app.isBuild ? 'production' : 'development',
            output: {
                filename: 'main.js',
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browserSync.stream());
}