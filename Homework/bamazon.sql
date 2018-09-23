DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

-- Creates the table "people" within animals_db --
CREATE TABLE product (
  item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price double(10,2),	
  stock_quantity INTEGER(10),
   PRIMARY KEY (item_id)
);

SELECT * FROM bamazon.product;

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUE ("iPhone XE", "Digital", 799.99, 1000); 
INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUE ("iWatch 4", "Digital", 399.99, 500); 
INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUE ("bKindle", "Digital", 119.99, 500); 
INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUE ("Organic milk powder", "Food", 45.99, 10000); 
INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUE ("Organic energy bar", "Food", 12.99, 10000); 
INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUE ("Organic dish detergent", "Grocery", 4.99, 12345); 
INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUE ("Tesla Model 3", "Car", 40000, 2); 
INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUE ("TomTom toothpaste", "Grocery", 3, 800); 
INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUE ("bNike sports shorts", "Cloths", 29.00, 500); 
INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUE ("Gucci lady's night dress", "Cloths", 299.99, 10); 