const { spawn } = require('child_process');

console.log('starting new process', process.version);

let spP = spawn('node', ['./subprocess/sub-app.js', process.pid], {
    detached: true,
    stdio: 'ignore'
});

setInterval(() => {
    console.log('MainApp: interval');
    // process.exit(1);
}, 5000);