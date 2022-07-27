 function Character({ character }) {
  return (
    <div className="text-center mt-3 px-lg-5">
      <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
      <h2 className="mt-3">{character.name}</h2>
      <p>{character.origin.name}</p>
    </div>
  )
}

export default Character
