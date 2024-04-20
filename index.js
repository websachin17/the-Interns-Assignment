const express = require("express");

const app = express();



require("dotenv").config()  // to run the server on any port load port from env file


const PORT = process.env.PORT || 4000 // ya to port number process se mil jayega nahi mila to use 4000 as port number 


app.use(express.json())   // express.json() is a middleware to parse json data from request body 


const todoRoutes = require("./routes/todos")

app.use("/api/v1",todoRoutes);


//start server 

app.listen(PORT,()=>{
   console.log(`server started at ${PORT}`);
})

// connect to database

const dbconnect = require("./config/database");

dbconnect();

// making of default route 

app.get("/",(req,res)=>{
  res.send(`<h1>This is homepage Sachin baby</h1>`)
})



 
