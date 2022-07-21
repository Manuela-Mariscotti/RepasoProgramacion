let asia ={ 
    nombre:"Asia",
    paises:["China","India","Indonesia","Vietnam","Japón"]
};    
let america = {
    nombre:"America",
    paises:["Argentina","Brazil","Chile","Uruguay","Paraguay"]
};
let europa = {
    nombre:"Europa",
    paises:["España","Portugal","Francia","Italia","Alemania"]
};
let africa = {
    nombre : "Africa",
    paises:["Etiopia","Marruecos","Argelia","Egipto","Angola"]
};
let oceania = {
    nombre:"Oceania",
    paises:["Nueva Zelanda","Australia","Fiyi","Samoa","Guam"]
};
let continentes = [asia,america,europa,africa,oceania];

function decirContinente(pais){
    for (let i = 0; i < continentes.length; i++) {
        let currentContinent=continentes[i];
        let paises=currentContinent.paises;
        for (let i = 0; i< paises.length; i++) {
            if(paises[i]==pais){
            console.log(currentContinent.nombre)
            }
        }
    }
}
//decirContinente("Argelia");

////////////////////////////////////////////////////
////////////////////////////////////////////////////

let arr = [1,2,3,4,5];

function revertir(arr2:number[]){
    let arr3=new Array;
    for (let i = 0; i < arr2.length; i++) {
       arr3.unshift(arr2[i]);
    }
    return arr3;
}
//console.log(revertir(arr));

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

let por = ["arbol","hoja","salto","luz"];//17

export function sumarCaracteres(array){
    let sumatoria=0 ;
    for (let i = 0; i < array.length; i++) {
        let valor = array[i].length;
        sumatoria += valor;
    }
    return sumatoria;
}
//console.log(sumarCaracteres(por));

