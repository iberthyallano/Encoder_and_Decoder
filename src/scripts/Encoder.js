const BinaryTree  = require("./BinaryTree");

function Encoder(text){
    text = text.split("");

    let caracters = text.filter((este, i) => {return text.indexOf(este) === i});

    let tuples = [];

    for(let i in caracters){
        let cont = 0;
        for(let j in text){
            if(caracters[i] === text[j])cont++;
        }
        tuples.push([cont, caracters[i]]);
    }

    tuples = tuples.sort();

    console.log(tuples);
    
    // /*
    //     Lê o texto e procurar quantidades de números repetidos;(OKAY)
    //     Atribuir bits. Levar em conta que quanto maior a quantidade de bits, menor o número de repetições;
    //     Jogar os bits e letras na árvore;
    // */

    // return tree;
}

module.exports =  Encoder;