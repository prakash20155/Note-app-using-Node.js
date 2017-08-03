var obj={
    name:"Prakash"
};
var stringObj= JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

var personString='{"name":"Prakash", "age":26}'; //changing string to obj
var person=JSON.parse(personString);
console.log(typeof person);
console.log(person);

 const fs=require('fs');

var originalNote={
    title:"secret",
    body:"this is secret"
};

//originalNoteString
var originalNoteString=JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString=fs.readFileSync('notes.json');

//note
var note=JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);