
const fs = require('fs');
const moment = require("moment")

try {
    fs.accessSync("dist")
    fs.rmdirSync("dist")
} catch (e) { }

fs.mkdirSync("dist")


const content = 'Hello Builder ' + moment().format();

try {
    const data = fs.writeFileSync('dist/index.html', content)

} catch (err) {
    console.error(err)
}
