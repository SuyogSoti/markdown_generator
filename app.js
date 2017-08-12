const fs = require('fs')
const generator = require('./src/generator')
// let jConnect = require('./src/json')
const showdown = require('showdown')

// Defailt showdown configuration that is necessary
const converter = new showdown.Converter()
converter.setFlavor('github')

// get the text fromt the file
// FIXME: Make sure that this is a commandline arguement
let content = fs.readFileSync('./test/markdown.md').toString()
// let testJson = "/home/suyog/Documents/markdown_generator/test/db/test.json"

// jConnect.connect(testJson)
//     .then(
//         (result) => {
//            console.log(result[0].name)
//         }
//     ).catch(e => console.log(e.toString()))

generator.generateJS(content)
    .then(javascript => generator.generateMarkdown(javascript))
    .then(markdown => console.log(markdown))

process.on('unhandledRejection', (reason) => {
    console.log(reason);
});

// let html = converter.makeHtml(content.toString())

// fs.writeFileSync('./test/markdown.html', html)
// console.log(html)
