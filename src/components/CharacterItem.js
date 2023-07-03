import { Link } from 'react-router-dom';

function CharacterItem({ eachCharacter }) {
  console.log(eachCharacter);
  return (
    <div className="card__container">
      <Link to={'/character/' + eachCharacter.id} className="card__link">
        <img
          src={eachCharacter.image}
          alt={`Foto de ${eachCharacter.name}`}
          className="card__img"
        />
        <h3 className="card__name">{eachCharacter.name}</h3>
        <p className="card__description">{eachCharacter.species}</p>
      </Link>
    </div>
  );
}
export default CharacterItem;
