import fs from "fs";
import ttf2woff2 from "gulp-ttf2woff2";
// import ttf2woff2 from "gulp-ttftowoff2";

export const ttf2woff = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, { })
    // return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, { encoding: false })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "ERROR: <%= error.message %>"
            })
        ))

        .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`) )
        // .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`), { encoding: false })
        .pipe(ttf2woff2())
        .pipe(app.gulp.dest(`${app.path.build.fonts}`));
}

export const fontsSCSS = () => {
    // Файл подключения шрифтов
    let fontsFile = `${app.path.srcFolder}/scss/components/_fonts.scss`;
    // проверяем существует файлы
    fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
        if (fontsFiles) {

            if (!fs.existsSync(fontsFile)) {
                fs.writeFile(fontsFile, '', cb);
                let newFileOnly;
                for (var i = 0; i < fontsFiles.length; i++) {
                    //записываем подключение шрифтов в файл
                    let fontFileName = fontsFiles[i].split('.')[0];
                    if (newFileOnly != fontFileName) {
                        let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
                        let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
                        if (fontWeight.toLowerCase() === 'thin') {
                            fontWeight = 100;
                        } else if (fontWeight.toLowerCase() === 'extralight') {
                            fontWeight = 200;
                        } else if (fontWeight.toLowerCase() === 'light') {
                            fontWeight = 300;
                        } else if (fontWeight.toLowerCase() === 'medium') {
                            fontWeight = 500;
                        } else if (fontWeight.toLowerCase() === 'semibold') {
                            fontWeight = 600;
                        } else if (fontWeight.toLowerCase() === 'bold') {
                            fontWeight = 700;
                        } else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
                            fontWeight = 800;
                        } else if (fontWeight.toLowerCase() === 'black') {
                            fontWeight = 900;
                        } else {
                            fontWeight = 400;
                        }
                        fs.appendFile(fontsFile,
                            `@font-face{\n\ font-family: "${fontName}";\n\  font-display: swap;\n\  src: url("../fonts/${fontFileName}.woff2") format("woff2");\n\ font-weight: ${fontWeight}; \n } \n \r\n`, cb
                        );
                        newFileOnly = fontFileName;
                    }
                }
            } else {
                // Если файл существует выводим сообщение
                console.log("Файл fonts.scss уже существует. Удалите файл для обновления файла")
            }
        }
    });
    return app.gulp.src(`${app.path.srcFolder}`);
    function cb() { }
}