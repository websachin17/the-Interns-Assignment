// this controller is written to get all todo objects from database

const Todo = require("../models/todo");

 exports.getTodo = async(req,res)=>{
      
  try{   

    const todos = await Todo.find({}); // find function Todo ke andar jo bhi hai uski value todos  me daal dega

    res.status(200).json({
        success : true,
        data : todos,
        message : " Entire Todo data is fetched"
    });

  }
   catch(error){

    console.log(error);

    res.status(500).json({
       success : false,
       error: error.message,
       message: "server error",
    })

   }
 }


 // this controller with give the todo with id mentioned in request 

 exports.getTodoId =  async(req,res)=>{

    try{
       
      const id = req.params.id // apan req me ek id pass karege we'll get that id here by req.params

      const data = await Todo.findById({_id : id}) // database mai similar id ka data mil gaya to usko store krwa lege
 
      //data for given id not found
      if(!data){
         return res.status(404).json({
            success : false,
            message : "NO data found"
         })
      }
 
      // data for given id found
      res.status(200).json({
          success : true,
          data : data,
          message : `id : ${id} data successfully fetched`
      })
       
    }

    catch(err){

        res.status(500).json({
           success : false,
           message : err.message,
        })

    }

 }