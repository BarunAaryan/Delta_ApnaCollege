const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'college1', //name of DB to be used
  password: '21Grind@'
});
let q = "SHOW TABLES" //writing the queries by defining a varibale.
try{
  connection.query(q, (err, result)=>{
    if(err) throw err;
    console.log(result);
    console.log(result.length); //as the output is an array we can get teh length
  })
}catch(err){
  console.log(err);
}
connection.end(); //to end a connection

let getRandomUser= ()=>{
    return {
      Id: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }

