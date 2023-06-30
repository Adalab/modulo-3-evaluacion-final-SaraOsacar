import '../styles/App.scss';
import Logo from "../images/Logo.jpg";
import { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import CharacterList from './CharacterList';


function App() {

  const [characterList, setCharacterList] = useState ([]);

  useEffect (() => {
    getDataFromApi()
    .then((cleanData) => {
      setCharacterList(cleanData);

    });
  }, []);

  return (
    <div>
      <header className='header'>
        <img className='header__img' src={Logo} alt="Logo Rick and Morty" />
      </header>
      <main className="main">
        <form className='main__form'>
          <label htmlFor="name">
          <input type="text" placeholder='Name' id="name"/>
          </label>
        </form>
        <CharacterList characterList={characterList}/>
        
      </main>
    </div>
  );
}

export default App;
