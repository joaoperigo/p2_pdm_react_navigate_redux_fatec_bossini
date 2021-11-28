export const ADD_CONTATO = 'ADD_CONTATO'

export const addContato = (nomeContato, imagem) => {
    return {
        type: ADD_CONTATO,
        dadosContato: {
            nomeContato: nomeContato,
            imagem: imagem
        }
    }
}