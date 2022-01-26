const chalk = require("chalk"); //npm chalk, local de package-lock, para pintar las letras
const yargs = require("yargs");
const notes = require("./notes.js"); // require de file notes, para traer info que está dentro de esa file.

//Customize yargs version
yargs.version("1.1.0");

//Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    //builder lo usaremos para darle estructura a la app, le daremos valor y validacion
    title: {
      describe: "Note title",
      demandOption: "true", //validar que debe ir lo que pides en este objeto
      type: "string", //el tipo de objeto.
    },
    body: {
      describe: "Put your text",
      demandOption: "true",
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create a remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Remove a note",
      demandOption: "true",
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

// Create a list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function () {
    console.log("Create to list to do");
  },
});

//Create a read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note");
  },
});

yargs.parse();
//console.log(yargs.argv); Lo pasarás a yards.parse()
