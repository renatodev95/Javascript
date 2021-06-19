// Listando arquivos com FS e Recursão mútua

const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);

    // Usando REGEX para não listar arquivos da pasta .git
    if (/\.git/g.test(fileFullPath)) continue;
    if (/node_modules/g.test(fileFullPath)) continue;

    // Aqui está a recursão para caminhar sobre os arquivos que forem pastas (diretórios)
    if (stats.isDirectory()) {
      readdir(fileFullPath);
      continue;
    }

    // Usando regex para listar apenas arquivos .css e .html
    if (!/\.html$/g.test(fileFullPath) && !/\.css$/g.test(fileFullPath))
      continue;

    console.log(fileFullPath);
  }
}

readdir('/home/renato/Documents/UDEMY/Javascript/');

console.log('Oi');