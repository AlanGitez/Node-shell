function start(){
    process.stdout.write("prompt > ");
    process.stdin.on("data", function(data){
        let cmd = data.toString().trim().split(" ");
        
        commands[cmd[0]](cmd,done);
        process.stdout.write("\nprompt > ");
    });
    
}
function done(output){
    process.stdout.write(output.toString());
    process.stdout.write("\nprompt > "); 
}
start();
let commands = require("./commands.js")
