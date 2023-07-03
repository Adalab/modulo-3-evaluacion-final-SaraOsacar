import { Link } from 'react-router-dom';

function CharacterDetail({ characterData }) {
    if(characterData){
      return (
        <form className="character__detail">
          <Link className="link__back" to="/">
            Back
          </Link>
          <section className="card__detail">
            <img
              className="cardDetail__img"
              src={characterData.image}
              alt={`Foto de ${characterData.name}`}
            />
            <h3 className="name__detail">{characterData.name}</h3>
            <div className="container__data__detail">
            <p>Specie: {characterData.species}</p>
            <p>Origin: {characterData.origin}</p>
            <p>Episodes: {characterData.episodes}</p>
            <p>Status: {characterData.status}</p>
            </div>
          </section>
        </form>
      );
    }
    else {
        return (
          <div>
            <p className="error">
              Sorry, that character doesn't exist, try again!
            </p>
            <Link className="link__back" to="/">Back</Link>
        
          </div>
        );
    }
}
export default CharacterDetail;
