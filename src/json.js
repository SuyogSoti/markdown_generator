let fs = require('fs')

/**
 * connect
 * @param {string} db_absolute_path the absolute path of the json file
 * @return {json} dictionary of the database
 *
 */
exports.connect = (db_absolute_path) => new Promise((resolve, reject) => {
    let db = db_absolute_path
    fs.exists(db, (bool) => {
        if (bool) {
            fs.readFile(db, (error, stuff) => {
                if (error) {
                    reject(error)
                }
                resolve(JSON.parse(stuff.toString()))
            })
        }else{
            reject("Error: File does not exist!")
        }
    })
})
