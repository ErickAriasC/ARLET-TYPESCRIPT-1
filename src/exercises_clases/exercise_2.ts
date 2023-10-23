// Crear una clase CuentaBancaria con propiedades como número de cuenta, 
// titular y saldo. Agregar métodos para depositar, 
// retirar y consultar saldo. Crear varias cuentas y probar los métodos.

class BankAccount {
    
    numberAccount:number;
    holderName: string;
    balance: number;

    constructor(numberAccount:number,holderName:string,balance:number){
        this.numberAccount=numberAccount;
        this.holderName=holderName;
        this.balance=balance;
    }

    
    withdraw(){
        //logica para hacer retiro
    }
    deposit(){
        //logica para hacer deposito

    }
    consultBalance(){
        //logica para hacer cosultar saldo

    }

} 


const user1=new BankAccount(1234567890,"Erick",1000)

console.log(user1);
