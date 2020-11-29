class No{
    constructor(data){
        this.data = data;
        this.esquerda = null;
        this.direita = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }

    Insercao(data){
        let novoNo = new No(data);
        
        if (this.root === null){
            this.root = novoNo;
        } else {
            this.InserirNo(this.root, novoNo);
        }
    }

    InserirNo(no, novoNo){
        if (novoNo.data < no.data){
            if (no.esquerda === null){
                no.esquerda = novoNo;
            } else {
                this.InserirNo(no.esquerda, novoNo);
            }
        } else {
            if (no.direita === null){
                no.direita = novoNo;
            } else {
                this.InserirNo(no.direita, novoNo);
            }
        }
    }

    Remover(data){
        this.root = this.RemoverNo(this.root, data);
    }

    RemoverNo(no, key){
        if (no === null){
            return null;
        } else if (key > no.data){
            no.direita = this.RemoverNo(no.direita, key);
            return no;
        } else {
            if (no.esquerda === null && no.direita === null){
                no = null;
                return no;
            } 
            if(no.esquerda === null){
                no = no.direita;
                return no;
            } else if (no.direita === null){
                no = no.esquerda;
                return no;
            }
            let aux = this.EncontrarMenorNo(no.direita);
            no.data = aux.data;
            no.direita = this.RemoverNo(no.direita, aux.data);
            return no;
        }
    }

    EmOrdem(no){
        if (no !== null){
            this.EmOrdem(no.esquerda);
            console.log(no.data);
            this.EmOrdem(no.direita);
        }
    }

    PreOrdem(no){
        if (no !== null){
            console.log(no.data);
            this.PreOrdem(no.esquerda);
            this.PreOrdem(no.direita);
        }
    }

    PosOrdem(no){
        if (no !== null){
            this.PosOrdem(no.esquerda);
            this.PosOrdem(no.direita);
            console.log(no.data);
        }
    }

    EncontrarMenorNo(no){
        if (no.esquerda===null){
            return no;
        } else {
            return this.EncontrarMenorNo(no.esquerda);
        }
    }

    EncontrarNoRaiz(){
        return this.root;
    }

    Pesquisar(no, data){
        if (no === null){
            return null;
        }
        else if (data < no.data){
            return this.Pesquisar(no.esquerda, data);
        } else if (data > no.data){
            return this.Pesquisar(no.direita, data);
        } else {
            return no;
        }
    }

}

module.exports = BinaryTree;