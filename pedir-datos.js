let perros = prompt("¿Cuántos perros tienes?");
let gatos = prompt("¿Cuántos gatos tienes?");

//Convertir a número
perros = parseInt(perros);
gatos = parseInt(gatos);

let TotalMascotas = perros + gatos;

console.log("En total tienes " + TotalMascotas + "mascotas.");