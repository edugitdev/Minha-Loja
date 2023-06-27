class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
        this.editId = null;
    }

    save() {
        let produto = this.lerDados();

        if (this.validaCampos(produto)) {
            if (this.editId == null) {
                this.adicionar(produto);
            } else {
                this.toUpdate(this.editId, produto);
            }
        }

        this.listaTabela();
        this.cancel();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody')
        tbody.innerText = '';

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();
            //edição de botão
            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].valor;

            //alinhando ao centro 
            td_id.classList.add('center');

            //botões e ações (excluir/editar)
            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/pencil-square.svg';
            imgEdit.setAttribute("onclick", "produto.preparaEdit(" + JSON.stringify(this.arrayProdutos[i]) + ")");


            let imgDelet = document.createElement('img');
            imgDelet.src = 'img/trash.svg';
            imgDelet.setAttribute("onclick", "produto.deletar(" + this.arrayProdutos[i].id + ")");

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelet);

        }
    }
    adicionar(produto) {
        produto.valor =parseFloat(produto.valor)
        this.arrayProdutos.push(produto);
        this.id++;
    }

    toUpdate(id, produto) {
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if (this.arrayProdutos[i].id == id) {
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
                this.arrayProdutos[i].valor = produto.valor;
            }
        }
    }
    preparaEdit(dados) {
        this.editId = dados.id;

        document.getElementById('produto').value = dados.nomeProduto;
        document.getElementById('valor').value = dados.valor;

        document.getElementById('btn1').innerText = 'Atualizar';

    }

    lerDados() {
        let produto = {}
        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.valor = document.getElementById('valor').value;
        return produto;
    }

    validaCampos(produto) {
        let msg = '';

        if (produto.nomeProduto == '') {
            msg += '- informe o nome do Produto \n';
        }

        if (produto.valor == '') {
            msg += '- informe o valor do Produto \n';
        }
        if (msg != '') {
            alert(msg);
            return false;
        }
        return true;
    }
    cancel() {
        document.getElementById('produto').value = '';
        document.getElementById('valor').value = '';

        document.getElementById('btn1').innerText = 'Salvar';
        this.editId = null;

    }
    //Método Deletar 
    deletar(id) {
        if (confirm('Deseja Realmente deletar o produto?')) {
            let tbody = document.getElementById('tbody');

            for (let i = 0; i < this.arrayProdutos.length; i++) {
                if (this.arrayProdutos[i].id == id) {
                    this.arrayProdutos.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
        }
    }
}
let produto = new Produto();
