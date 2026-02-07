let i=0;
//Se crea un ciclo while para recorrer el arreglo y contar las frutas
while(i<frutas.length){
    const fruta=frutas[i];

    if(ConteoDeFrutas[fruta]){
        ConteoDeFrutas[fruta]++;
    }else{
        ConteoDeFrutas[fruta]=1;
    }
    i++;
    }
//Resultados en consola
console.log("Clasificación y conteo de las frutas (usando while):");
for(let fruta in ConteoDeFrutas){
    console.log(fruta+":"+ConteoDeFrutas[fruta]);
}