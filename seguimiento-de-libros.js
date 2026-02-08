let LibrosLeidos=[];
//Definir una función que añada un libro a un array llamado "LibrosLeidos"
function AgregarLibro(titulo){
    LibrosLeidos.push(titulo);
}
//Definir una función que imprima todos los libros que he leído
function MostrarLibrosLeidos(){
    console.log("Libros leidos:");
    for(let i=0; i<LibrosLeidos.length;i++){
        console.log(LibrosLeidos[i]);
    }
}


let titulo="";
while(titulo !==null){
    titulo = prompt("Escribe el título de un libro que hayas leído. (Cancelar para salir)");
    if (titulo !== null && titulo !==""){
        AgregarLibro(titulo);
    }
}+
MostrarLibrosLeidos();