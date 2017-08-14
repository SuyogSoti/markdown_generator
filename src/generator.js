// For the import statement
const _eval = require('eval')

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
                if (i != 0) {
                    content[i] = content[i].substring(1, content[i].length - 1)
                }
                js += "console.log(`" + content[i] + "`)\n"
            } else {
                js += content[i]
            }
        }
        resolve(js)
        // console.log(js)
    } else {
        reject("Error: Not a string!!")
    }
})

/**
 * generateMarkdown
 * @param {string} javascript the javascript that will generate the markdown to be compiled
 * @return {string} the markdown to be compiled
 */
exports.generateMarkdown = (javascript) => new Promise((resolve, reject) => {
    // console.log(javascript)
    let preprocess = "let Ans = '';console = {}; console.log = (anything) => Ans += anything.toString() + '\\n';"
    let post_process =  "exports.Ans = Ans"
    try {
        let res = _eval(preprocess + javascript + post_process)
        resolve(res.Ans)
    } catch (e) {
        reject(e)
    }
})
