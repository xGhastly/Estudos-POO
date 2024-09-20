class Motorista {
    constructor(nome) {
        this.nome = nome;
        this.horaChegada = '';
        this.horaSaida = '';
        this.status = 'ausente';
        this.emViagem = false;
    }

    registrarChegada(hora) {
        if (this.status === 'ausente') {
            this.horaChegada = hora;
            this.status = 'presente';
            return `O motorista ${this.nome} chegou às ${this.horaChegada}`;
        } else {
            return 'O motorista já está presente.';
        }
    }

    registrarSaida(hora) {
        if (this.status === 'presente') {
            this.horaSaida = hora;
            this.status = 'ausente';
            return `O motorista ${this.nome} saiu às ${this.horaSaida}`;
        } else {
            return 'O motorista já está ausente.';
        }
    }

    iniciarViagem() {
        if (this.emViagem) {
            return 'O motorista já está em viagem.';
        } else {
            this.emViagem = true;
            return `O motorista ${this.nome} iniciou uma viagem.`;
        }
    }

    finalizarViagem() {
        if (!this.emViagem) {
            return 'O motorista não está em viagem.';
        } else {
            this.emViagem = false;
            return `O motorista ${this.nome} finalizou a viagem.`;
        }
    }

    checarStatus() {
        return `O motorista ${this.nome} está ${this.status}`;
    }
}

class RegistroMotoristas {
    constructor() {
        this.motoristas = [];
    }

    registraMotorista(motorista) {
        if (!this.motoristas.some(f => f.nome === motorista.nome)) {
            this.motoristas.push(motorista);
            return 'Motorista cadastrado com sucesso.';
        } else {
            return 'Motorista já cadastrado.';
        }
    }

    removeMotorista(nome) {
        const index = this.motoristas.findIndex(f => f.nome === nome);
        if (index !== -1) {
            const removido = this.motoristas.splice(index, 1);
            return `Motorista ${removido[0].nome} foi removido com sucesso.`;
        } else {
            return 'Motorista não existe.';
        }
    }

    listaMotoristas() {
        return this.motoristas.map(motorista => motorista.nome);
    }
}

class RegistroPonto {
    constructor() {
        this.bdPonto = [];
    }

    registraChegada(motorista, hora) {
        const resultado = motorista.registrarChegada(hora);
        if (motorista.status === 'presente') {
            this.bdPonto.push(`O motorista ${motorista.nome} chegou às ${motorista.horaChegada}`);
        }
        console.log(resultado);
    }

    registraSaida(motorista, hora) {
        const resultado = motorista.registrarSaida(hora);
        if (motorista.status === 'ausente') {
            this.bdPonto.push(`O motorista ${motorista.nome} saiu às ${motorista.horaSaida}`);
        }
        console.log(resultado);
    }

    checaBdPonto() {
        console.log(this.bdPonto);
    }
}

class GerenciarViagens {
    constructor() {
        this.viagens = [];
    }

    saidaViagem(motorista, destino) {
        const resultado = motorista.iniciarViagem();
        if (motorista.emViagem) {
            this.viagens.push({ motorista: motorista.nome, destino: destino });
        }
        console.log(resultado);
    }

    chegadaViagem(motorista) {
        const resultado = motorista.finalizarViagem();
        if (!motorista.emViagem) {
            this.viagens = this.viagens.filter(v => v.motorista !== motorista.nome);
        }
        console.log(resultado);
    }

    listarViagens() {
        console.log(this.viagens);
    }
}

// Exemplo de uso:
const motorista1 = new Motorista("João");
const registroMotoristas = new RegistroMotoristas();

console.log(registroMotoristas.registraMotorista(motorista1));
console.log(registroMotoristas.listaMotoristas());

const ponto = new RegistroPonto();
ponto.registraChegada(motorista1, "08:00");
ponto.registraSaida(motorista1, "18:00");

const viagens = new GerenciarViagens();
viagens.saidaViagem(motorista1, "São Paulo");
viagens.listarViagens();
viagens.chegadaViagem(motorista1);

