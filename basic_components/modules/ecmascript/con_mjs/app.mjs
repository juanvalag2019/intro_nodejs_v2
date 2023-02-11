/*
  - El modulo addTwo no tiene un export por defecto por lo que se tiene que importar
    destructuring.
  - El modulo addThree si tiene un 'export default' por lo que se puede importar sin
    destructuring

*/
import { addTwo } from './addTwo.mjs'; //named export
import addThree from './addThree.mjs'; // default export

console.log(addTwo(4));
console.log(addThree(4));