const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'college1', //name of DB to be used
  password: '21Grind@'
});
//Inserting new data
let q = "INSERT INTO user (id, username, email, password) VALUES ? "; //writing the queries by defining a varibale.
let users =[["123b", "123_userb", "abcb@gmail.com", "abcb"], //users is arry of array
            ["123c", "123_userc", "abcc@gmail.com", "abcc"]];
try{
  connection.query(q, [users], (err, result)=>{
    if(err) throw err;
    console.log(result);  
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

