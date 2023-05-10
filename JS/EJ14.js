let texto = prompt("Escriba una frase");

let textoSep = "";
for (let i = 0; i <= texto.length; i++) {
  if (i === 0) {
    textoSep += texto.charAt(i);
  } else {
      textoSep += "-" + texto.charAt(i);
  }

}
console.log(textoSep)
