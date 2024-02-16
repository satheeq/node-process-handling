const exec = require('child_process').exec;

const parenPid = process.argv[2];
console.log('sub app starting, parent pid ', parenPid);
console.error('sub app starting');


setInterval(() => {
  console.log('SubApp: interval');


  exec(`kill -9 ${parenPid}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });

}, 3000);
