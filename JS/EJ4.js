let suma=0
do {
  let num = parseInt(prompt("Escriba un numero"));
  if (num == Number(num)) { 
    suma=suma+num
  } else {
    alert("No es un numero");
  }
} while (confirm("¿Desea seguir escribiendo?"));
document.write(suma)