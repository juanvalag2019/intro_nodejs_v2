
import { readFile, writeFile } from 'fs/promises';

let template = await readFile(new URL('template.html', import.meta.url), 'utf-8');
const data = {
  'title': 'Writing file in Node.js',
  'body': 'Successfully Written'
}

Object.entries(data).forEach(([k, v]) => {
  template = template.replace(`{${k}}`, v);
});

console.log(template);

/*
  - Para escribir se usa el método writeFile:
    Con la url en donde va a estar el archivo y el contenido
*/

await writeFile(new URL('index.html', import.meta.url), template);