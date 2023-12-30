const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true })); //to parse the form data
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

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
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};
// for(let i=1; i<= 100; i++){
//   data.push(getRandomUser()); //100 fake data   
// };


// try{
//   connection.query(q, [data], (err, result)=>{
//     if(err) throw err; 
//     console.log(result);  
//   })
// }catch(err){
//   console.log(err);
// } 
// connection.end(); //to end a connection

//home route
app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    })
  } catch (err) {
    console.log(err);
    res.send("Some error in database");
  }
});

//Show Route
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      //console.log(result); 
      res.render("showusers.ejs", { users });
    })
  } catch (err) {
    console.log(err);
    res.send("Some error in database");
  }
});

//Edit Route
app.get("/user/:id/edit", (req, res) => {
  let {id} = req.params;
  let q= `SELECT * FROM user WHERE id='${id}'`;
  // res.render("edit.ejs");
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      // console.log(result);
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in database");
  }
});

//UPDATE (db) ROUTE
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      //console.log(result);
      if (formPass != user.password) {
        res.send("Wrong Password");
      } else {
        //query to update username
        let q2 = `UPDATE user SET username='${newUsername}'  WHERE id='${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in database");
  }
});

app.listen("8080", () => {
  console.log("Server is listening to port 8080");
});

