import api from './api.js'

const ui = {

    async preencherFormulario(pensamentoId) {
        const pensamento = await api.buscarPensamentoId(pensamentoId) // Busca o pensamento pelo ID usando a função do módulo API
        document.getElementById('pensamento-id').value = pensamento.id
        document.getElementById('pensamento-conteudo').value = pensamento.conteudo
        document.getElementById('pensamento-autoria').value = pensamento.autoria
    },

    async renderizarPensamentos() {
        const listaPensamentos = document.getElementById('lista-pensamentos')

        try {
            const pensamentos = await api.buscarPensamentos()
            pensamentos.forEach(ui.adicionarPensamento);
        }
        catch {
            alert('Erro ao renderizar pensamentos.')
        }
    },

    async adicionarPensamento(pensamento) {
        const listaPensamentos = document.getElementById('lista-pensamentos')
        const li = document.createElement('li')
        li.setAttribute('data-id', pensamento.id)
        li.classList.add('li-pensamento')

        const iconeAspas = document.createElement('img')
        iconeAspas.src = 'assets/imagens/aspas-azuis.png'
        iconeAspas.alt = 'Aspas azuis'
        iconeAspas.classList.add('icone-aspas')

        const conteudoPensamento = document.createElement('div')
        conteudoPensamento.textContent = pensamento.conteudo
        conteudoPensamento.classList.add('pensamento-conteudo')

        const autoriaPensamento = document.createElement('div')
        autoriaPensamento.textContent = pensamento.autoria
        autoriaPensamento.classList.add('pensamento-autoria')

        const botaoEditar = document.createElement('button')
        botaoEditar.classList.add('botao-editar')
        botaoEditar.onclick = () => ui.preencherFormulario(pensamento.id)

        const iconeEditar = document.createElement('img')
        iconeEditar.src = 'assets/imagens/icone-editar.png'
        iconeEditar.alt = 'Editar'
        botaoEditar.appendChild(iconeEditar)

        const icones = document.createElement('div')
        icones.classList.add('icones')
        icones.appendChild(botaoEditar)

        // Adiciona os itens à li e depois à lista
        li.appendChild(iconeAspas)
        li.appendChild(conteudoPensamento)
        li.appendChild(autoriaPensamento)
        li.appendChild(icones)
        listaPensamentos.appendChild(li)
    },

    // Função para limpar o formulário antes do envio
    async limparFormulario() {
        document.getElementById('pensamento-form').reset();
    }
}

export default ui;