//Получаем имя папки проекта
import * as nodePath from `path`;
const rootFolder = nodePath.basename(nodePath.relative());
const buildFolder = `./dist`; //Так же можно использовать rootFolder вместо dist
const srcFolder = `./src`;
export const path = {
  build: {
    files: `${buildFolder}/files/`
  },
  src: {
    files: `${srcFolder}/files/**/*.*`
  },
  watch: {},
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}