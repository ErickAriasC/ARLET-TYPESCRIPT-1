// crear una clase Hotel con propiedades como nombre y ubicación. 
// Crear clase Habitación con número de habitación, precio y estado.
// Agregar métodos para reservar y liberar habitación.
// Probar con algunos hoteles e interacciones.


class Hotel {

    name:string;
    ubicacion: string;
    constructor(name:string,ubicacion: string){
        this.name=name;
        this.ubicacion=ubicacion;
    }

}
const hotel= new Hotel("Mocawa","Armenia Cra 14")
console.log(hotel);


class Habitacion {
    numberRoom:number;
    precio:number;
    estado:boolean;

    constructor(numberRoom:number,precio:number,estado:boolean){
        this.numberRoom=numberRoom;
        this.precio=precio;
        this.estado=estado;
    }

    reservar(){
        if (this.estado===true) {
            console.log(`la habitacion ${this.numberRoom} está RESERVADA, no se puede reservar`);
        }else{
            this.estado=true;
            console.log(`habitacion ${this.numberRoom} RESERVACION EXITOSA`);
        }
    }

    liberar(){

        if (this.estado===false) {
            console.log(`la habitacion ${this.numberRoom} está LIBRE, no se puede liberar`);
        }else{
            this.estado=false;
            console.log(`habitacion ${this.numberRoom} LIBERACIÓN EXITOSA`);
        }
    }

}

const habitacion=new Habitacion(3,5000,false);
console.log(habitacion);//estado de la habitacion FALSE -> osea que esta libre 
console.log(habitacion.reservar());//reservar la habitacion
console.log(habitacion.reservar());// se intenta reservar nuevamente-> como el estado de la habitacion cambio a TRUE ya esta reservada-> no debe permitir la reservacion nuevamente
console.log(habitacion.liberar());//se libera la habitacion reservada
console.log(habitacion.liberar());//se prueba liberar nuevamente la habitacion pero como el estado ya esta en FALSE no debe permitir la liberacion 
