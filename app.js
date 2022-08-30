
// Funcion de Regla de 3 Simple
function calculo (a, b, c){
    return ((a * b) / c);
};

let i = Number(prompt("Cuantas veces quieres calcular?"));
for(i ; i > 0 ; i--){

    let a = Number(prompt("ingrese la cantidad de GRAMOS"));
    let b = Number(prompt("ingrese el PRECIO del producto"));
    let c = Number(prompt("ingrese la CANTIDAD QUE USO"));

// llamado a la funcion
let resultado = calculo(a, b, c,);

alert(resultado)
}


    