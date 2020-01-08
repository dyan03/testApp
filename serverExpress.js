var express= require("express")

var app=express()
var router=require("./router/main")(app)
var port= process.env.port||8080

app.set('views',__dirname+"/views")
app.set('view engine', 'ejs')

app.engine('html', require('ejs').renderFile);

app.listen(port)

console.log("Listening on port", port)