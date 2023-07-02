import { Link } from 'react-router-dom';

function CharacterDetail({ characterData }) {
    if(characterData){
      return (
        <div className="character__detail">
          <section className="card__detail">
            <Link to="/">Back</Link>
            <img
              className="card__img"
              src={characterData.image}
              alt={`Foto de ${characterData.name}`}
            />
            <h3>{characterData.name}</h3>
            <p>Specie: {characterData.species}</p>
            <p>Origin: {characterData.origin}</p>
            <p>Episodes: {characterData.episode}</p>
            <p>Status: {characterData.status}</p>
          </section>
        </div>
      );
    }
    else {
        return (
          <div>
            <p className="error">
              Sorry, that character doesn't exist, try again!{' '}
            </p>
            <Link to="/">Back</Link>
          </div>
        );
    }
}
export default CharacterDetail;
