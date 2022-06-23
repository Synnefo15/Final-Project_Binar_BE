require('dotenv').config;
const {
  DB_USERNAME_P ,
DB_PASSWORD_P ,
DB_DATABASE_P ,
DB_HOST_P, 
DB_USERNAME_D ,
DB_PASSWORD_D ,
DB_DATABASE_D
} = process.env

module.exports={
  "development": {
    "username": DB_USERNAME_D,
    "password": DB_PASSWORD_D,
    "database": DB_DATABASE_D,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "umagwxrtxuaxoy",
    "password": "c0667107c8bb3292441b41b38706b60d8f98c82983accd0b849802330c45c336",
    "database": "d1dkbnnqs9e323",
    "host": "ec2-23-23-182-238.compute-1.amazonaws.com",
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  }
}
