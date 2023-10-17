const fs = require('fs');
const path = require('path');

function searchFiles(filePath, extension, callback) {
    if (typeof (filePath) != "string" || typeof (extension) != "string") {
        return callback(new Error("Invalid input, file path and extension must both be data type string", null))
    }
    fs.readdir(filePath, (err, list) => {
        if (err) {
            return console.log(err)
        }
        callback(null, list.filter((file) => path.extname(file) === extension))
    });
}

searchFiles('./unzipped', '.png', (err, list)=>{
    if (err){
        return console.log(err)
    }
    console.log(list)
})

