


module.exports=(req,resp,next)=>{
    if(!req.query.age){
        resp.send("Provide age ");
    }
    else if(req.query.age<18){
        resp.send(
            "age is not valid You cannot access page "
        )


    }
    else{
        next();
    }
}