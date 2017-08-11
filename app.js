let fs = require('fs')
let showdown = require('showdown')

let converter = new showdown.Converter()
converter.setFlavor('github')
let content = fs.readFileSync('./test/markdown.md').toString()

console.log(content)

// let html = converter.makeHtml(content.toString())

// fs.writeFileSync('./test/markdown.html', html)
// console.log(html)
