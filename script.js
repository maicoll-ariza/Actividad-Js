/*
function mostrarPrimos(){
    document.getElementById("primo").style.display=""
    document.getElementById("sumatoria").style.display="none";
    document.getElementById("fibonacci").style.display="none"
    document.getElementById("main-article").style.display="none"
}
function mostrarSumatoria(){
    document.getElementById("sumatoria").style.display="";
    document.getElementById("primo").style.display="none";
    document.getElementById("fibonacci").style.display="none"
    document.getElementById("main-article").style.display="none"
}
function mostrarFibonacci(){
    document.getElementById("fibonacci").style.display=""
    document.getElementById("sumatoria").style.display="none";
    document.getElementById("primo").style.display="none"
    document.getElementById("main-article").style.display="none"
}
function mostrarMenu(){
    document.getElementById("sumatoria").style.display="none";
    document.getElementById("fibonacci").style.display="none"
    document.getElementById("primo").style.display="none"
    document.getElementById("main-article").style.display=""
}
function mostrarSumatoria(){
    var numeroSumatoria=document.getElementById("digitoUsuarioSumatoria").value
    var vectorSumatoria=[numeroSumatoria]
    let totalSumatoria=0;
    for (let i = 0; i< numeroSumatoria; i++) {
        vectorSumatoria[i]=Math.pow((i+1), numeroSumatoria)
        
        totalSumatoria=totalSumatoria+vectorSumatoria[i]
        document.getElementById("text-sumatoria").innerHTML=(i+1)+"^"+numeroSumatoria+"="
        document.getElementById("text-sumatoria").innerHTML=vectorSumatoria[i]+"<br>"
    } 
    document.getElementById("text-area").innerHTML="La sumatoria es: "+totalSumatoria
}
document.write((i+1)+"^"+numeroSumatoria+"=");
document.write(vectorSumatoria[i]+"<br>");
*/
function numPrimos() {
    let nPrimo=parseInt(prompt("Digite un numero: "))
    let j = 2;
    let numerosPrimos = [];

    for (; j < nPrimo; j++) {

        if (primo(j)) {
            numerosPrimos.push(j);
        }
    }
document.write(numerosPrimos);

    function primo(numero) {
        for (var i = 2; i < numero; i++) {
            if (numero % i === 0) {
            return false;
            }
        }
    return numero !== 1;
    }
}
 function solucionSumatoria(){
    let nSumatoria=parseInt(prompt("Introduzca el numero al que le desea calcular la sumatoria: "))
    var vectorSumatoria=[nSumatoria]
    let totalSumatoria=0;
    for (let i = 0; i< nSumatoria; i++) {
        vectorSumatoria[i]=Math.pow((i+1), nSumatoria)
        document.write((i+1)+"^"+nSumatoria+"=");
        document.write(vectorSumatoria[i]+"<br>");
        totalSumatoria= totalSumatoria+vectorSumatoria[i]
    }
document.write("La sumatoria es: "+totalSumatoria)
 }
function solucionFibonacci(){
    let fibonacci=parseInt(prompt("Ingrese la canctidad de numero que desea ver de la sucesion de Fibonacci: "))
    let vectorFibonacci= [0, 1]
    if(fibonacci==1){
        alert("La sucesión de Fibonacci que usted eligió es "+ fibonacci+ " es: "+vectorFibonacci[0])
    }else {
        for (let i = 2; i < fibonacci; i++) {
            let n= vectorFibonacci[i-1]+ vectorFibonacci[i-2]
            vectorFibonacci.push(n)
        }
        alert("La sucesión de Fibonacci que usted eligió es "+ fibonacci+ " es: "+vectorFibonacci)   
    }
}
let opcionFuncion=parseInt(prompt("Ingrese 1 si desea ver el punto de los Numeros Primos. Ingrese 2 si desea ver el punto de la Sumatoria. Ingrese 3 si desea ver el punto de Fibonacci "))
switch (opcionFuncion){
    case 1:
       numPrimos();
    break;
    case 2:
        solucionSumatoria();
    break;
    case 3:
        solucionFibonacci();
    break;   
    default:
        alert("Está función no está incluida. Por favor, recargue la página e introduzca un valor correcto ")
    break;
}