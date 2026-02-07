let frutas = ["ciruela","chabacano","melón","sandía","chabacano","melón","melón","sandía","fresa","chabacano","ciruela"];
const ConteoDeFrutas = {};
//Se crea un ciclo for para recorrer el arreglo y contar las frutas
for(let i=0; i<frutas.length;i++){
    const fruta=frutas[i];
if(ConteoDeFrutas[fruta]){
    ConteoDeFrutas[fruta]++;
}else{
    ConteoDeFrutas[fruta] = 1;
}
}
//Resultados en consola
console.log("Clasificación y conteo de las frutas (usando for):");
for(let fruta in ConteoDeFrutas){
    console.log(fruta+":"+ConteoDeFrutas[fruta]);
}
