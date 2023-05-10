// let nombre1=prompt('Ingrese el primer nombre')
// let edad1=parseInt(prompt('Ingrese la edad 1'))
// let nombre2=prompt('Ingrese el segundo nombre')
// let edad2=parseInt(prompt('Ingrese la edad 2'))
// let nombre3=prompt('Ingrese el tercer nombre')
// let edad3=parseInt(prompt('Ingrese la edad 3'))

// if(edad1>edad2&&edad1>edad3){
//     document.write(nombre1)
// }else if(edad2>edad1&&edad2>edad3){
//     document.write(nombre2)
// }else if(edad3>edad1&&edad3>edad2){
//     document.write(nombre3)
// }

// CON Math
let nombre1 = prompt("Ingrese el primer nombre");
let edad1 = parseInt(prompt("Ingrese la edad 1"));
let nombre2 = prompt("Ingrese el segundo nombre");
let edad2 = parseInt(prompt("Ingrese la edad 2"));
let nombre3 = prompt("Ingrese el tercer nombre");
let edad3 = parseInt(prompt("Ingrese la edad 3"));
let mayor = Math.max(edad1, edad2, edad3);
let nombreMayor = "";
if (mayor == edad1) {
  nombreMayor = nombre1;
} else if (mayor == edad2) {
  nombreMayor = nombre2;
} else {
  nombreMayor = nombre3;
}
document.write(nombreMayor);
