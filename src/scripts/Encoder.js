function Tree(tuples){
    while(tuples.length>1) {  
        let leastTwo = [tuples[0][1],tuples[1][1]]  
     
        let theRest = tuples.slice(2,tuples.length);  
      
        let combFreq = tuples[0][0]+tuples[1][0];  
      
        tuples = theRest;  
        let end = [combFreq,leastTwo];  
        tuples.push(end);  
        
        tuples.sort();  
       
    }  
    return tuples[0][1];   
}

function CreateCode(node, pat = '', code = {}){  
    if(typeof(node) == typeof("")){  
        code[node] = pat;  
    }else{  
        CreateCode(node[0], pat+'0', code);  
        CreateCode(node[1], pat+'1', code);  
    }  
    return code;
}

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

    let tree = Tree(tuples);
    let code = CreateCode(tree);

    let result = '';  
    for(let k in text){  
        result += code[text[k]]; 
    }

    return [result, tree];
} 

module.exports =  Encoder;