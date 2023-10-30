
//clases abstractas
abstract class Person{
    //propiedad
    name:string;

    // constructor
    constructor(name:string){
        this.name=name;
    }

    //metodo implementado
    display():void{
        console.log(this.name);
    }

    abstract find (persona:string):Person;//firma del metodo sin implementacion(abstracto)
}


class Employee extends Person{

    empCode:number;

    constructor(name:string,code:number){
        super(name)//debe llamar super
        this.empCode=code;
    }

    find(name:string): Person {
        return new Employee(name,1);
    }
}

let emp:Person=new Employee('James', 100);
emp.display();//muestra el nombre en la consola

let emp2:Person=emp.find('Steve');
emp2.display();//Steve



abstract class Animal{//clase abstracta

    abstract makeSound():void;//metodo abstracto

    move():void{
        console.log('Moving along');//metodo con implementacion
    }
}

class Dog extends Animal{//herencia
    makeSound(): void {//implementacion del metodo
        console.log('Woof woof!');
        
    }
}

const d=new Dog();//instancia
d.makeSound();
d.move();

abstract class Shape {
    abstract getArea():number;
}

class Circle extends Shape {
    constructor(private radius:number){
        super();
    }
    getArea(): number {
        return Math.PI*this.radius**2;
    }
}

const x = new Circle(3);
console.log(x.getArea());

abstract class Persona{
    //pripiedades abstractas
    abstract nombre:string;
    abstract edad:number;

    abstract saludar():void;
}

class Estudiante extends Persona{
    constructor(public nombre:string,public edad:number){
        super();
    }
    saludar():void{
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`); 
    }
}

const estudiante=new Estudiante('juan',23)
estudiante.saludar();

class Employee2{
    //modificador de acceso public, private y protected
    public empName:string;
    protected empCode:number;
    constructor (name:string,code:number){
        this.empName=name;
        this.empCode=code;
    }
}

class SalesEmployee extends Employee2{
    private departament:string;
    constructor(name:string,code:number, departament:string){
        super(name,code);
        this.departament=departament;
    }
    mostrar(){
        console.log(this.empName);
        console.log(this.empCode);
        console.log(this.departament);
    }
}

let emp3=new SalesEmployee('John Smith',123,'Sales');
emp3.empName='Jane Doe';
emp3.mostrar();

//STATICS
class Miclase{
    static propiedadEstatica='propiedad estatica';
    static mostrar(){
        return 'Hola desde la clase'
    }
}

console.log(Miclase.propiedadEstatica);
console.log(Miclase.mostrar());

class Constantes{
    static readonly PI=3.14;//estatico solo lectura
}

console.log(Constantes.PI);


class Punto{
    constructor(private _x:number, private _y:number){}
    get x(){
        return this._x;
    }

    set x(value:number){
        this._x=value;
    }
    
    get y(){
        return this._y;
    }

    set y(value:number){
        this._y=value;
    }
    static origen(){//metodo que llama al constructor de la clase
        return new Punto (2,7)
    }

}