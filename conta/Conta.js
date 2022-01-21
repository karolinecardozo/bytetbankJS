//classe abstrata, so deve ser herdada
export class Conta {
    constructor(saldoInical, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Voce nao deveria instanciar um objeto do tipo conta diretamente, pois essa e uma classe abstrata");
        }

        this._saldo = saldoInical;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    //acessores para encapsular comportamentos e proteger os dados da classe
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
      
    }

    get cliente(){
        return this._cliente;
    } 

    get saldo (){
        return this._saldo;
    }

    //metodo abstrato
    sacar(valor){
        throw new Error("O metodo sacar da conta e abstrato");

    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >=valorSacado){
          this._saldo -=valorSacado;
          return valorSacado;
        }

        return 0;
    }
    
    depositar(valor){
        if(valor <=0 ) return;
        this._saldo += valor;
    }
    
    trasnferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}