var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
  });


  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
  });



  function start(){
    connection.query("SELECT * FROM product", function(err, results) {
        if (err) throw err;

        var choiceArray = [];
        var chosenItem;
        inquirer
        .prompt([

            {
                name: "choice",
                type: "input",

                message: function(){
                    for (var i=0; i<results.length; i++){
                        console.log(
                        "Product ID: " + results[i].item_id + "||" +
                        "Product name: " + results[i].product_name + "||" +
                        "Department: " + results[i].department_name + "||" +
                        "Price: " + results[i].price + "||" +
                        "stock: " + results[i].stock_quantity);
                  };
                  console.log("\n Which product would like to buy? Please input the ID: ");
            }

            },



          {
            name: "quantity",
            type: "input",
            message: "How many units would you like to buy?"
          }
        ])
        .then(function(answer) {
         console.log(answer.choice);
          for (var i = 0; i < results.length; i++) {
            if (results[i].item_id == answer.choice) {
              chosenItem = results[i];
            }
          }

      
          if (chosenItem.stock_quantity > parseInt(answer.quantity)) {

            console.log("We have enough stock!");
            console.log("You purchase " + chosenItem.product_name + ": " + answer.quantity + " units x " + chosenItem.price + " USD/unit \n");
            console.log("Total cost of your purchase is: "+ parseInt(chosenItem.stock_quantity) * parseInt(answer.quantity)  + " USD \n");
            
            connection.query(
              "UPDATE product SET ? WHERE ?",
              [
                {
                  stock_quantity: chosenItem.stock_quantity - parseInt(answer.quantity)
                },
                {
                  item_id: chosenItem.item_id
                }
              ],
              function(error) {
                if (error) throw err;
                console.log("Order placed successfully! \n");
                //connection.end();
                start();
              }
            );
            

          }
          else {
            // Not enough quantity
            console.log("Sorry, not enough in stock!");
            //connection.end();
            start();
          }

        

        });


        //connection.end();
    
    });


  }