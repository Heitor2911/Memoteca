import ui from "./ui.js"
import api from "./api.js"

document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarPensamentos()

    const formPensamento = document.getElementById('pensamento-form')
    formPensamento.addEventListener('submit', manipularSubmitFormulario)
    
    const  botaoCancelar = document.getElementById('botao-cancelar')
    botaoCancelar.addEventListener('click', manipularCancelamento)
})

async function manipularSubmitFormulario(event) {
    event.preventDefault()
    const id = document.getElementById('pensamento-id').value
    const conteudo = document.getElementById('pensamento-conteudo').value
    const autoria = document.getElementById('pensamento-autoria').value

    try {
        await api.salvarPensamentos({ conteudo, autoria})
        ui.renderizarPensamentos()
    } 
    catch {
        alert('Erro ao salvar pensamento.')
    }
}

async function manipularCancelamento() {
    ui.limparFormulario()
}