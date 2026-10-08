const nomes = new Array ( 
    {
        titulo: "Vingadores",
        classificacaoIndicativa: "Livre",
        descricao: "Filme que conta a história de muitos herois",
        lancamento: 2023
    },
    {
        titulo: "Homem de Ferro",
        classificacaoIndicativa: "Livre",
        descricao: "O homem que tinha uma armadura de ferro",
        lancamento: 2024
    },
    {
        titulo: "Pantera Negra",
        classificacaoIndicativa: "Livre",
        descricao: "Um homem preto que era uma pantera",
        lancamento: 2025
    }
)

class Filme {
    Buscar() {
        return nomes
    }

    BuscarUm(id) {
        return nomes[id]
    }

    Criar(titulo, classificacaoIndicativa, descricao, lancamento) {
        nomes.push({titulo, classificacaoIndicativa, descricao, lancamento})
    }

    Alterar(id, titulo, classificacaoIndicativa, descricao, lancamento){
        nomes[id].titulo = titulo
        nomes[id].classificacaoIndicativa = classificacaoIndicativa
        nomes[id].descricao = descricao
        nomes[id].lancamento = lancamento
    }
}

export default new Filme()