const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('mysql://root:190582@localhost:32769/customer')

init = async() => {
try {
    await sequelize.authenticate();
    const Customer = sequelize.define('Customer', {
        Id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          field: "CustomerId"
        },
        Name: {
          type: DataTypes.STRING
        }
    });
    
    await Customer.sync();
    //await Customer.create({Id: 1, name: "Donald"});
    const allCustomers = await Customer.findAll();
    console.log("found " + allCustomers.length + " customer");

    const [result, metadata] = await sequelize.query("SELECT COUNT(*) Antall FROM Customers");
    console.log(result);
    

    //await sequelize.sync();
    await sequelize.close();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

}
  
init();