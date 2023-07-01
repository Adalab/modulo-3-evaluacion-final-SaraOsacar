import '../styles/App.scss';
import Logo from "../images/Logo.jpg";
import { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import CharacterList from './CharacterList';
import ls from '../services/localStorage';


function App() {

  const [characterList, setCharacterList] = useState (ls.get('characters', []));

  const [searchByName, setSearchByName] = useState ('');



  useEffect (() => {
    if(ls.get('characters', null) === null) {
      getDataFromApi().then((cleanData) => {
        setCharacterList(cleanData);

        ls.set('characters', cleanData);
      });
    }
  }, []);

  const handleChangeSearchName = (ev) => {
    setSearchByName(ev.target.value);
  }

  const filteredCharacter = characterList
  .filter((eachCharacter) => eachCharacter.name.toLowerCase().includes(searchByName.toLowerCase()))

  return (
    <div>
      <header className="header">
        <img className="header__img" src={Logo} alt="Logo Rick and Morty" />
      </header>
      <main className="main">
        <form className="main__form">
          <label className="form__label" htmlFor="search__name">
            <input
              type="text"
              placeholder="Write the name of the character you're looking for"
              id="search__name"
              className="main__input"
              value={searchByName}
              onChange={handleChangeSearchName}
            />
          </label>
        </form>
        <div className="list">
          <CharacterList characterList={filteredCharacter} />
        </div>
      </main>
      <footer className="footer">
        <p className="footer__phrase">Rick and Morty ©</p>
        <p className="footer__copy">Animated science fiction sitcom</p>
      </footer>
    </div>
  );
}

export default App;
