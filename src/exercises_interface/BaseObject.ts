// Crea una interface BaseObject con una propiedad id. Luego crea interfaces User, Product y Order que hereden de
// BaseObject. Crea una función genérica que pueda imprimir los datos.

interface BaseObject {
    id: number;
}


interface User extends BaseObject {
    name: string;
    email: string;
}

interface Product extends BaseObject {
    name: string;
    price: number;
}

interface Order extends BaseObject {
    user: User;
    products: Product;
    quantity: number;
}

// se cre una función genérica para imprimir los datos de un objeto que implementa BaseObject.
function printObjectData<T extends BaseObject>(obj: T) {
    console.log(`ID: ${obj.id}`);
}


const user: User = { id: 1, name: "Usuario Ejemplo", email: "usuario@example.com" };
const products: Product = { id: 2, name: "Producto de Ejemplo", price: 19.99 };
const order: Order = { id: 3, user, products, quantity: 2 };

printObjectData(user);
printObjectData(products);
printObjectData(order);


