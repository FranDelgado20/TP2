let concatenada = "";
do {
  let texto = prompt("Escriba una frase");
  if (concatenada == "") {
    concatenada = concatenada + texto;
  } else {
    concatenada = concatenada + "-" + texto;
  }
} while (confirm("¿Desea seguir escribiendo?"));

document.write(concatenada)