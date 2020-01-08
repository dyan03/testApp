module.exports=function(app){

    app.use("/responseUse",function(req,res){
 
        console.log("use console response")
        res.json("use request completed")
    })
    
    app.get("/main",function(req, res){
        
        res.render()
    })
    
    var cb0 = function (req, res, next) {
        console.log('CB0');
        next();
    }
    
    var cb1 = function (req, res, next) {
        console.log('CB1');
        next();
    }
    
    app.get('/example/a', [cb0, cb1], function (req, res, next) {
        console.log('the response will be sent by the next function ...');
        next();
    }, function (req, res) {
        res.send('Hello from A!');
    });

}