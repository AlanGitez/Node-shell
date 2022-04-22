
function pruebas(){
    
}
// TOMA A PARTIR DEL SEGUNDO ELEMENTO DE UN ARRAY 
// Y LO CONVIERTE EN STRING, LUEGO LO DEVUELVE.
function argsToString(args){
    let str = args.join(" ");
    return str.substring(str.indexOf(" ")).trim();
}
function curl(url,done){
    request(argsToString(url), function(err, respuesta, body){
        if(err) process.stdout.write(err); 
        fs.writeFileSync("respuestaCurl.txt", respuesta);
        fs.writeFileSync("bodyCurl.txt", body);
        done(body);
    })
}
function echo(cmd, done){
    if(cmd.length == 0) throw "No hay argumentos que imprimir";
    
    done(argsToString(cmd));
}
function cat(files, done){
    // NO LOS EJECUTA EN ORDEN, ALGUNOS TARDA MAS EN LEERLOS
    // QUE OTROS, HABRA QUE CONFIGURARLO CON SETTIMEOUT
    // O ALGO ASI, QUEDA PENDIENTE.
    files.splice(0, 1);
    files.forEach(file => {
        fs.readFile(file,"utf-8", function(err, data){
            if(err) done(err);
            done("\n"+data);            
        });
    });
}
function head(files, done){
    let responseLines = 5;
    files.splice(0, 1);
    files.forEach(file => {
        fs.readFile(file,"utf-8", function(err, data){
            if(err) done(err);  
            let response = data.split("\n").splice(0, responseLines).join("\n"); 
            done("\n"+response);        
        });
    });
}
function tail(files, done){
    let responseLines = 5;
    files.splice(0, 1);
    files.forEach(file => {
        fs.readFile(file,"utf-8", function(err, data){
            if(err) done(err);
            let response = data.split("\n");
            response = response.splice((response.length-1)-responseLines, response.length-1).join("\n") 
            done("\n"+response);        
        });
    });
}
function pwd(args, done){
    done(process.argv[1]);
}
function date(date, done){
    done(new Date());
}
function ls(file, done){
    fs.readdir("./", function(err, files){
        if(err) throw err;
        files.forEach(file => {
            done(file);
        });
    });
}
const fs = require("fs");

const request = require("request");
module.exports = {pwd, date, ls, pruebas, echo, cat, head, tail, curl};
