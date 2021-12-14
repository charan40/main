const express = require("express");
const mysql = require("mysql2");
const dotenv = require("dotenv");
const bp = require("body-parser");
const cors = require("cors");
const app = express();
const router = express.Router();

app.use(cors());
dotenv.config();
app.use(bp.urlencoded({ extended: false }));
// Taken json from body
app.use(bp.json());
app.use("/", router);

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

/* Connect to DB */
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected DB: " + process.env.MYSQL_DATABASE);
});

router.get("/", function (req, res) {
  console.log("Welcome to Nattaya website!");
});
/* Products */
/* User and Admin*/

/*Testing select all from menu*/
/*
  method: GET
  URL: http://localhost:3030/menus
*/
//authenticateJWT
router.get("/menus", function (req, res) {
  console.log("Retrieved all menu in nittaya");
  const sql = "select * from menu;";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({
      error: false,
      data: result,
      message: "product list",
    });
  });
});

/*Testing1 select a product by ID*/
/*
  method: GET
  URL: http://localhost:3030/menu/10001
*/
/*Testing select2 a product by ID*/
/*
  method: GET
  URL: http://localhost:3030/menu/20001
*/
//authenticateJWT
router.get("/menu/:id", function (req, res) {
  const menuID = req.params.id;
  const sql = "select * from menu where MIDs=?";
  if (!menuID) {
    return res.status(400).send({
      error: true,
      message: "Please define menuID",
    });
  }
  connection.query(sql, menuID, function (err, result) {
    if (err) throw err;
    return res.send({
      error: false,
      data: result[0],
      message: "received",
    });
  });
});
/*Testing1 select a menu by name*/
/*
  method: GET
  URL: http://localhost:3030/menu/name/Grilled chicken
*/

/*Testing select2 a menu by name*/
/*
  method: GET
  URL: http://localhost:3030/menu/name/juice
*/
//authenticateJWT
router.get("/menu/name/:name", function (req, res) {
  const menuName = req.params.name;
  const sql = `select * from menu where MName like "%${menuName}%"`;
  if (!menuName) {
    return res.status(400).send({
      error: true,
      message: "Please define product name",
    });
  }
  connection.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({
      error: false,
      data: result,
      message: "received",
    });
  });
});

router.get("/menu/cate/:cate", function (req, res) {
  const menuName = req.params.cate;
  const sql = `select * from menu where category_id=${menuName}`;
  if (!menuName) {
    return res.status(400).send({
      error: true,
      message: "Please define product name",
    });
  }
  connection.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({
      error: false,
      data: result,
      message: "received",
    });
  });
});

/* Admin users */
/*Testing1 login log information*/
/*
  method: GET
  URL: http://localhost:3030/log/login-log
*/
//authenticateJWT
router.get("/log/login-log", function (req, res) {
  // const { role } = req.user;
  // if (role !== "admin") {
  //   return res.sendStatus(403);
  // }
  const sql = "select * from Login_information";
  console.log("Retrieve login log information!");
  connection.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({
      error: false,
      data: result,
      message: "Login log list!",
    });
  });
});

/* Testing1 insert a new product */
/*
  method: post
  URL: http://localhost:3030/menu/insert
  body: raw JSON
  {
    "Menu": {
        "MIDs": 20011,
        "MName": "MK X Fire Tiger", 
        "MPrice": 79, 
        "MDetail": null,
        "MIngredient": null,
        "category_id": 2
    }
  } 
*/
/* Testing2 insert a new product */
/*
  method: POST
  URL: http://localhost:3030/menu/insert
  body: raw JSON
  {    
    "Menu": {
        "MIDs": 10006,
        "MName":"The box all star",
        "MPrice": 149,
        "MDetail": null,
        "MIngredient": null,
        "category_id": 1
    }
  }
*/
//authenticateJWT
router.post("/menu/insert", function (req, res) {
  // const { role } = req.user;

  // if (role !== "admin") {
  //   return res.sendStatus(403);
  // }

  let product = req.body.Menu;
  const sql = "insert into menu set ? ";
  console.log(req.body);
  console.log(sql);
  if (!product) {
    return res.status(400).send({
      error: true,
      message: "Please sent product data",
    });
  }
  connection.query(sql, product, function (err, result) {
    if (err) throw err;
    return res.send({
      error: false,
      data: result.affectedRows,
      message: "Table menu has been inserted new product!",
      new_product: product,
    });
  });
});

/* Testing1 update a product */
/*
  method: PUT
  URL: http://localhost:3030/menu/update 
  body: raw JSON
  {
    "Menu": {
        "MIDs": 20011,
        "MName": "MK X Fire Tiger", 
        "MPrice": 50, 
        "MDetail": "Promotion discounted!",
        "MIngredient": null,
        "category_id": 2
    }
  } 
*/
/* Testing2 update a product */
/*
  method: PUT
  URL: http://localhost:3030/menu/update
  body: raw JSON
  {    
    "Menu": {
        "MIDs": 10006,
        "MName":"The box all star",
        "MPrice": 102,
        "MDetail": "Promotion discounted!",
        "MIngredient": null,
        "category_id": 1
    }
  }
*/
//authenticateJWT
router.put("/menu/update", function (req, res) {
  // const { role } = req.user;

  // if (role !== "admin") {
  //   return res.sendStatus(403);
  // }

  const menuID = req.body.Menu.MIDs;
  const product = req.body.Menu;
  const sql = `update menu set ? where MIDs = ${menuID}`;
  if (!menuID || !product) {
    return res.status(400).send({
      error: true,
      message: "Please sent menuID or product data",
    });
  }
  connection.query(sql, product, function (err, result) {
    if (err) throw err;
    return res.send({
      error: false,
      data: result.affectedRows,
      message: "Table menu has been updated!",
    });
  });
});

/* Testing1 delete a product by id*/
/*
  method: DELETE
  URL: http://localhost:3030/menu/delete
  body: raw JSON
  {    
    "MIDs": 20011
  }
*/

/* Testing2 delete a product */
/*
  method: DELETE
  URL: http://localhost:3030/menu/delete
  body: raw JSON
  {    
    "MIDs": 10006
  }
*/
//authenticateJWT
router.delete("/menu/delete", function (req, res) {
  // const { role } = req.user;

  // if (role !== "admin") {
  //   return res.sendStatus(403);
  // }

  const menuID = req.body.MIDs;
  const sql = `delete from menu where MIDs = ${menuID}`;
  console.log(sql);
  if (!menuID) {
    return res.status(400).send({
      error: true,
      message: "Please sent menuID",
    });
  }
  connection.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({
      error: false,
      data: result.affectedRows,
      message: `product id ${menuID} has been deleted!`,
    });
  });
});



/* Person */
/* login information */

/*Testing select all personal information*/
/*
  method: GET
  URL: http://localhost:3030/persons
*/
//authenticateJWT
router.get("/persons", function (req, res) {
  // const { role } = req.user;

  // if (role !== "admin") {
  //   return res.sendStatus(403);
  // }

  const sql = "select * from Persons";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({
      error: false,
      data: result,
      message: "personal informations",
    });
  });
});

/*Testing1 select personal information from ID*/
/*
  method: GET
  URL: http://localhost:3030/person/6288031
*/

/*Testing2 select personal information from ID*/
/*
  method: GET
  URL: http://localhost:3030/person/6288043
*/
//authenticateJWT
router.get("/person/:id", function (req, res) {
  // const { role } = req.user;

  // if (role !== "admin") {
  //   return res.sendStatus(403);
  // }

  let personID = req.params.id;
  const sql = `select * from Persons where PersonID=${personID}`;
  console.log(personID);
  if (!personID) {
    return res
      .status(400)
      .send({ error: true, message: "Please define personID." });
  }
  connection.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({
      error: false,
      data: result[0],
      message: "Personal information retrieved!",
    });
  });
});
router.get("/person/find/:Role", function (req, res) {
  // const { role } = req.user;

  // if (role !== "admin") {
  //   return res.sendStatus(403);
  // }

  let aURole = req.params.Role;
  const sql = `select * from Persons where uRole like "%${aURole}%"`;
  console.log(aURole);
  if (!aURole) {
    return res
      .status(400)
      .send({ error: true, message: "Please define personID." });
  }
  connection.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({
      error: false,
      data: result[0],
      message: "Personal information retrieved!",
    });
  });
});
router.get("/person/Fname/:name", function (req, res) {
  // const { role } = req.user;

  // if (role !== "admin") {
  //   return res.sendStatus(403);
  // }

  let Fname = req.params.name;
  const sql = `select * from Persons where FirstName like "%${Fname}%"`;
  console.log(Fname);
  if (!Fname) {
    return res
      .status(400)
      .send({ error: true, message: "Please define personID." });
  }
  connection.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({
      error: false,
      data: result[0],
      message: "Personal information retrieved!",
    });
  });
});
/* select person from name */

/* Testing1 insert new person*/
/*
  method: POST
  URL: http://localhost:3030/person/insert
  body: raw JSON
  {
    "Persons": {
        "PersonID": 6288099,
        "FirstName": "Krittitee",
        "LastName": "Nildam",
        "Email": "krittitee.nil@student.mahidol.ac.th",
        "UserN": "BoatKN",
        "Pass": "B20622",
        "uRole": "admin"
    }
  } 
*/
/* Testing2 insert new person*/
/*
  method: POST
  URL: http://localhost:3030/menu/insert
  body: raw JSON
  {    
    "Persons": {
        "PersonID": 6288102,
        "FirstName": "Krissanapong",
        "LastName": "Palakhum",
        "Email": "krissanapong.pal@student.mahidol.ac.th",
        "UserN": "Punny",
        "Pass": "P1234",
        "uRole": "admin"
    }
  }
*/
//authenticateJWT
router.post("/person/insert", function (req, res) {
  // const { role } = req.user;

  // if (role !== "admin") {
  //   return res.sendStatus(403);
  // }

  let person = req.body.Persons;
  const sql = "insert into Persons set ?";
  console.log(person);
  if (!person) {
    return res
      .status(400)
      .send({ error: true, message: "Please define personal information" });
  }
  connection.query(sql, person, function (err, result) {
    if (err) throw err;
    return res.send({
      error: false,
      data: result.affectedRows,
      message: "New personal information has been inserted!.",
    });
  });
});

/* Testing1 update person*/
/*
  method: PUT
  URL: http://localhost:3030/person/insert
  body: raw JSON
  {
    "Persons": {
        "PersonID": 6288099,
        "FirstName": "Krittitee",
        "LastName": "Nildam",
        "Email": "boat_kn5683@hotmail.com",
        "UserN": "Noisy_i3oAt",
        "Pass": "zaboat007",
        "uRole": "admin"
    }
  } 
*/
/* Testing2 update person*/
/*
  method: PUT
  URL: http://localhost:3030/person/insert
  body: raw JSON
  {    
    "Persons": {
        "PersonID": 6288102,
        "FirstName": "Krissanapong",
        "LastName": "Palakhum",
        "Email": "punny_5678@gmail.com",
        "UserN": "withPunny",
        "Pass": "Punzakungz",
        "uRole": "admin"
    }
  }
*/
//authenticateJWT
router.put("/person/update", function (req, res) {
  // const { role } = req.user;

  // if (role !== "admin") {
  //   return res.sendStatus(403);
  // }

  let PersonID = req.body.Persons.PersonID;
  let Persons = req.body.Persons;
  //console.log(PersonID + " " + Persons);
  //const sql = `update Persons set ${person} where PersonID = ${personID}`;
  if (!PersonID || !Persons) {
    return res
      .status(400)
      .send({
        error: true,
        message: "Please provide personal information or PersonID",
      });
  }
  connection.query("UPDATE Persons SET ? WHERE PersonID = ?", [Persons, PersonID], function (error,
    results) {
    if (error) throw error;
    return res.send({ error: false, data: results.affectedRows, message: 'Personal information has been updated!.' })
});
  // connection.query(sql, person, function (err, result) {
  //   if (err) throw err;
  //   return res.send({
  //     error: false,
  //     data: result.affectedRows,
  //     message: "Personal information has been updated!",
  //   });
  // });
});
/* Testing1 delete person */
/*
  method: DELETE
  URL: http://localhost:3030/person/delete
  body: raw JSON
  {
    "PersonID": 6288099
}
*/

/* Testing2 delete person*/
/*
  method: DELETE
  URL: http://localhost:3030/person/delete
  body: raw JSON
  {
    "PersonID": 6288102
}
*/
//authenticateJWT
router.delete("/person/delete", function (req, res) {
  // const { role } = req.user;

  // if (role !== "admin") {
  //   return res.sendStatus(403);
  // }

  let personID = req.body.PersonID;
  //const sql = `delete from Persons where PersonID = ${personID}`;
  if (!personID) {
    return res
      .status(400)
      .send({ error: true, message: "Please define personID" });
  }
  connection.query('DELETE FROM Persons WHERE PersonID = ?', [personID], function (error, results) {
    if (error) throw error;
    return res.send({
        error: false, data: results.affectedRows, message: 'Personal information has been deleted!.'
    });
});
  // connection.query(sql, personID, function (err, result) {
  //   if (err) throw err;
  //   return res.send({
  //     error: false,
  //     data: result.affectedRows,
  //     message: "Personal information has been deleted!",
  //   });
  // });
});

/* Server listening */
app.listen(process.env.PORT, function () {
  console.log("Server listening at Port " + process.env.PORT);
});
