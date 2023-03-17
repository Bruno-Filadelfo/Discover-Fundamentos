const pessoas = ['Bruno', 'Bianca', 'Barbara', 'André', 'Adriana', 'Andressa'];
const pessoascomaletraB = pessoas
.filter(pessoas => pessoas.startsWith('B'))
.map(bpessoas => bpessoas.toUpperCase())

console.log(pessoascomaletraB);