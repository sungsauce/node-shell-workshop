// var moment = require('moment')

// var date = p #{moment(Date.now()).format('MM/DD/YYYY')}
// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  var something = 'poop'
  var something1 = 'poop1'
  if (cmd === 'pwd') {
      process.stdout.write(__dirname)
      process.stdout.write('\nprompt > ')
  } else if (cmd === 'date') {
      process.stdout.write((new Date()).toString())
      process.stdout.write('\nprompt > ')
  }

});

// bash command "cat bash.js" prints out the entire script as a string
// bash command "head bash.js" prints out the first 10 lines of the script as a string


