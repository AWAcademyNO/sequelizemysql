const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql://root:sekrit123@localhost:3306/world')

init = async() => {
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

}
  
init();