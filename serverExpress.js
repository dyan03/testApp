var express= require("express")

app=express()

var port= process.env.port||8080

app.set('views',__dirname+"/views")
app.set('view engine', 'ejs')

app.use("/responseUse",function(req,res){
 
    console.log("use console response")
    res.json("use request completed")
})

app.get("/main",function(req, res){
    
    res.render()
})

app.listen(port)

console.log("Listening on port", port)