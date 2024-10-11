//Tivemos que adicionar essa variavel fora da função porque senão iria ficar dando erro, resentando toda hora quer clicasse no botão
let valorTotal = 0; 
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$: 0';

function adicionar() {
    //Recuperar valores do nome e quantidade
    let produtos = document.getElementById('produto').value;
    let nomeProduto = produtos.split('-')[0];
    let valorProduto = produtos.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;  

    //Caucular o preço, o nosso subtiotal
    let preco = quantidade * valorProduto;

    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos')
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul"> ${quantidade}x </span> ${nomeProduto} <span class="texto-azul"> R$${valorProduto} </span>
    </section>`;

    //Atualizar o valor total da compra

    valorTotal = valorTotal + preco;
    let precoFinal = document.getElementById('valor-total');
    precoFinal.innerHTML = `R$: ${valorTotal}`;
    document.getElementById('quantidade').value = ''; 

}

function limpar() {
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = '';
    let precoFinal = document.getElementById('valor-total');
    precoFinal.innerHTML = `R$: 0 `;
}
