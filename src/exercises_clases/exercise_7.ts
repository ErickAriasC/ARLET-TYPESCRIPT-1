// // Crear una clase Película con propiedades como título, duración y director. 
// // Crear clase CatalogoPeliculas para almacenar películas en una lista.
// // Agregar búsqueda por título y filtrado por director. Probar con un catálogo de 
// // películas.


interface Pelicula {
    titulo: string;
    duracion: number;
    director: string;
  }
  
  class Pelicula implements Pelicula {
    constructor(public titulo: string, public duracion: number, public director: string) {}
  }
  
  class CatalogoPeliculas {
    public peliculas: Pelicula[] = [];
    
    agregarPelicula(pelicula: Pelicula) {
      this.peliculas.push(pelicula);
    }
  
    buscarPorTítulo(titulo: string): Pelicula | undefined {
      return this.peliculas.find((pelicula) => pelicula.titulo === titulo);
    }
  
    filtrarPorDirector(director: string): Pelicula[] {
      return this.peliculas.filter((pelicula) => pelicula.director === director);
    }
  }

  
const catalogo = new CatalogoPeliculas();

catalogo.agregarPelicula(new Pelicula("El Padrino", 175, "Francis Ford Coppola"));
catalogo.agregarPelicula(new Pelicula("El Señor de los Anillos: La Comunidad del Anillo", 178, "Peter Jackson"));
catalogo.agregarPelicula(new Pelicula("Casablanca", 102, "Michael Curtiz"));

const pelicula = catalogo.buscarPorTítulo("El Padrino");
//DESCOMENTAR EL SIGUIENTE CONSOLE.LOG PARA VER LA FUNCIONALIDAD DEL METODO BUSCAR

// console.log(pelicula);

const peliculasDeCoppola = catalogo.filtrarPorDirector("Francis Ford Coppola");
//DESCOMENTAR EL SIGUIENTE CONSOLE.LOG PARA VER LA FUNCIONALIDAD DEL METODO FILTRAR
// console.log(peliculasDeCoppola);

catalogo.peliculas.forEach((pelicula) => {
    //DESCOMENTAR EL SIGUIENTE CONSOLE.LOG PARA VER LA LISTA DE PELICULAS
    // console.log(pelicula);
    //vista en tabla
    // console.table(pelicula);
  });
