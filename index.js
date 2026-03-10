// 1. Definição da Classe
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // 2. Método atacar
    atacar() {
        let ataque;

        // Estrutura de decisão para definir o ataque com base no tipo
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque genérico';
        }

        // 3. Saída formatada
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplos de uso (Criando Objetos)
const heroi1 = new Heroi("Aragorn", 35, "guerreiro");
const heroi2 = new Heroi("Gandalf", 1000, "mago");
const heroi3 = new Heroi("Lee", 25, "monge");

heroi1.atacar(); // Saída: o guerreiro atacou usando espada
heroi2.atacar(); // Saída: o mago atacou usando magia
heroi3.atacar(); // Saída: o monge atacou usando artes marciais