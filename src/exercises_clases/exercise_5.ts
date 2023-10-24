// Crear una clase Electrodoméstico con subclases Televisor, 
// Nevera y Lavadora. Cada electrodoméstico tiene 
// propiedades como precio y color. Crear algunos objetos y probar.

class Electrodomestico {

    precio:number;
    color:string;

    constructor( precio:number,color:string){
        this.precio=precio;
        this.color=color;
    }

}

class Televisor extends Electrodomestico {

}
class Nevera extends Electrodomestico {
    
}
class Lavadora extends Electrodomestico {
    
}

const televisor= new Televisor(1000,"rojo")
const nevera= new Nevera(2000,"azul")
const lavadora= new Lavadora(3000,"verde")

console.log(televisor);
console.log(nevera);
console.log(lavadora);
