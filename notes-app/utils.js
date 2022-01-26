console.log("utils.js");

const name = "Beatriz";

const add = function (a, b) {
  return a + b;
};

//module.exports = name; //para exportar la variable al otro archivo.
module.exports = add; // para exportar la funcion add
