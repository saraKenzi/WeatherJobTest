export const errHandle=(err,req,res,next)=>{
    let statusCode=res.statusCode || 500;
    let message= err.message || "Sorry, an error has occurred on the server";
    return res.status(statusCode).json({"type":"error","message":message})
}