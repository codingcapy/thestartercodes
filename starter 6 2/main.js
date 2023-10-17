const path = require("path");
/*
 * Project: Milestone 1
 * File Name: main.js
 * Description: main file to execute unzip, filter, and grayscale operations
 *
 * Created Date: October 15, 2023
 * Author: Paul Kim
 *
 */

const IOhandler = require("./IOhandler");
const zipFilePath = path.join(__dirname, "myfile.zip");
const pathUnzipped = path.join(__dirname, "unzipped");
const pathProcessed = path.join(__dirname, "grayscaled");

IOhandler.unzip(zipFilePath, pathUnzipped)
    .then(() => IOhandler.readDir(pathUnzipped, ".png"))
    .then((files) => {
        const promises = files.map((file) => {
            const filePath = path.join(pathUnzipped, file);
            const processedPath = path.join(pathProcessed, file);
            return IOhandler.grayScale(filePath, processedPath);
        });
        return Promise.all(promises);
    })
    .catch()
