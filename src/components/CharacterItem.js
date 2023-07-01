function CharacterItem({ eachCharacter }) {
  console.log(eachCharacter);
  return (
    <div className="card__container">
      <img src={eachCharacter.image} alt={`Foto de ${eachCharacter.name}`} className="card__img"/>
      <h3 className="card__name">{eachCharacter.name}</h3>
      <p className="card__description">{eachCharacter.species}</p>
    </div>
  );
}
export default CharacterItem;
