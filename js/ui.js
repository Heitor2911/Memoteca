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
        listaPensamentos.innerHTML = '' // Limpa a lista antes de renderizar novamente

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

        // Cria o elemento para o conteúdo do pensamento
        const conteudoPensamento = document.createElement('div')
        conteudoPensamento.textContent = pensamento.conteudo
        conteudoPensamento.classList.add('pensamento-conteudo')

        // Cria o elemento para a autoria do pensamento
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

        const botaoExcluir = document.createElement('button')
        botaoExcluir.classList.add('botao-excluir')
        botaoExcluir.onclick = async () => {
            try {
                await api.deletarPensamento(pensamento.id)
                ui.renderizarPensamentos() // Re-renderiza a lista de pensamentos após a exclusão
            }
            catch {
                alert('Erro ao excluir pensamento.')
            }
        }

        const iconeExcluir = document.createElement('img')
        iconeExcluir.src = 'assets/imagens/icone-excluir.png'
        iconeExcluir.alt = 'Excluir'
        botaoExcluir.appendChild(iconeExcluir)

        // Cria um container para os botões de ação (editar e excluir)
        const icones = document.createElement('div')
        icones.classList.add('icones')
        icones.appendChild(botaoEditar)
        icones.appendChild(botaoExcluir)

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
    },

    // Função para caso não haja nenhum pensamento cadastrado

    listaVazia() {
        const listaContainer = document.getElementById('lista-pensamentos-container');

        const mensagem = document.createElement('p');
        mensagem.textContent = 'Nenhum pensamento cadastrado. Que tal compartilhar algo?';

        const imagem = document.createElement('img');
        imagem.src = 'assets/imagens/lista-vazia.png';
        imagem.alt = 'Lista vazia';

        const vazio = document.createElement('div');
        vazio.classList.add('lista-vazia');
        vazio.appendChild(imagem);
        vazio.appendChild(mensagem);

        listaContainer.appendChild(vazio);
    }
}

export default ui;