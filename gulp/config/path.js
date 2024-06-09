// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const srcFolder = `./src`;      // Так же можно использовать rootFolder
const buildFolder = `./dist`;

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    images: `${buildFolder}/images/`,
    js: `${buildFolder}/js/`,
    files: `${buildFolder}/files/`,
    fonts: `${buildFolder}/fonts/`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/main.scss`,
    images: `${srcFolder}/images/**/*.{jpg,jepeg,png,gig,webp,avif}`,
    svg: `${srcFolder}/images/**/*.svg`,
    svgSprite: `${srcFolder}/images/svg-sprite/*.svg`,
    js: `${srcFolder}/js/main.js`,
    files: `${srcFolder}/files/**/*.*`
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    images: `${srcFolder}/images/**/*.{jpg,jepeg,png,gig,webp,avif,svg,ico}`,
    js: `${srcFolder}/js/**/*.js`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}