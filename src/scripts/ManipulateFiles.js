class ManipulateFiles{
    constructor(){
        this.fs = require('fs');
    }

    getText(name){
        return this.fs.readFileSync(`./src/database/${name}`, "utf-8");
    } 

    setText(name, data){
        this.fs.writeFileSync(`./src/database/${name}`, data);
    } 
}

module.exports = ManipulateFiles;