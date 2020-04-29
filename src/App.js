import React, { Component } from 'react';
import api from './api'

class App extends Component {

    // O state armazera tudo o que precisarmos. No caso estou armazenando o array que retornou da requisição, e dei o nome de artigos para esse state.
    state = {
        artigos: [],
    }

    async componentDidMount() {
        const response = await api.get('/artigo')
        // console.log(response.data)
        this.setState({ artigos: response.data })
    }

    render() {

        // Desestruturar. Pegar apenas os artigos de dentro do state. Preciso fazer isso pois o state pode ter vários arrays.
        const { artigos } = this.state

        return (
            <div>
                <h1>Listar Artigos</h1>
                <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                    {/* Criar Um map dos artigos. O map irá passar e listar um artigo e salvar com uma chave (key) */}
                    {artigos.map(artigo => (
                        // Preciso passar um key para o javascript saber quem é quem
                        <li key={artigo.id}>
                            <h2>Título: {artigo.titulo}</h2>
                            <p>Conteúdo: {artigo.conteudo}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default App;
