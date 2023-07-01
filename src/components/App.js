import '../styles/App.scss';
import Logo from "../images/Logo.jpg";
import { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import CharacterList from './CharacterList';
import ls from '../services/localStorage';
import Filters from './Filters';


function App() {

  const [characterList, setCharacterList] = useState (ls.get('characters', []));
  const [searchByName, setSearchByName] = useState ('');
  const [searchBySpecies, setSearchBySpecies] = useState ('');



  useEffect (() => {
    if(ls.get('characters', null) === null) {
      getDataFromApi().then((cleanData) => {
        setCharacterList(cleanData);

        ls.set('characters', cleanData);
      });
    }
  }, []);

  const handleFilter = (varName, varValue) => {
    if (varName === 'name') {
      setSearchByName(varValue);
    }
     
    else if(varName === 'species'){
      setSearchBySpecies(varValue)
    }
  }
  

  /*
  const handleChangeSearchName = (ev) => {
    //setSearchByName(ev.target.value);
    handleFilter('name', ev.target.value);
  }
  const handleChangeSearchSpecie = (ev) => {
   // setSearchBySpecie(ev.target.value);
   handleFilter('name', ev.target.value);
  }
*/

  const filteredCharacter = characterList
  .filter((eachCharacter) => eachCharacter.name.toLowerCase().includes(searchByName.toLowerCase()))
/*
  
  .filter((eachCharacter) => {
    if(searchBySpecies === 'ALL') {
      return true;
    }
    else {
      return eachCharacter.species === searchBySpecies;
    }
  }); 
  const species = characterList.map((eachCharacter)=> eachCharacter.species);
  */

  return (
    <div>
      <header className="header">
        <img className="header__img" src={Logo} alt="Logo Rick and Morty" />
      </header>
      <main className="main">
        <Filters 
        searchByName={searchByName}
        searchBySpecies={searchBySpecies}
        handleFilter={handleFilter}
       />
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
