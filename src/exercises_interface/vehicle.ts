// Crea una interface Vehicle con propiedades comunes a distintos vehículos como 
// model,year, color, etc. 
// Luego crea interfaces Car y Motorcycle que hereden de Vehicle y tengan propiedades específicas,
//  implemente en una  clase.

interface IVehicle {
    marca:string;
    model: string;
    year: number;
    color: string;

}

interface ICar extends IVehicle{
    cylinder:number;
}

interface IMotorcycle extends IVehicle{
    speeds:number;
}

class VehicleCar implements ICar{
    marca:'Chevrolet'	
    model: "Sail";
    year: 2020;
    color: "rojo";
    cylinder:4;
}

class VehicleMotorcycle implements IMotorcycle{
    marca:'auteco'
    model: "pulsa";
    year: 2018;
    color: "negra";
    speeds:5;
}
