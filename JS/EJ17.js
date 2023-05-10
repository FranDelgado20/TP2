let texto=prompt('Ingrese texto')
let primeraVocal=''
let vocales=['a','e','i','o','u']
for(let i=0;i<=texto.length;i++){
    if(vocales.indexOf(texto.charAt(i))!==-1){
        primeraVocal=i
        break
    }
    
}
console.log(primeraVocal)