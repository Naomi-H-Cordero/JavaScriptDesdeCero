/*Objeto creado a partir de un libro,
con varias propiedades y que imprime la información básica del libro*/
const libro = {
    titulo: "Frankenstein; o, el moderno Prometeo",
    autor: "Mary Shelley",
    anio: 1818,
    estado: "Disponible",
    //Método para imprimir la información del libro
    describirLibro(){
       console.log(`Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    }
};
//Llamada al método
libro.describirLibro();