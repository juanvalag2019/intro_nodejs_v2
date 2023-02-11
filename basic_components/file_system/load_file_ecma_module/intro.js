/* 
  - Para cargar un archivo se tiene que importar fs y usar un método de lectura del archivo
  - El metodo por defecto de lectura es readFile y funciona con callbacks:
    
    import { readFile } from 'fs';
  
  - El que sigue es una actualización que está envuelto/encapsulado en una promesa
*/
import { readFile } from 'fs/promises';
/* 
  - y hay otro que es sincrono, normalmente no se usa:
    
  import { readFileSync } from 'fs';

*/

const template = await readFile(new URL('template.html', import.meta.url), 'utf-8');
/* 
- Si no se pone como 'utf-8' node lo lee por medio de los bits del archivo,
  lo cual es util para cuando se hace stream del archivo o cuando el archivo es
  muy grande para cargarlo todo en la memoria ram

*/
