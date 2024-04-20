
// This controller takes title and description from body of request and changes title and description into database
 
const Todo = require("../models/todo")

exports.updateTodo = async(req,res)=>{
    try{

        //step 1 : id nikal ke lao req url mai se jisme updation karna hai

        // const id = req.params.id 
        //or
        const{id} = req.params;

        const title = req.body.title;

        const description = req.body.description

        // const{title,description} = req.body;

        // Todo ke andar similar id vala data ko find kiya fir database me update kar diya   ,  findByIdAndUpdate update the details of given id

        const data = await Todo.findByIdAndUpdate({_id:id},{title,description, updatedAt:Date.now()})


        res.status(200).json({
          success : true,
          data : data,
          message : "updated sucessfully"
        })

    }

    catch(err){

      res.status(500).json({
        success:false,
        error : err.message,
      })

    }
}