const pool = require("../services/db");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const callback = (error, results, fields) => {
  if (error) {
    console.error("Error creating tables:", error);
  } else {
    console.log("Tables created successfully");
  }
  process.exit();
}


bcrypt.hash('devtest', saltRounds, (error, hash) => {
  if (error) {
    console.error("Error hashing password:", error);
  } else {
    console.log("Hashed password:", hash);
    
  const SQLSTATEMENT = `
  DROP TABLE IF EXISTS users;
    
  CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username TEXT,
    email TEXT,
    password TEXT,
    role TEXT,
    points INT NOT NULL,
    ranks TEXT
);

  
      `

    pool.query(SQLSTATEMENT, callback);
  }
});
