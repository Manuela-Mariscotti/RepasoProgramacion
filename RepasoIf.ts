function queSignoSos(dia:number,mes:number){
    let signo;
        if((dia>=21 && mes==3)||(dia<=20 && mes==4)){
            signo = "aries";
        }if((dia>=21 && mes==4)||(dia<=20 && mes==5)){
            signo = "tauro";
        }if((dia>=21 && mes==5)||(dia<=21 && mes==6)){
            signo = "géminis";
        }if((dia>=22 && mes==6)||(dia<=22 && mes==7)){
            signo = "cáncer";
        }if((dia>=22 && mes==7)||(dia<=23 && mes==8)){
            signo = "leo";
        }if((dia>=24 && mes==8)||(dia<=23 && mes==9)){
            signo = "virgo";
        }if((dia>=24 && mes==9)||(dia<=22 && mes==10)){
            signo = "libra";
        }if((dia>=23 && mes==10)||(dia<=22 && mes==11)){
            signo = "escorpio";
        }if((dia>=23 && mes==11)||(dia<=21 && mes==12)){
            signo = "sagitario";
        }if((dia>=22 && mes==12)||(dia<=20 && mes==1)){
            signo = "capricornio";
        }if((dia>=21 && mes==1)||(dia<=19 && mes==2)){
            signo = "acuario";
        }if((dia>=20 && mes==2)||(dia<=20 && mes==3)){
            signo = "piscis";
        }
    return signo;
}
//console.log(queSignoSos(25,3));

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

let lista = [1,11,17,2,5,7,4];
function esPar(array){
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0){
        console.log(array[i])
        }
    }
}
//esPar(lista);

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

let nombres = ["Manuela","Menchu","Marina","Maribel"];

function iniciarConM(array){
    let num = array.length;
    let todoM:boolean;
    for (let i = 0; i < array.length; i++) {
        if (array[i].charAt(0)=="M"){
            num -=1;
        }        
    }
    if(num==0){
        todoM= true;
    }else{
        todoM= false;
    }
    return todoM;
}
//console.log(iniciarConM(nombres));

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

export function esNumPar(n:number){
    if(n % 2 == 0){
        console.log(`${n} es numero par.`);
    }else{
        console.log(`${n} no es numero par.`);
    }
}
//esPar(1005);