const fs = require('fs')
const generator = require('./src/generator')
// let jConnect = require('./src/json')
const showdown = require('showdown')

// Defailt showdown configuration that is necessary
const converter = new showdown.Converter()
converter.setFlavor('github')
converter.setOption('backslashEscapesHTMLTags', false)
console.log(converter.getOptions())

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
    .then(markdown => {
        let html = converter.makeHtml(markdown.toString())
        let preLoad = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Output for the template</title>
    <link rel="stylesheet" href="test/markdown.css" type="text/css" media="screen" charset="utf-8">
    <link rel="stylesheet" href="output.css" type="text/css" media="screen" charset="utf-8">
</head>
<body>
    <div class="content">
        `
        let postLoad = `
    </div>
</body>
</html>
        `
        html = preLoad + html.toString() + postLoad
        fs.writeFile("output.html", html.toString(), (error) => {
            if (error) {
                console.log(error)
            }else{
                console.log("Done!")
            }
        })
    })

process.on('unhandledRejection', (reason) => {
    console.log(reason);
});
