let carrinho = [];

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nome = produto.split(' - ')[0].trim();
    let textoValor = produto.split(' - ')[1].trim();
    let valor = parseFloat(textoValor.replace('R$', ''));
    console.log(nome);
    console.log(textoValor);
    console.log(valor);

    let textoQuantidade = document.getElementById('quantidade').value
    let quantidade = textoQuantidade ? parseInt(textoQuantidade) : 1;
    console.log(textoQuantidade);
    console.log(quantidade);

    if (carrinho.every((elem) => elem.nome !== nome)) {
        carrinho.push({ nome: nome, valor: valor, quantidade: quantidade, valorTotal: valor * quantidade })
        console.log(carrinho);
    } else {
        carrinho.map((elem) => {
            if (elem.nome == nome) {
                elem.quantidade = elem.quantidade + quantidade;
                elem.valorTotal = elem.quantidade * elem.valor;
            }
        })
    }

    atualizaListagemCarrinho();
}

function limpar() {
    carrinho = [];

    atualizaListagemCarrinho();
}

function atualizaListagemCarrinho() {
    let listaProdutos = document.getElementById('lista-produtos');
    let elemValorTotal = document.getElementById('valor-total');

    let texto = "";
    let valorTotal = 0;
    carrinho.map((elem) => {
        valorTotal += elem.valorTotal;
        texto +=
            '<section class="carrinho__produtos__produto">' +
            '<span class="texto-azul">' + elem.quantidade + 'x </span>' +
            elem.nome +
            '<span class="texto-azul"> R$' + elem.valorTotal + '</span>' +
            '</section>';

    })

    listaProdutos.innerHTML = texto;
    elemValorTotal.innerText = 'R$' + valorTotal;
}