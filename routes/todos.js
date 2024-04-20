const express = require("express");

const router = express.Router();




// import controller that is functioning of code 

const{createTodo} = require("../controllers/createTodo")

const{getTodo , getTodoId} = require("../controllers/getTodo") // getTodo.js se getTodo import kr liya 

// mapping of controller with api route 
router.post("/createTodo" , createTodo);

// jb post request "/createTodo" path pe marege to createTodo vala controller chalega


router.get("/getTodos",getTodo);  // jb get request "/getTodo" path pe marege to getTodo vala controller chalega

router.get("/getTodos/:id" , getTodoId)


const{updateTodo} = require("../controllers/updateTodo")


router.put("/updateTodos/:id", updateTodo)

const{signUpHandler,loginHandler} = require("../controllers/loginAndSignup")


  router.post("/signup", signUpHandler)

  router.post("/login",loginHandler)

module.exports = router ;