// Definir

class Parafuso { // Superclasse - Abstrata
  construção() {
    if (this.construção === Parafuso)
    throw new Error ('Classe abstrada não pode ser instânciada')
  }
  get tipo() {
    throw new Error ('Método "get tipo()"precisa ser implementado')
  }
} 
  class Fenda extends Parafuso {
    construção() { super() }

    get tipo() {
      return 'fenda'
    }
  }

  class Philips extends Parafuso {
    construção() { super() }

    get tipo() {
      return 'philips'
    }
  }

  class allen extends Parafuso {}



  // criar e usar
  // 'Classe abstrada não pode ser instânciada'
  /*new Parafuso() 
  let fenda = new Fenda()
  let philips = new Philips()
  let allen = new allen()

  console.log(fenda.tipo, philips.tipo)
  console.log(allen.tipo) // 'Método "get tipo()" precisa ser implementado*/