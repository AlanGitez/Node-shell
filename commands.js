
function pruebas(){
    
}
function argsToString(args){
    let str = args.join(" ");
    return str.substring(str.indexOf(" ")).trim();
}
function echo(cmd){
    if(cmd.length == 0) throw "No hay argumentos que imprimir";
    
    process.stdout.write(argsToString(cmd));
    process.stdout.write("\nprompt > ")
}
function cat(cmd=[]){
    cmd.splice(0, 1);
    cmd.forEach(file => {
        fs.readFile(file,"utf-8", function(err, data){
            if(err) process.stdout.write(err); 
            process.stdout.write("\nprompt > ")
            process.stdout.write(data.toString());
            
        });
        
    });
    
}
function head(cmd){

}
function tail(cmd){

}
function pwd(){
    process.stdout.write(process.argv[1].toString());
    process.stdout.write("\nprompt > ")
}
function date(){
    process.stdout.write(new Date().toString());
    process.stdout.write("\nprompt > ")
}
function ls(){
    fs.readdir("./", function(err, files){
        if(err) throw err;
        files.forEach(file => {
            process.stdout.write(file.toString())
            process.stdout.write("\nprompt > ")
        });
    });
}
const fs = require("fs");
module.exports = {pwd, date, ls, pruebas, echo, cat, head, tail};