import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    constructor (cliente, agencia){
      super(0, cliente, agencia);
        ContaCorrente.numeroDeContas +=1;
    }

    //sobreescrevendo o comportamento de sacar
    sacar(valor){
      let taxa = 1.1;
      return this._sacar(valor, taxa);
    }
  }

  







    //atributos estaticos, aplicado com dependencia num todo. atributos normais 
    //sao independentes, pode ser alterado em u local sem afetar o todo.
        //#saldo =0 atributos  privados



    //contrutores facilitam a leitura, evitando repeticao de codigo. toda classe
    //contruida passa por ele ajudando no contador.