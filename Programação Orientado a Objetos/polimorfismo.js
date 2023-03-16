// Polimorfismo

class Atleta {
  peso;
  categoria;

  corpo(peso) {
    this.peso = peso
  }

  definirCategoria() {
    if (this.peso <=50) {
      this.categoria = 'infantil'
    }
    else if (this.peso <=65) {
      this.peso = 'juvenil'
    }
    else {
      this.categoria = 'adulto'
    }
  }
}

// Polimosfismo

/* class Lutador extends Atleta {
  corpo(peso) {
    super(peso)
  }

  definirCategoria() {
    if (this.peso <= 54) {
      this.categoria = 'pena'
    }

    else if (this.peso < 60) {
      this.categoria = 'leve'
    }
    
    else if (this.peso < 75) {
      this.categoria = 'meio-leve'
    }

    else if (this.peso < 90){
      this.categoria = 'pesado'
    }
  }
} */