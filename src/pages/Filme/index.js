import { useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";
import api from "../../server/api";

import './filme-info.css'

import { toast } from "react-toastify";


const Filme = () => {
  const { id } = useParams()
  const [filme, setFime] = useState({})
  const [ loading, setloading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    async function loadFilme() {
      await api.get(`/movie/${id}`,{
        params:{
          api_key:'46351781a58dd45b6ed0c086acbcb999',
          language: 'pt-BR',
        }
      })
      .then((response) => {
        setFime(response.data)
        setloading(false)
      })
      .catch(() => {
        navigate("/", {replace: true})
        return
      })
    }

    loadFilme()

    return () => {
      console.log('componente foi desmontado')
    }

  }, [id, navigate])

  function salvarFilmes(){
    const minhaLista = localStorage.getItem("@reactflix")
    let filmesSalvos = JSON.parse(minhaLista) || []

    const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id )

    if(hasFilme){
      toast.warn('Esse filme já está na sua lista!')
      return
    }

    filmesSalvos.push(filme)
    localStorage.setItem("@reactflix", JSON.stringify(filmesSalvos))
    toast.success('Filme salvo com sucesso!')
  }

  if(loading) {
    return (
      <div className="filme-info">
        <h1>Carregando detalhes ...</h1>
      </div>
    )
  }
  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${filme.backdrop_path}`} alt={filme.title} />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average}/ 10</strong>

      <div className="area-buttons">
        <button onClick={salvarFilmes} >Salvar</button>
        <button>
          <a 
            href={`https://www.youtube.com/results?search_query=${filme.title} trailer`} 
            target="blank"
            rel="external"
          > 
            Trailer 
          </a>
        </button>
      </div>
    </div>
  )
}

export default Filme