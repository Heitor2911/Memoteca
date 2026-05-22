const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch('http://localhost:3000/pensamentos')
            return await response.json()
        } 
        catch {
            alert('Ocorreu um erro ao buscar pensamentos.')
            throw error 
        }
    },

    async salvarPensamentos(pensamento) {
        try {
            const response = await fetch('http://localhost:3000/pensamentos', {
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

    async buscarPensamentoId(id) {
        try {
            const response = await fetch(`http://localhost:3000/pensamentos/${id}`)
            return await response.json()
        } 
        catch {
            alert('Ocorreu um erro ao buscar pensamento.')
            throw error 
        }
    },

    async editarPensamento(pensamento) {
        try {
            const response = await fetch(`http://localhost:3000/pensamentos/${pensamento.id}`, {
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

    async deletarPensamento(pensamento) {
        try {
            await fetch(`http://localhost:3000/pensamentos/${pensamento.id}`, {
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