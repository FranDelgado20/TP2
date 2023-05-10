let num = parseInt(prompt("Escriba un numero del 1 al 50"));
if (num <= 50) {
  for (let i = num; i>=1; i--) {
    for (let j = i; j>=1; j--) {
        document.write(i)
    }
    document.write('<br>')
  }
} else {
  alert("TE DIJE HASTA EL 50");
}
