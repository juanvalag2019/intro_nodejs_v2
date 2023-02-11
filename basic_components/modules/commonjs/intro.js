/*
  Los modulos CommonJS fueron la forma original en que se dio soporte 
  para encapsular código modular en node:

  - Para exportar una var o funcion se hace uso del objeto reservado 'exports'
  - Usando 'require' siempre usará el CommonJS loader

  - Por defecto node tratará estos archivos como modulos CommonJS:
    - Files with a .cjs extension;
    - Files with a .js extension when the nearest parent package.json
      file contains a top-level field "type" with a value of "commonjs".
    
  - Mas info:
    https://nodejs.org/api/modules.html#:~:text=By%20default%2C%20Node.js%20will%20treat%20the%20following%20as%20CommonJS%20modules%3A
*/