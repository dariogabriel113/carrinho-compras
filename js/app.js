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
        carrinho.push({ nome: nome, valor: valor, quantidade: quantidade })
        console.log(carrinho);
    } else {
        carrinho.map((elem) => {
            if (elem.nome == nome) {
                elem.quantidade = elem.quantidade + quantidade
            }
        })
    }
}

function limpar() {
    carrinho = [];
}