const abc=require("figlet")
figlet("Ganesh",function(err,data){
    if(err){
        console.log("Something Went Wrong");
        return;
    }
    console.log(data);
})