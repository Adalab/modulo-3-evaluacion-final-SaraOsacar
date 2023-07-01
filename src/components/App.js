import '../styles/App.scss';
import Logo from "../images/Logo.jpg";
import { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import CharacterList from './CharacterList';
import ls from '../services/localStorage';


function App() {

  const [characterList, setCharacterList] = useState (ls.get('characters', []));

  useEffect (() => {
    if(ls.get('characters', null) === null) {
      getDataFromApi().then((cleanData) => {
        setCharacterList(cleanData);

        ls.set('characters', cleanData);
      });
    }
  }, []);

  return (
    <div>
      <header className="header">
        <img className="header__img" src={Logo} alt="Logo Rick and Morty" />
      </header>
      <main className="main">
        <form className="main__form">
          <label htmlFor="name">
            <input
              type="text"
              placeholder="Filtrar por nombre"
              id="name"
              className="main__input"
            />
          </label>
        </form>
        <div className="list">
          <CharacterList characterList={characterList} />
        </div>
      </main>
    </div>
  );
}

export default App;
