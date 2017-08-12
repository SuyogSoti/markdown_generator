// For the import statement




/**
 * generateJS
 * @param {string} content the content of the md file that the client writes
 * @return {string} string of the JS that will generate the Markdown file
 */
exports.generateJS = (content) => new Promise((resolve, reject) => {
    if (typeof(content) == "string") {
        let js = ""
        content = String(content)
        content = content.split(/<script>|<\/script>/)
        for (let i in content) {
            if (i%2 == 0) {
                let temp = content[i].split("\n")
                for (let j in temp) {
                    js += "console.log(" + temp[j] + ")\n"
                }
            } else {
                js += content[i]
            }
        }
        resolve(js)
    } else {
        reject("Error: Not a string!!")
    }
})
