let texto = prompt('Ingrese texto')
let vocales=['a','e','i','o','u']
let VocalesContadas=0

for(let i=0; i<=texto.length;i++){
  if(vocales.indexOf(texto.charAt(i))!==-1){
    VocalesContadas++
  }
}
console.log(VocalesContadas)
 