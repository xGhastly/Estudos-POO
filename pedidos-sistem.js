class Prato
{
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    exibirDetalhes(){
        console.log(`Nome do prato:${this.nome} e o preço do prato: ${this.preco}`)
    }
}

class Pedido
{
    constructor(cliente){
        this.cliente = cliente;
        this.pratos = [];
        this.status = 'pendente'
    }

    adicionarPrato(prato) {
        if (this.pratos.some(i => i.nome === prato.nome)) {
            return console.log('Esse prato já está no pedido.');
        }
        this.pratos.push(prato);
        console.log(`Seu prato ${prato.nome} foi adicionado ao pedido`);
    }

    removerPrato(prato) {
        if (!this.pratos.some(i => i === prato)) {
            return console.log('Você não possui esse prato.');
        }    
        this.pratos = this.pratos.filter(i => i !== prato);
        console.log(`Seu prato ${prato.nome} foi removido do pedido.`);
    }

    calcularTotal() {
        const total = this.pratos.reduce((acumulador, prato) => {
            return acumulador + prato.preco;
        }, 0)
    return total;
    }

    atualizarStatus(novoStatus) {
        this.status = novoStatus;
        console.log(this.status)
    }

    exibirDetalhesPedido() {
        console.log(`Pedido de ${this.cliente.nome}:`);
        this.pratos.forEach(prato => prato.exibirDetalhes());
        console.log(`Status: ${this.status}`);
        console.log(`Total: ${this.calcularTotal()}`);
    }
}

class Cliente 
{
    constructor(nome) {
        this.nome = nome;
        this.pedidos = [];
    }

    fazerPedido(pedido) { 
        if(this.pedidos.some(i => i.status === 'pendente')) {
           return console.log('Você já tem um pedido pendente');
        }    
        this.pedidos.push(pedido);
    }

    listarPedidos() {
        if (this.pedidos.length === 0) {
            console.log('Nenhum pedido realizado.');
            return;
        }
        
        this.pedidos.forEach((pedido, index) => {
            console.log(`Pedido ${index + 1}:`);
            pedido.exibirDetalhesPedido();
        });
    }
}

const cliente1 = new Cliente('Maria');
const prato1 = new Prato('Pizza', 30);
const prato2 = new Prato('Lasanha', 25);
const prato3 = new Prato('Macarrao', 15);
const pedido1 = new Pedido(cliente1);

pedido1.adicionarPrato(prato1);
pedido1.adicionarPrato(prato2);
pedido1.adicionarPrato(prato3)
pedido1.removerPrato(prato1);
pedido1.atualizarStatus('em preparo');
cliente1.fazerPedido(pedido1);
cliente1.listarPedidos()
pedido1.atualizarStatus('entregue')
cliente1.listarPedidos()

