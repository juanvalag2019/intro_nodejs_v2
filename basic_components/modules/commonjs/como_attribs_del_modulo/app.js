/*
  - Se importa el modulo.
  - En el se puede acceder a todas las funciones o variables que se añadieron
    al objeto 'exports'
    
*/
const circle = require('./circle.js');
/*
  - Se puede también con destructuring:
    const {area, circunference} = require('./circle.js');
*/
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);