import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './favoritos.css'

const Favoritos = () => {
    const [filmes, setFilmes] = useState([])

    useEffect(()=> {
        const minhaLista = localStorage.getItem('@reactflix')
        setFilmes(JSON.parse(minhaLista) || [])
    },[])

  return (
    <div className='meus-filmes'>
        <h1>Meus Filmes</h1>
        <ul>
            {filmes.map((item) =>(
                <li key={item.id}>
                    <span>{item.title}</span>
                    <div>
                        <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                        <button>Excluir</button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Favoritos