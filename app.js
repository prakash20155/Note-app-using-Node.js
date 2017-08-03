console.log("Hello app.js");

const fs=require('fs');

const _ = require('lodash');
const yargs=require('yargs');

const notes=require('./notes.js');

//const argv=yargs.argv;
const titleOptions={
    describe:'Title of note' ,
    demand:true,
    alias:'t'
};
const bodyOptions={
    describe:'Body of note' ,
    demand:true,
    alias:'b'
};
const argv= yargs
    .command('add', 'Add a new note',{
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read all notes',{
        title: titleOptions

    })
    .command('remove', 'Remove all notes',{
        title: titleOptions

    })

    .help()             // node app.js  add --help
    .argv;

var command= argv._[0];
var command= process.argv[2];
console.log('Command:', command);
console.log('Process', process.argv);
console.log('Yargs', argv);

if(command==='add'){

    console.log("Adding new notes");                 //for output  node app.js  add

 var note= notes.addNote(argv.title,argv.body);                  //node app.js add --title=secret --body="This is my secret"
 if(note){
     console.log('note created');
     notes.logNote(note);
 }else{
     console.log('Note title taken');
 }
}
    else if(command==='list'){
    var allNotes=notes.getAll();
    console.log(`printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
         console.log("listing all notes");
} else if(command==='read'){
    console.log("reading all notes");                          //node app.js read --title secret

    var note=notes.getNote(argv.title);
    if(note){
        console.log('note created');
       notes.logNote(note);
    }else{
        console.log('Note not found');
    }
} else if(command==='remove'){
    console.log("removing all notes");
    var noteRemoved=notes.removeNote(argv.title);
   var message= noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
}
else {
    console.log("command not recognized");
}

