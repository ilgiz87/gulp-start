// Основной модуль
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";
// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

// Передаем значения в глобальную переменную
global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  gulp: gulp,
  path: path,
  plugins: plugins
}
// Импорт задач 
// import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { scripts } from "./gulp/tasks/scripts.js";
import { images } from "./gulp/tasks/images.js";
import { ttf2woff, fontsSCSS } from "./gulp/tasks/fonts.js";
import { svgSprite } from "./gulp/tasks/svgSprite.js";
import { copyFonts } from "./gulp/tasks/copy.js"



// конвертация и подключение шрифтов
const fonts = gulp.series(ttf2woff, fontsSCSS);


// Наблюдатель за изменениями
function watcher() {
  // gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, scripts);
  gulp.watch(path.watch.images, images);
  // gulp.watch(path.watch.fonts, fonts);
}




// Базовая операция
const mainTasks = gulp.series(fontsSCSS, copyFonts, gulp.parallel(/* copy, */  html, scss, scripts, images, svgSprite));
// const mainTasks =  gulp.parallel(/* copy, */ fonts, html, scss, scripts, images, svgSprite);
// построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
// const fontsSCSS = gulp.series(fontsSCSS);


export { svgSprite }
export { build }
export { dev }
export { fontsSCSS }


//Выполнение сценария по умолчанию
gulp.task('default', dev);


