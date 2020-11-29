/*
1) Crie um programa em javascript que leia um arquivo de texto e crie uma codificação com número variável de bits conforme a ocorrência de cada caractere. A partir disso, crie um arquivo contendo a arvore de decodificação e os dados codificados. Salve o arquivo.

2) Crie um programa em javascript que leia um arquivo de texto codificado, leia a arvore e a codificação para criar um novo arquivo com o conteúdo decodificado.

3) Grave um vídeo explicando seu código e o funcionamento! todos os membros do grupo devem participar por pelo menos 3 minutos de vídeo.
*/

const ManipulateFiles = require("./src/scripts/ManipulateFiles");
const BinaryTree  = require("./src/scripts/BinaryTree");
const Encoder = require("./src/scripts/Encoder");
const Decoder = require("./src/scripts/Decoder");

function main(){
    // const files = new ManipulateFiles;
    // const tree = new BinaryTree;

    // let text = files.getText("text.txt");
    let text = "bafe abacaa de fa";

    Encoder(text);//ENCRIPTA TEXTO E RETORNA ARVORE DE DECODIFICAÇÃO

    //console.log(Decoder("oioi")); //RECEBE ARVORE DE DECODIFICAÇÃO E DECODIFICA O TEXTO
}

main();