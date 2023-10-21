// Crea una interface Database con funciones como connect, find, update, etc. Luego crea una clase
// MySQLDatabase e SQLiteDatabase que implementen esa interface con distintas funcionalidades.

interface Database {
    connect(): void;
    find(id: number): any;
    update(id: number, data: any): void;
  }
  
  class MySQLDatabase implements Database {
    connect() {
      console.log('Conectando a la base de datos MySQL...');
    }
  
    find(id: number) {
      console.log(`Buscando datos en MySQL para ID: ${id}`);
    }
  
    update(id: number, data: any) {
      console.log(`Actualizando datos en MySQL para ID: ${id}`);
    }
  }
  
  class SQLiteDatabase implements Database {
    connect() {
      console.log('Conectando a la base de datos SQLite...');
    }
  
    find(id: number) {
      console.log(`Buscando datos en SQLite para ID: ${id}`);
    }
  
    update(id: number, data: any) {
      console.log(`Actualizando datos en SQLite para ID: ${id}`);
    }
  }
  
  const mySQLDatabase = new MySQLDatabase();
  mySQLDatabase.connect();
  mySQLDatabase.find(1);
  mySQLDatabase.update(1, { name: 'Nueva información' });
  
  const sqliteDatabase = new SQLiteDatabase();
  sqliteDatabase.connect();
  sqliteDatabase.find(2);
  sqliteDatabase.update(2, { name: 'Nueva información' });
  