/*
  - Se importa el modulo.
  - El modulo exportado es la var o función o clase que se exportó con module.exports
    
*/
const Square = require('./square.js');
const mySquare = new Square(2);
console.log(`The area of mySquare is ${mySquare.area()}`);