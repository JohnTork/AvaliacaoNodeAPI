import Filme from '../model/filme.js'

class ServiceFilme {
    Buscar() {
        return Filme.Buscar()
    }

    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error ("Favor informar somente números")
        }

        return Filme.BuscarUm(id)
    }

    Criar(titulo, classificacaoIndicativa, descricao, lancamento) {
        if(!titulo, classificacaoIndicativa, descricao, lancamento) {
            throw new Error("Favor informa o Titulo")
        }

        Filme.Criar(titulo, classificacaoIndicativa, descricao, lancamento)
    }

    Alterar(id, titulo, classificacaoIndicativa, descricao, lancamento) {
        if(!id || isNaN(id) || !titulo, classificacaoIndicativa, descricao, lancamento) {
            throw new Error("Favor informa todos os dados")
        }

        Filme.Alterar(id, titulo, classificacaoIndicativa, descricao, lancamento)
    }

    Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o ID corretamente")
        }

        Filme.Deletar(id)
    }
}

export default new ServiceFilme()