import {sumarCaracteres} from "./RepasoFor";
import {esNumPar} from "./RepasoIf";

function imprimirPares(n:number){
    let i = 1;
    while (i<=n){
        if(i % 2 == 0){
            console.log(i);
        }
       i++; 
    }
}
//imprimirPares(20);

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

let arrC = ["Casa", "Coche", "Ciudad", "Cesta"];//20
let arrB = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];//39
let arrV = ["Venezuela", "Veneno", "Voltaje"];//22

let arrLetras = [arrC,arrB,arrV];

function esParCaracter(a){
    let valor = 0;
    let i = 0;
    while ( i < a.length ) {
        valor = sumarCaracteres(a[i]); 
        esNumPar(valor);
        i++  
    }
}
//esParCaracter(arrLetras);