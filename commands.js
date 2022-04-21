
function pruebas(){
    
}
// TOMA A PARTIR DEL SEGUNDO ELEMENTO DE UN ARRAY 
// Y LO CONVIERTE EN STRING, LUEGO LO DEVUELVE.
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
    // NO LOS EJECUTA EN ORDEN, ALGUNOS TARDA MAS EN LEERLOS
    // QUE OTROS, HABRA QUE CONFIGURARLO CON SETTIMEOUT
    // O ALGO ASI, QUEDA PENDIENTE.
    cmd.splice(0, 1);
    cmd.forEach(file => {
        fs.readFile(file,"utf-8", function(err, data){
            if(err) process.stdout.write(err); 
            process.stdout.write("\n"+data.toString());
            process.stdout.write("\nprompt > ");            
        });
    });
}
function head(cmd){
    // ES IMPOSIBLE HACER TODO ESTO EN UN DIA :(
}
function tail(cmd){
    // ES IMPOSIBLE HACER ESTO TAMBIEN QUERIDO.
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