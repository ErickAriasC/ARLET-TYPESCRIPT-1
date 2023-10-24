// Crear una clase FiguraGeometrica y subclases Triángulo, 
// Círculo y Cuadrado. Implementar el método area() en
// cada subclase. Crear objetos y calcular sus áreas

class FiguraGeometrica {
    name:string;
    base: number;
    altura: number;

    constructor(name:string,base:number,altura:number){
        this.name=name;
        this.base=base;
        this.altura=altura;
    }
}

class Triangulo extends FiguraGeometrica{

    area(){
         let area = (this.base * this.altura) / 2
         console.log(`El area del ${this.name} es ${area}`);

    }
    
}

class Circulo extends FiguraGeometrica{


     area(){
        let radio:number;
        radio=this.base/2
        let area:number;
        area= 3.14 *(radio**2)
        console.log(`El area del ${this.name} es ${area}`);
        
    }
}

class Cuadrado extends FiguraGeometrica{
    
    area(){
        let area = (this.base * this.altura) 
        console.log(`El area del ${this.name} es ${area}`);

   }
}

let triangulo = new Triangulo("Triangulo",3,5)
let circulo = new Circulo("Circulo",3,5)
let cuadrado = new Cuadrado("Cuadrado",3,3)

console.log(triangulo.area());
console.log(circulo.area());
console.log(cuadrado.area());
