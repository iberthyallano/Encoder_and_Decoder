const ManipulateFiles = require("./ManipulateFiles");

function Decoder(tree, text){ 
    let result = '';  
    let aux_tree = tree;  

    for(let i in text){  

        if(text[i] == '0'){  
            aux_tree = aux_tree[0];  
        }else{  
            aux_tree = aux_tree[1];  
        }

        if(typeof(aux_tree) == typeof('')){  
            result += aux_tree;  
            aux_tree = tree;
        }  
    }  

    const files = new ManipulateFiles;
    files.setText("text.txt", result);

}

module.exports = Decoder;