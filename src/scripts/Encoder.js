const { compileFunction } = require("vm");
const BinaryTree  = require("./BinaryTree");

function Encoder(text){
    let tree = new BinaryTree;
    
    text = text.split(" ").join("").split("");

    let caracters = text.filter((este, i) => {
        return text.indexOf(este) === i;
    });

    let total = [];

    for(let i in caracters){
        let cont = 0;
        for(let j in text){
            if(caracters[i] === text[j])cont++;
        }
        total[i] = cont;
    }

    console.log(caracters);
    console.log(total);
    
    /*
        lê o texto e procurar quantidades de números repetidos;
        Atribuir bits. Levar em conta que quanto maior a quantidade de bits, menor o número de repetições;
        jogar os bits e letras na árvore;
    */

    return tree;
}

module.exports =  Encoder;