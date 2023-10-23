// Crear una clase Persona con propiedades como nombre, edad, documento identidad y 
// métodos como caminar(), hablar(), comer(). 
// Crear algunos objetos Persona e interactuar con sus propiedades y métodos.

class Person {

    name:string;
    age:number;
    id:number;

    constructor(name:string,age:number,id:number){
        this.name=name;
        this.age=age;
        this.id=id;
    }

    walk(){
        console.log(`Hola, ${this.name} esta caminando`);
    }
    talk(){
        console.log(`${this.name} dice que tiene ${this.age} años y su id es: ${this.id}`);
    }
    eat(){
        console.log(`${this.name} esta comiendo`);
    }

}

const Erick=new Person("Erick",23,1123456789);

console.log(Erick);
