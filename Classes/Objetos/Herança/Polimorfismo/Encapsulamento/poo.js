/* Uma "CLASSE" é um molde ou uma estrutura que define propriedades (atributos) e 
comportamentos (métodos) de um determinado tipo de objeto. É um conceito fundamental
na Programação Orientada a Objetos (POO) e serve como uma planta baixa para criar objetos
com características e funcionalidades específicas.
*/

/* Exemplo: Uma classe Carro pode ter atributos como cor, modelo, ano e métodos como acelerar() e frear().
*/

class Carro
{
    constructor(cor, modelo, ano) {
        this.cor = cor;
        this.modelo = modelo;
        this.ano = ano;
    }

    acelerar() {
        console.log(`O carro da marca ${this.modelo} ${this.cor} está acelerando.`);
    }

    frear(){
            console.log(`O carro da marca ${this.modelo} ${this.cor} está freando.`);
    }
}

/* Um objeto é uma instância de uma classe. Ele possui valores específicos para os 
atributos definidos na classe e pode executar os métodos da classe. 
Em outras palavras, um objeto é uma "cópia" da classe com valores concretos.
*/

/* Exemplo: Um objeto meuCarro é uma instância da classe Carro,
com atributos como cor = 'amarelo', modelo = 'Fusca', e ano = 1998.
*/

const meuCarro = new Carro('amarelo', 'Fusca', 1998);
meuCarro.acelerar();

/* Herança é um princípio onde uma classe (subclasse ou classe derivada)
herda propriedades e métodos de outra classe (superclasse ou classe base).
Isso permite o reaproveitamento de código e a criação de hierarquias de classes. 
A subclasse pode ter comportamentos adicionais ou modificar os comportamentos da superclasse. 

Exemplo: A classe CarroEsportivo herda da classe Carro e possui um método adicional ativarModoEsportivo().
*/


class CarroEsportivo extends Carro {

    ativarModoEsportivo() {
        console.log(`${this.modelo} ${this.cor} ativou o modo esportivo!`);
    }
}

const meuCarroEsportivo = new CarroEsportivo('Ferrari', 'F8', 2024)
meuCarroEsportivo.acelerar();
meuCarroEsportivo.ativarModoEsportivo();

/* Polimorfismo é a capacidade de um método ter comportamentos diferentes em classes 
relacionadas por herança. Em outras palavras, um método com o mesmo nome pode ter implementações
diferentes em classes diferentes, mas que compartilham uma mesma superclasse.

Exemplo: A classe Van e a classe Moto herdam de Veiculo e redefinem o método acelerar() de formas diferentes.*/

class Veiculo {
    acelerar() {
      console.log('O veículo está acelerando.');
    }
  }
  
  class Van extends Veiculo {
    acelerar() {
      console.log('A van está acelerando.');
    }
  }
  
  class Moto extends Veiculo {
    acelerar() {
      console.log('A moto está acelerando.');
    }
  }
  
  const minhaVan = new Carro();
  const minhaMoto = new Moto();
  
  minhaVan.acelerar();
  minhaMoto.acelerar(); 

  /* Encapsulamento é o conceito de esconder a implementação interna de uma classe, 
  expondo apenas o que é necessário através de métodos públicos (getters e setters). 
  Isso protege o estado interno do objeto de modificações externas indevidas
  e facilita a manutenção e evolução do código. 
  
  Exemplo: A classe ContaBancaria possui um atributo privado _saldo
  e métodos depositar() e sacar() que controlam o acesso a esse atributo.*/

  class ContaBancaria {
    constructor(saldoInicial) {
      this._saldo = saldoInicial; // Atributo privado
    }
  
    // Método público para acessar o saldo
    getSaldo() {
      return this._saldo;
    }
  
    // Método público para depositar
    depositar(valor) {
      if (valor > 0) {
        this._saldo += valor;
      } else {
        console.log('O valor de depósito deve ser positivo.');
      }
    }
  
    // Método público para sacar
    sacar(valor) {
      if (valor > 0 && valor <= this._saldo) {
        this._saldo -= valor;
      } else {
        console.log('Saldo insuficiente ou valor inválido.');
      }
    }
  }
  
  const minhaConta = new ContaBancaria(1000);
  minhaConta.depositar(500);
  console.log(minhaConta.getSaldo()); // Saída: 1500
  minhaConta.sacar(200);
  console.log(minhaConta.getSaldo()); // Saída: 1300

/* Resumo:
Classes: Definem a estrutura de dados e comportamentos.
Objetos: Instâncias concretas de uma classe.
Herança: Reutiliza e expande funcionalidades de uma classe base.
Polimorfismo: Métodos com o mesmo nome em classes relacionadas, mas comportamentos diferentes.
Encapsulamento: Protege e controla o acesso aos dados internos de um objeto.
Esses conceitos formam a base da programação orientada a objetos e são amplamente usados 
para criar sistemas mais organizados, modulares e fáceis de manter */