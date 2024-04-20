// import schema from model

const Todo = require("../models/todo")


exports.createTodo = async(req,res)=>{
   try{
    // extract title and description from request body
      const{title,description} = req.body;

      // create a new Todo obj and insert in db   using create method

      const response = await Todo.create({title,description});

      res.status(200).json(
        {
          success:true,
          data: response,
          message : " entry created successfully"
        }
      )

   }

   catch(err){

      console.log(err);
      console.error(err);

      res.status(500).json({
         success:false,
         data: " internal server error",
         message : err.message,
      })

   }
}