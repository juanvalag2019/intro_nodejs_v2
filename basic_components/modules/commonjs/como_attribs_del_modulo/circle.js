/*
  - Se exporta dos funciones como parte del objeto exports.
*/

const { PI } = Math;

exports.area = (r) => PI * r ** 2;
exports.circunference = (r) => 2 * PI * r; 