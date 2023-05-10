let Licencia=parseInt(prompt('Ingrese su edad'))
if(Licencia>=18){
    console.log('Puedes sacar la licencia de conducir')
}else if(Licencia<18){
    console.log('Eres menor no puedes conducir')
}else if(isNaN(Licencia)){
    console.log('El dato ingresado es incorrecto')
}else if(Licencia>=75){
    console.log('No puedes sacar la licencia')
}