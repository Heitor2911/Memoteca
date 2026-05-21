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
            alert('Ocorreu um erro ao buscar pensamentos.')
            throw error 
        }
    },

    async cancelarPensamento(pensamento) {
        try {
            await fetch(`http://localhost:3000/pensamentos/${pensamento.id}`, {
                method: 'DELETE'
            })
        } 
        catch {
            alert('Ocorreu um erro ao cancelar pensamento.')
            throw error 
        }
    }
    
}

export default api;