const ManipulateFiles = require("./src/scripts/ManipulateFiles");
const Encoder = require("./src/scripts/Encoder");
const Decoder = require("./src/scripts/Decoder");

function main(){
    const files = new ManipulateFiles;
   

    let text = files.getText("text.txt");
    console.log(text);

    let result = Encoder(text);//ENCRIPTA TEXTO E RETORNA ARVORE DE DECODIFICAÇÃO
    console.log(result[0]);

    let decoded = Decoder(result[1],result[0]);  //RECEBE ARVORE DE DECODIFICAÇÃO E DECODIFICA O TEXTO
    console.log(decoded);
}

main();