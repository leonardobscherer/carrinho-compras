let valorTotal = 0
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar() {


    let quantidade = document.getElementById('quantidade').value;
    let produto = document.getElementById('produto').value;

    if (quantidade == 0 || quantidade == NaN) {
        alert('Quantidade inválida');
        document.getElementById('quantidade').value = '';
    } else {

        let nomeProduto = produto.split('-')[0];
        let valorUnitario = produto.split('R$')[1];

        let subtotal = valorUnitario * quantidade;

        let listaCarrinho = document.getElementById('lista-produtos');
        listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
        </section>`;

        valorTotal = valorTotal + subtotal

        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$${valorTotal}`;
        document.getElementById('quantidade').value = 0
    }



}


function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
    document.getElementById('quantidade').value = '';

}