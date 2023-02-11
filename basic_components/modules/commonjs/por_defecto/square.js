/*
  - Se puede hacer una exportación por defecto de una var o funcion o clase
    por medio del objeto reservado 'module.exports'
  - Esto inhabilita la modificación y exportación con el objeto 'exports'
 */
module.exports = class Square {
  constructor(width) {
    this.width = width;
  }

  area() {
    return this.width ** 2;
  }
};