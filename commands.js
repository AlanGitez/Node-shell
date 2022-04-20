// function options(cmd){
//     if(cmd == "pwd"){
//         process.stdout.write(process.argv[1]);
//     }else if(cmd == "date"){
//         process.stdout.write(new Date().toString());
//     }else {
//         process.stdout.write("comando no reconocido.");
//     }
//     process.stdout.write("\nprompt \\> ");
    
// }
// function fn2(){

// }
function pruebas(){
    // process.stdout.write("Hola!  \n");
    
    // // setTimeout(() => process.stdout.write("Como estas?  \n"), 0);
    // process.stdout.write(["h","o","l","a"].reduce((ac, e) => ac+=e));
    
    // process.stdout.write("Chau! me voy.  \n");
    
}
function echo(str){
    process.stdout.write(str);
}
function pwd(){
    process.stdout.write(process.argv[1].toString());
}
function date(){
    process.stdout.write(new Date().toString());
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
module.exports = {pwd, date, ls, pruebas, echo};