const vingadores = [
    {
        nome: 'Steve Rogers',
        codinome: 'Capitão América',
        armaPrincipal: 'Escudo americano',
        armaSecundaria: '',
        velocidade: 85, // de 0 a 100
        forca: 75, // de 0 a 100
        resistencia: 80, // de 0 a 100
        descricao: function () {
            return "Nome do personagem: " + this.nome + "\n" +
                   "Codinome do personagem: " + this.codinome + "\n" +
                   "Arma principal: " + this.armaPrincipal + "\n" +
                   "Arma secundária: " + this.armaSecundaria + "\n" +
                   "Nível de força: " + this.forca + "\n" +
                   "Nível de velocidade: " + this.velocidade + "\n" +
                   "Nível de resistência: " + this.resistencia;
        }
    },
    {
        nome: 'Tony Stark',
        codinome: 'Iron Man',
        armaPrincipal: 'Armadura Stark',
        armaSecundaria: 'Repulsores',
        velocidade: 80, // de 0 a 100
        forca: 85, // de 0 a 100
        resistencia: 70, // de 0 a 100
        descricao: function () {
            return "Nome do personagem: " + this.nome + "\n" +
                   "Codinome do personagem: " + this.codinome + "\n" +
                   "Arma principal: " + this.armaPrincipal + "\n" +
                   "Arma secundária: " + this.armaSecundaria + "\n" +
                   "Nível de força: " + this.forca + "\n" +
                   "Nível de velocidade: " + this.velocidade + "\n" +
                   "Nível de resistência: " + this.resistencia;
        }
    },
    {
        nome: 'Thor Odinson',
        codinome: 'Thor',
        armaPrincipal: 'Mjolnir',
        armaSecundaria: 'Raio',
        velocidade: 70, // de 0 a 100
        forca: 100, // de 0 a 100
        resistencia: 90, // de 0 a 100
        descricao: function () {
            return "Nome do personagem: " + this.nome + "\n" +
                   "Codinome do personagem: " + this.codinome + "\n" +
                   "Arma principal: " + this.armaPrincipal + "\n" +
                   "Arma secundária: " + this.armaSecundaria + "\n" +
                   "Nível de força: " + this.forca + "\n" +
                   "Nível de velocidade: " + this.velocidade + "\n" +
                   "Nível de resistência: " + this.resistencia;
        }
    },
    {
        nome: 'Bruce Banner',
        codinome: 'Hulk',
        armaPrincipal: 'Força bruta',
        armaSecundaria: 'Raiva',
        velocidade: 60, // de 0 a 100
        forca: 100, // de 0 a 100
        resistencia: 95, // de 0 a 100
        descricao: function () {
            return "Nome do personagem: " + this.nome + "\n" +
                   "Codinome do personagem: " + this.codinome + "\n" +
                   "Arma principal: " + this.armaPrincipal + "\n" +
                   "Arma secundária: " + this.armaSecundaria + "\n" +
                   "Nível de força: " + this.forca + "\n" +
                   "Nível de velocidade: " + this.velocidade + "\n" +
                   "Nível de resistência: " + this.resistencia;
        }
    }
];

// Função para comparar dois personagens
function compararPersonagens(personagem1, personagem2) {
    console.log(`${personagem1.nome} vs ${personagem2.nome}:`);
    
    for (let atributo in personagem1) {
        if (atributo !== 'nome' && atributo !== 'codinome' && atributo !== 'armaPrincipal' && atributo !== 'armaSecundaria' && atributo !== 'descricao') {
            if (personagem1[atributo] > personagem2[atributo]) {
                console.log(`${personagem1.nome} vence em ${atributo} (Valor: ${personagem1[atributo]} vs ${personagem2[atributo]})`);
            } else if (personagem1[atributo] < personagem2[atributo]) {
                console.log(`${personagem2.nome} vence em ${atributo} (Valor: ${personagem2[atributo]} vs ${personagem1[atributo]})`);
            } else {
                console.log(`${personagem1.nome} e ${personagem2.nome} são iguais em ${atributo} (Valor: ${personagem1[atributo]} vs ${personagem2[atributo]})`);
            }
        }
    }
    console.log('----------------------------------');
}

// Comparando todos os personagens
for (let i = 0; i < vingadores.length; i++) {
    for (let j = i + 1; j < vingadores.length; j++) {
        compararPersonagens(vingadores[i], vingadores[j]);
    }
}

// Testando a descrição de cada personagem
vingadores.forEach(personagem => {
    console.log(personagem.descricao());
    console.log('----------------------------------');
});
