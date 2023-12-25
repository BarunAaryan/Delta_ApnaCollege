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
let data = [];
let getRandomUser= ()=>{
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
];
};
for(let i=1; i<= 100; i++){
  data.push(getRandomUser()); //100 fake data 
};


try{
  connection.query(q, [data], (err, result)=>{
    if(err) throw err; 
    console.log(result);  
  })
}catch(err){
  console.log(err);
} 
connection.end(); //to end a connection


