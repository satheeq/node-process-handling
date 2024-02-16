const { spawn, exec } = require('child_process');

console.log('starting main app');
console.log(process.version);

const subProcess = spawn('node', ['./subprocess/sub-app.js', 'testArgsInpus']);

console.error('completed spawn');

subProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});


subProcess.on('exit', (code) => {
    console.log('subProcess exit. Code: ', code);

});

subProcess.on('close', (code) => {
    console.log('subProcess close. Code: ', code);

});

setInterval(() => {
    console.log('MainApp: interval');

    // process.exit(1);
  }, 3000);

// process.stdin.resume();


