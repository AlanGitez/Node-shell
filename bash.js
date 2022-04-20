function start(){
    process.stdout.write("prompt > ");
    process.stdin.on("data", function(data){
        let cmd = data.toString().trim();
        if(cmd.split(" ")[0] == "echo") commands.echo(cmd.substring(5));
        if(cmd == "pwd") commands.pwd();
        if(cmd == "date") commands.date();
        if(cmd == "ls") commands.ls();
        
        if(cmd == "pruebas") commands.pruebas();

        process.stdout.write("\nprompt > ");
    });
    
}
start();

let commands = require("./commands.js")
