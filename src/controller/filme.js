import ServiceFilme from '../service/filme.js'

class ControllerFilme {
    Buscar(req, res) {
        try {
            const nomes = ServiceFilme.Buscar()

            res.send({ nomes })
        } catch (e) {
            res.send({ message: e.message })
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const titulo = ServiceFilme.BuscarUm(id)

            res.send({ titulo })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Criar(req, res) {
        try {
            const titulo =req.body.titulo
            const classificacaoIndicativa = req.body.classificacaoIndicativa
            const descricao = req.body.descricao
            const lancamento = req.body.lancamento
            ServiceFilme.Criar(titulo, classificacaoIndicativa, descricao, lancamento)
            
            res.send({ message: "Criado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Alterar(req, res) {
        try {
            const id = req.params.id
            const titulo =req.body.titulo
            const classificacaoIndicativa = req.body.classificacaoIndicativa
            const descricao = req.body.descricao
            const lancamento = req.body.lancamento
            ServiceFilme.Alterar(id, titulo, classificacaoIndicativa, descricao, lancamento)

            res.send({ message: "Alterado com Sucesso!"})
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Deletar(req, res) {
        try {
            const id = req.params.id
            ServiceFilme.Deletar(id)

            res.send({ message: "Deletado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
}

export default new ControllerFilme()