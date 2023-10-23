// Crear una clase Vehículo con subclases Coche, Barco y Avión. Cada subclase implementa su propio método
// desplazarse (). Crear objetos de las subclases y probar sus métodos.

class Vehiculo {
    
    name:string;
    modelYear:number;

    constructor(name:string,modelYear:number) {
        this.name=name;
        this.modelYear=modelYear;
    }

    
}

class Coche extends Vehiculo{

    desplazarse(){
        console.log(`el coche ${this.name} esta rodando y es de modelo: ${this.modelYear}`);
    }
}

class Barco extends Vehiculo{
    desplazarse(){
        console.log(`el barco ${this.name} esta rodando y es de modelo: ${this.modelYear}`);
    }
}

class Avion extends Vehiculo{
    desplazarse(){
        console.log(`el avion ${this.name} esta rodando y es de modelo: ${this.modelYear}`);
    }
}


const coche=new Coche("Ferrari",2020)
const barco=new Barco("titanic",2022)
const avion=new Avion("avianca",2027)

console.log(coche.desplazarse());
console.log(barco.desplazarse());
console.log(avion.desplazarse());
