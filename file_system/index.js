import fs from "fs";
import {promises as fsp} from "fs"

const path = "test.txt";
const encoding = "utf-8";

function printMessage(message) {
    console.log(message);
}

async function asyncAwaitingMethod() {
    try {
        await fsp.writeFile(path, "bla bla bla")
        await fsp.appendFile(path, "test append content")
        const data = await fsp.readFile(path, encoding)
        printMessage(data)
    } catch (e) {
        printMessage(e)
    }
}

asyncAwaitingMethod()

function promisesMethod() {
    fsp.writeFile(path, "bla bla bla").then(() => fsp
        .appendFile(path, "test append content"))
        .then(() => fsp.readFile(path, encoding)
            .then(data => printMessage(data)))
        .catch(e => printMessage(e))
        .catch(e => printMessage(e))
}


function callbackMethod() {
    fs.writeFile(path, "bla bla bla", function (err) {
        if (err) {
            printMessage(err);
        } else {
            fs.appendFile(path, "test append content", function (err) {
                if (err) {
                    printMessage(err);
                } else {
                    fs.readFile(path, encoding, function (err, data) {
                        if (err) {
                            printMessage(err);
                        } else {
                            printMessage(data);
                        }
                    })

                }
            })

        }
    })
}


function blockingMethod() {
    try {
        printMessage("1")
        fs.writeFileSync(path, "bla bla bla");
        printMessage("2")
        fs.appendFileSync(path, "test append content")
        printMessage("3")
        const data = fs.readFileSync(path, encoding)
        printMessage(data)
        printMessage("4")
    } catch (e) {
        printMessage(e)
    }
}


