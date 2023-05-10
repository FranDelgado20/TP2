let texto=prompt('Escriba una frase')
let invertido=''
for(let i=texto.length-1;i>=0;i--){
    invertido+=texto.charAt(i)
    
}
console.log(invertido)