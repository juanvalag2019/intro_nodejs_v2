/*
  - Para poder usar ECMAScript modules sin tener que poner archivos .mjs se crea un package.json
    con un objeto con "type":"module"
  - El modulo addTwo no tiene un export por defecto por lo que se tiene que importar
    destructuring.
  - El modulo addThree si tiene un 'export default' por lo que se puede importar sin
    destructuring
  - El .js no es necesario
*/
import { addTwo } from './addTwo.js';
import addThree from './addThree.js';

console.log(addTwo(4));
console.log(addThree(4));