//SESION 3
//const firstName = require("./utils.js"); //retorna el valor del otro archivo

//console.log(firstName); //llamas a la variable que está llamando al archivo.

// const add = require("./utils.js"); para exportar la funcion que esta en otro archivo
// const sum = add(4, -2); //para llamar la funcion, creas una nueva variable que albergue esa funcion y la llamas desde el console

// console.log(sum);

// Challenge: Define and use a function in a new file
//
// 1. ok!Create a new file called notes.js
// 2. ok!Create getNotes function that returns "Your notes.."
// 3. ok!Export getNotes function
// 4. From app.js, load in and call the function printing message to console
//const validator = require("validator");
// const getNotes = require("./notes.js");

// const message = getNotes();
// console.log(message);

// console.log(validator.isEmail("beatriz@example.com"));
// console.log(validator.isURL("https://med.io"));

//video 13
//Chalk
//Challenge: Use the Chalk library n your project
//
// 1.ok! Install version 2.4.1 of chalk
// 2.ok! Load chalk into app.js
// 3.ok! Use it to print the spring "Success!" to the console in green
// 4.ok! Test your work
//
// Bonus: Use docs to mess around with other styles. Make text bold and inversed
// const chalk = require("chalk");
// const getNotes = require("./notes.js");

// const message = getNotes();
// console.log(message);

// console.log(chalk.red("Error"));
// console.log(chalk.magentaBright("Amelia!"));
// console.log(chalk.blue.bold("Bold!"));
// console.log(chalk.red.inverse("Inversed!"));
// console.log(chalk.black.bgCyanBright("Beatriz!"));
// console.log(chalk.green.bold(34));
// console.log(chalk.magentaBright("Amelia"));

// // versión refactorizado, creas una constante para no estar escribiendo tanto dentro del console.log
// const greenMsg = chalk.green.inverse.bold("Probando");
// console.log(greenMsg);

//SESION 4
//video 14 ARGV
//const command = process.argv[2]; //al entregarle el indice, solicitas que traiga la info de esa ubicación
//console.log(process.argv); //process es el node desde el lado de la compu.
// if (command === "add") {
//   console.log("Adding note!");
// } else if (command === "remove") {
//   console.log("Removing note!");
// }

//video 15 YARGS
//Customize yargs version
// yargs.version("1.1.0");

// //Create add command
// yargs.command({
//   command: "add",
//   describe: "Add a new note",
//   handler: function () {
//     console.log("Adding a new note!");
//   },
// });

// // Create a remove command
// yargs.command({
//   command: "remove",
//   describe: "Remove a note",
//   handler: function () {
//     console.log("Removing a note!");
//   },
// });

// // Challenge: Add two new command
// // TODO
// // 1. Setup command to support "list" command (print placeholder message for now)
// // 2. Setup command to support "read" command (print placeholder message for now)
// // 3. Test your work by running both commands and ensure correct output

// // Create a list command
// yargs.command({
//   command: "list",
//   describe: "List your notes",
//   handler: function () {
//     console.log("Create to list to do");
//   },
// });

// //Create a read command
// yargs.command({
//   command: "read",
//   describe: "Read a note",
//   handler: function () {
//     console.log("Reading a note");
//   },
// });

// console.log(yargs.argv);

//Video 17
// Challenge: Add an option to yards
// TODO
// 1. Setup a body option for the add command
// 2. Configure a description, make it required, and for it to be a string
// 3. Log the body value in the handler function
// 4. Test your work!

// //Create add command
// yargs.command({
//     command: "add",
//     describe: "Add a new note",
//     builder: {
//       //builder lo usaremos para darle estructura a la app, le daremos valor y validacion
//       title: {
//         describe: "Note title",
//         demandOption: "true", //validar que debe ir lo que pides en este objeto
//         type: "string", //el tipo de objeto.
//       },
//       content: {
//         describe: "Put your text",
//         demandOption: "true",
//         type: "string",
//       },
//     },
//     handler: function (argv) {
//       //pasando el atributo que quieres
//       console.log("Title: " + argv.title); //le dices al objeto argv que quieres la info del title.
//       console.log("Content " + argv.content);
//     },
//   });

//   // Create a remove command
//   yargs.command({
//     command: "remove",
//     describe: "Remove a note",
//     handler: function () {
//       console.log("Removing a note!");
//     },
//   });

//   // Create a list command
//   yargs.command({
//     command: "list",
//     describe: "List your notes",
//     handler: function () {
//       console.log("Create to list to do");
//     },
//   });

//   //Create a read command
//   yargs.command({
//     command: "read",
//     describe: "Read a note",
//     handler: function () {
//       console.log("Reading a note");
//     },
//   });

//   yargs.parse();
//   //console.log(yargs.argv); Lo pasarás a yargs.parse()

//video 18 material en playground file.

//video 19, adding a note
// const fs = require("fs");

// const getNotes = function () {
//   return "your notes..";
// };

// const addNote = function (title, body) {
//   const notes = loadNotes();
//   const duplicateNotes = notes.filter((note) => note.title === title); //notes.filter(function (note){ return note.title === title})

//   if (duplicateNotes.length === 0) {
//     notes.push({
//       title: title,
//       body: body,
//     });
//     saveNotes(notes);
//     console.log("New note added!");
//   } else {
//     console.log("Note title taken!");
//   }
// };

// const saveNotes = function (notes) {
//   const dataJSON = JSON.stringify(notes);
//   fs.writeFileSync("notes.json", dataJSON);
// };

// const loadNotes = function () {
//   try {
//     const dataBuffer = fs.readFileSync("notes.json");
//     const dataJSON = dataBuffer.toString();
//     return JSON.parse(dataJSON);
//   } catch (e) {
//     return [];
//   }
// };

// //module.exports = getNotes; //son exportaciones
// module.exports = {
//   getNotes: getNotes,
//   addNote: addNote,
// };

// video 20, removing a note, desafio 1
//const chalk = require("chalk"); //npm chalk, local de package-lock, para pintar las letras
// const yargs = require("yargs");
// const notes = require("./notes.js"); // require de file notes, para traer info que está dentro de esa file.

// // Challenge: Setup command option and function
// //
// // ok! 1. Setup the remove command to take a required "--title" option
// // ok! 2. Create and export a removeNote function from notes.js, *falta completar la funcion creada.
// // 3. Call removeNote in remove command handler
// // 4. Have removeNote log the title of the note to be removed
// // 5. Test your work using: node app.js remove --title="some title"

// //Customize yargs version
// yargs.version("1.1.0");

// //Create add command
// yargs.command({
//   command: "add",
//   describe: "Add a new note",
//   builder: {
//     //builder lo usaremos para darle estructura a la app, le daremos valor y validacion
//     title: {
//       describe: "Note title",
//       demandOption: "true", //validar que debe ir lo que pides en este objeto
//       type: "string", //el tipo de objeto.
//     },
//     body: {
//       describe: "Put your text",
//       demandOption: "true",
//       type: "string",
//     },
//   },
//   handler: function (argv) {
//     notes.addNote(argv.title, argv.body);
//   },
// });

// // Create a remove command
// yargs.command({
//   command: "remove",
//   describe: "Remove a note",
//   builder: {
//     title: {
//       describe: "Remove a note",
//       demandOption: "true",
//       type: "string",
//     },
//   },
//   handler: function (argv) {
//     notes.removeNote(argv.title);
//   },
// });

// // Create a list command
// yargs.command({
//   command: "list",
//   describe: "List your notes",
//   handler: function () {
//     console.log("Create to list to do");
//   },
// });

// //Create a read command
// yargs.command({
//   command: "read",
//   describe: "Read a note",
//   handler: function () {
//     console.log("Reading a note");
//   },
// });

// yargs.parse();
// //console.log(yargs.argv); Lo pasarás a yards.parse()

//Video 20, desafio 2
