console.log("Hello notes");

const fs=require('fs');

var fetchNotes=() =>{
    try{
        var notesString=fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);         //for parsing string to array

    }catch(e){
        return[];
    }
};

var saveNotes=(notes) =>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote=function(title,body){
    var notes=fetchNotes();                  // to run node app.js --title:secret2 --body='secret superstar'
    var note={
        title:title,
        body:body
    };
                         //to reduce errors

    // var notesString=fs.readFileSync('notes-data.json');
    // notes=JSON.parse(notesString);         //for parsing string to array


    var duplicateNotes=notes.filter((note) => note.title===title);             // filter is array function

 if(duplicateNotes.length==0){
     notes.push(note); // to add the items in array
    saveNotes(notes);
     return note;
     console.log('Adding note', title, body);
 }

};

var getAll=function(){
    console.log("Getting all notes");
    return fetchNotes();
};
var getNote=function(title) {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];


};



var removeNote=function(title){
    // fetch notes, filter notes, removing the one with the title argument, save new notes array
      var notes=fetchNotes();
    var filteredNotes=notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;

    console.log("Removed all notes",title);
};

var logNote=(note) => {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};
module.exports={
    addNote:addNote,                // in ES6   addNote
    getAll:getAll,
    getNote:getNote,
    removeNote:removeNote,
    logNote
}