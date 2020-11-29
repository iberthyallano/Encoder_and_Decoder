class ManipulateFiles{
    constructor(){
        this.fscp = require('fs').promises;
        this.fsnp = require('fs');
    }

    getText(name){
        return this.fsnp.readFileSync(`./src/database/${name}`, "utf-8");
    } 

    setText(name, data){
        this.fsnp.writeFileSync(`./src/database/${name}`, data);
    } 
}

module.exports = ManipulateFiles;