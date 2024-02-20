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
        user_code INT NOT NULL,
        username TEXT,
        email TEXT,
        password TEXT,
        role TEXT,
        points INT NOT NULL,
        ranks TEXT
    );

    DROP TABLE IF EXISTS posts;
    
    CREATE TABLE posts (
        post_id INT PRIMARY KEY AUTO_INCREMENT,
        post_name TEXT,
        post_likes INT NOT NULL,
        post_description TEXT
    );

    DROP TABLE IF EXISTS forum_messages;
    
    CREATE TABLE forum_messages (
        message_id INT PRIMARY KEY AUTO_INCREMENT,
        user_id INT NOT NULL,
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        
    );

    DROP TABLE IF EXISTS vehicle_models;

    CREATE TABLE vehicle_models (
      vehicle_id INT PRIMARY KEY AUTO_INCREMENT,
      vehicle_code INT NOT NULL,
      vehicle_name TEXT,
      vehicle_type TEXT,
      vehicle_manufacturer TEXT,
      vehicle_description TEXT,
      vehicle_category TEXT
    );

    DROP TABLE IF EXISTS train_models;

    CREATE TABLE train_models (
      train_id INT PRIMARY KEY AUTO_INCREMENT,
      train_code INT NOT NULL,
      train_name TEXT,
      train_debut_year INT NOT NULL,
      train_expected_retirement INT NOT NULL
    );

    DROP TABLE IF EXISTS website_updates;

    CREATE TABLE website_updates (
      update_name TEXT,
      update_description TEXT,
      update_date TIMESTAMP
    );

    DROP TABLE IF EXISTS vehicle_operation_updates;

    CREATE TABLE vehicle_operation_updates (
      vehicle_model TEXT,
      bus_plate TEXT,
      vehicle_update_description TEXT
    );

    DROP TABLE IF EXISTS vehicle_advertisement_updates;

    CREATE TABLE vehicle_advertisement_updates (
      bus_plate TEXT,
      vehicle_advertisement_name TEXT,
      posted_by_user_id INT NOT NULL
    );

    DROP TABLE IF EXISTS train_advertisement_updates;

    CREATE TABLE train_advertisement_updates (
      train_set_number INT NOT NULL,
      train_model TEXT,
      train_advertisement TEXT,
      posted_by_user_id INT NOT NULL
    );

    DROP TABLE IF EXISTS train_operation_updates;

    CREATE TABLE train_operation_updates (
      train_model TEXT,
      train_set_number INT NOT NULL,
      train_ops_status TEXT
    );

    DROP TABLE IF EXISTS points_management;
    CREATE TABLE points_management (
      user_code INT NOT NULL,
      points_acquired INT NOT NULL
    );

    DROP TABLE IF EXISTS points_allocation;
    CREATE TABLE points_allocation (
      task_id INT PRIMARY KEY AUTO_INCREMENT,
      task_name TEXT,
      description TEXT,
      points_awarded TEXT
    );

    DROP TABLE IF EXISTS ranks;
    CREATE TABLE ranks (
      ranks_available TEXT,
      points_requirement INT NOT NULL
    );
    
    INSERT INTO ranks (ranks_available, points_requirement) VALUES
    ("The First Update", "The very first update of this website. We'll be looking forward for more to come very soon!");
    
      `

    pool.query(SQLSTATEMENT, callback);
  }
});
