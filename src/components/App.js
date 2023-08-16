import '../styles/App.scss';
import Logo from '../images/Logo.jpg';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router-dom';
import getDataFromApi from '../services/api';
import CharacterList from './CharacterList';
import ls from '../services/localStorage';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import LogoFooter from '../images/LogoFooter.jpg';

function App() {
  const [characterList, setCharacterList] = useState(ls.get('characters', []));
  const [searchByName, setSearchByName] = useState('');
  const [searchBySpecies, setSearchBySpecies] = useState('ALL');

  useEffect(() => {
    if (ls.get('characters', null) === null) {
      getDataFromApi().then((cleanData) => {
        setCharacterList(cleanData);

        ls.set('characters', cleanData);
      });
    }
  }, []);

  const handleFilter = (varName, varValue) => {
    if (varName === 'name') {
      setSearchByName(varValue);
    } else if (varName === 'species') {
      setSearchBySpecies(varValue);
    }
  };

  const filteredCharacter = characterList
    .filter((eachCharacter) =>
      eachCharacter.name.toLowerCase().includes(searchByName.toLowerCase())
    )
    .filter((eachCharacter) => {
      if (searchBySpecies === 'ALL') {
        return true;
      } else {
        return eachCharacter.species === searchBySpecies;
      }
    });
  const species = characterList.map((eachCharacter) => eachCharacter.species);

  // Obtener información del character

  const { pathname } = useLocation();

  const routeData = matchPath('/character/:characterId', pathname);

  const characterId = routeData !== null ? routeData.params.characterId : null;

  const characterData = characterList.find(
    (character) => character.id === parseInt(characterId)
  );

  return (
    <div>
      <header className="header">
        <img className="header__img" src={Logo} alt="Logo Rick and Morty" />
      </header>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  searchByName={searchByName}
                  searchBySpecies={searchBySpecies}
                  handleFilter={handleFilter}
                  species={species}
                  filteredCharacter={filteredCharacter}
                />
                <div className="list">
                  <CharacterList characterList={filteredCharacter} />
                </div>
              </>
            }
          />

          <Route
            path="/character/:characterId"
            element={<CharacterDetail characterData={characterData} />}
          />
        </Routes>
      </main>
      <footer className="footer">
        <img
          src={LogoFooter}
          alt="Logo Rick and Morty"
          className="footer__logo"
        />
        <p className="footer__phrase">
          Rick and Morty © Animated science fiction sitcom
        </p>
      </footer>
    </div>
  );
}

export default App;
