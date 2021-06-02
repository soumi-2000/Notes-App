const fs = require('fs');

//common reading fuction for all parts
function getNotes(){
  try{
    return JSON.parse(fs.readFileSync('notes.txt'));
  }
  catch(err){
    return [];
  }
}

//ADDING NOTES
function addNote(title, body){
  var notes = getNotes();

  var note = {
    title,
    body
  };

//CHECKING FOR SAME TITLE
  var sameNote = notes.filter((note) => note.title === title);
  if(sameNote.length === 0){
  notes.push(note);
  fs.writeFileSync('notes.txt', JSON.stringify(notes));
  formatNote(note);
}
  else {
    console.log("!!WARNING!!");
    console.log("Same Title Being Entered");
  }
}

//REMOVING NOTES
function deleteNote(title){
  var notes = getNotes();

  var screenedNotes = notes.filter((note) => note.title !== title);
  fs.writeFileSync('notes.txt', JSON.stringify(screenedNotes));
}

//READING THE NODES
function fetchNote(title){
  var notes = getNotes();

  var screenedNotes = notes.filter((note) => note.title === title);
  formatNote(screenedNotes[0]);
}

//PRINTING ALL THE NOTES
function listNotes(){
  var notes = getNotes();

  notes.forEach((note) => formatNote(note));
}

//COMMON CUSTOMIZING FUNCTION
function formatNote(note){
  console.log("********************************");
  console.log('Title: ' + (note.title));
  console.log('Body: ' + (note.body));
}

//FUNCTIONS TO EXPORT
module.exports = {
  addNote,
  deleteNote,
  fetchNote,
  listNotes
};
