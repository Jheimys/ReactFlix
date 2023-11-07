import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './favoritos.css'

import {toast} from 'react-toastify'

const Favoritos = () => {
    const [filmes, setFilmes] = useState([])

    useEffect(()=> {
        const minhaLista = localStorage.getItem('@reactflix')
        setFilmes(JSON.parse(minhaLista) || [])
    },[])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter((item) => (
            item.id !== id
        ))

        setFilmes(filtroFilmes)

        localStorage.setItem('@reactflix', JSON.stringify(filtroFilmes))
        toast.success('Filme removido com sucesso!')
    }

  return (
    <div className='meus-filmes'>
        <h1>Meus Filmes</h1>
        {filmes.length === 0 && <span> Você não possui nehum filme salvo :( </span>}
        <ul>
            {filmes.map((item) =>(
                <li key={item.id}>
                    <span>{item.title}</span>
                    <div>
                        <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                        <button onClick={() => excluirFilme(item.id)} >Excluir</button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Favoritos