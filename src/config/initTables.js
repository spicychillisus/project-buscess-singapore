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
        rank TEXT
    );
    
    CREATE TABLE posts (
        post_id INT PRIMARY KEY AUTO_INCREMENT,
        post_name TEXT,
        post_likes INT NOT NULL,
        post_description TEXT
    );
    
    CREATE TABLE messages (
        message_id INT PRIMARY KEY AUTO_INCREMENT,
        user_id INT NOT NULL,
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        
    );
    
    INSERT INTO User (username, email, password) VALUES
    ("devtest", "admin@hotmail.com", "${hash}");
    
    
      `

    pool.query(SQLSTATEMENT, callback);
  }
});
