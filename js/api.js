const URL_BASE = 'http://localhost:3000'

const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch(`${URL_BASE}/pensamentos`)
            return await response.json()
        } 
        catch {
            alert('Ocorreu um erro ao buscar pensamentos.')
            throw error 
        }
    },

    // Função para salvar um novo pensamento
    async salvarPensamentos(pensamento) {
        try {
            const response = await fetch(`${URL_BASE}/pensamentos`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(pensamento)
            })
            return await response.json()
        } 
        catch {
            alert('Ocorreu um erro ao salvar pensamento.')
            throw error 
        }
    },

    // Função para buscar um pensamento por ID
    async buscarPensamentoId(id) {
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${id}`)
            return await response.json()
        } 
        catch {
            alert('Ocorreu um erro ao buscar pensamento.')
            throw error 
        }
    },

    // Função para editar um pensamento existente
    async editarPensamento(pensamento) {
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${pensamento.id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(pensamento)
            })
            return await response.json()
        } 
        catch {
            alert('Ocorreu um erro ao editar pensamento.')
            throw error 
        }
    },

    // Função para deletar um pensamento por ID
    async deletarPensamento(id) {
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${id}`, {
                method: 'DELETE'
            })
        } 
        catch {
            alert('Ocorreu um erro ao deletar pensamento.')
            throw error 
        }
    }
    
}

export default api;