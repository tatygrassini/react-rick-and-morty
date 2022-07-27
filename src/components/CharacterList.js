import { useEffect, useState } from 'react'
import Character from './Character'

function NavPage(props) {
  return (
    <div className='d-flex justify-content-between align-items-center py-4'>
      <p className='m-0'>Page: {props.page}</p>
      <button className='btn btn-primary btn-sm'
        onClick={ () => props.setPage(props.page + 1) }>
        Page {props.page + 1}
      </button>
    </div>
  )
}

function CharacterList() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      const data = await response.json()
      setLoading(false)
      setCharacters(data.results);
    }
    fetchData()
  }, [page])

  return (
    <div className='container'>

      <NavPage page={page} setPage={setPage} />

      {
        loading ? (
          <h1>Loading...</h1>
      ) : (
        <div className="row">
          {
            characters.map((character) => {
              return(
                <div className='col-xs-1 col-md-6 col-lg-4 col-xl-3' key={character.id}>
                  <Character character={character} />
                </div>
              )
            })
          }
        </div>
      )}

      <NavPage page={page} setPage={setPage} />
    </div>
  )
}

export default CharacterList
