//REQUIRING INTERNAL AND EXTERNAL MODULES
const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;

//CREATING THREE NECESSARY VARIABLES FOR CIRCULATION
var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

//CONDITIONING THE COMMANDS
if(command === 'read'){
  console.log("Server is currently reading notes");
  notes.fetchNote(title);
}
else if(command === 'add'){
  console.log("Server is currently adding new notes");
  notes.addNote(title, body);
}
else if(command === 'remove'){
  console.log("Server is removing current note");
  notes.deleteNote(title);
}
else if(command === 'list'){
  console.log("Server is listing all notes");
  notes.listNotes();
}
else{
  console.log("Invalid input received!");
}
