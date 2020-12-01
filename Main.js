const ManipulateFiles = require("./src/scripts/ManipulateFiles");
const Encoder = require("./src/scripts/Encoder");
const Decoder = require("./src/scripts/Decoder");

function main(){
    const files = new ManipulateFiles;
   
    let text = files.getText("text.txt");

    Encoder(text);//ENCRIPTA TEXTO E RETORNA ARVORE DE DECODIFICAÇÃO

    let codeText = files.getText("text.txt");
    let tree = JSON.parse(files.getText("tree.json"));

    Decoder(tree, codeText);  //RECEBE ARVORE DE DECODIFICAÇÃO E DECODIFICA O TEXTO
}

main();