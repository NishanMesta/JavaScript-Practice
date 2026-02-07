const fs = require("fs")

const contents  = fs.readFileSync("a.txt","utf-8")
console.log(contents)

//can only read txt file not .md files