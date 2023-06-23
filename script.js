
class Produto {

    constructor(){
      this.id = 1;
      this.arrayProdutos = [];
    }
    

    save(){
      let produto = this.lerDados();
      if(this.validaCampos(produto)){
      this.adicionar(produto)
      }
      this.listaTabela()
    }
    

    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        
        for(let i =0; i< this.arrayProdutos.length; i++){
            let tr = tbody.insertRow();
        
            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].valor;
           
            //alinhando ao centro 
            td_id.classList.add('center');
            
            //adicionando botões
            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/pencil-square.svg';
            
            
            let imgDelet = document.createElement('img');
            imgDelet.src = 'img/trash.svg';
            
            
            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelet);

        }
    }
    adicionar(produto){
        this.arrayProdutos.push(produto);
        this.id++;
    }

    lerDados(){
        let produto = {}
        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.valor = document.getElementById('valor').value;
        return produto;
    }

    validaCampos(produto){
        let msg = '';

        if(produto.nomeProduto == ''){
            msg += '- informe o nome do Produto \n';
        }

        if(produto.valor ==''){
            msg += '- informe o valor do Produto \n';
        }
        if(msg!= ''){
            alert(msg);
            return false;
        }
        return true;
    }
    cancel(){
        document.getElementById('produto').value = '';
        document.getElementById('valor').value = '';''
    }
         
}
let produto = new Produto();
