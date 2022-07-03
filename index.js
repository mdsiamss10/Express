import express from "express";
const app = express();
const port = 9000;
app.use("/",(red,res)=>{
    res.json({message:"Hello World"});
});
app.listen(9000,()=>{
    console.log("Starting server on port " + port);
});