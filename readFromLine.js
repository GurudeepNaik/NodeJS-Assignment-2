const readLine=require('readline');
const rl=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("Please enter your name:",(answer)=>{
    console.log(`Hello ${answer}`);
    rl.close();
})