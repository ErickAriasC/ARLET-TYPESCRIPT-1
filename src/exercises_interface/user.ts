// Crea una interface User y otra interfaz Admin que herede de User. 
// Crea una función para imprimir datos de 
// usuario que acepte tanto User como Admin.

interface IUser{
    name:string;
    age: number;
    number_phone:number
}

interface IAdmin extends IUser{
    occupation: string;

}

let user1: IAdmin={
    name:'Erick',
    age: 23,
    number_phone:322222222,
    occupation: 'admin'
}

