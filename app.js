// --- app require ---
var express = require("express"),
    app = express();

// --- app config ---    
app.set("view engine", "ejs");

// -- app routes ---

app.get("/",function(req,res){
    res.render("landing");
});
app.get("/about", function(req,res){
   res.render("about"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is running");
});


