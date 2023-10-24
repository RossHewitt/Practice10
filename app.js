const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
//customization
yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    handler: function(){
        console.log('Adding a new note');
    }
});
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function(){
        console.log('Removing a note');
    }
});
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler: function(){
        console.log('Listing all notes')
    }
});
yargs.command({
    command: 'read',
    describe: 'Reading your note',
    handler: function(){
        console.log('Listing all notes')
    }
});
yargs.command({
    command:'add',
    describe:'Adding note',
    builder: {
        title: {
           describe:'Note title',
           demandOption:true,
           type:'string'
        },
        body: {
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },    
    handler: function(argv) {
        console.log(`Title: ${argv.title}`);
        console.log(`Body: ${argv.body}`);
        notes.addNote(argv.title, argv.body);
    } 
});
console.log(yargs.argv);