export const copy = () => {
    return app.gulp.src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files))
}

export const copyFonts = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.woff2`, { encoding: false })
          .pipe(app.gulp.dest(`${app.path.build.fonts}`));
}