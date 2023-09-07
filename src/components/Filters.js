import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';

function Filters({
  searchByName,
  searchBySpecies,
  handleFilter,
  filteredCharacter,
}) {
  const errorMessage = () => {
    if (searchByName && filteredCharacter.length === 0) {
      return (
        <div className="error_container">
          <p className="error__input__name">
            Sorry but we couldn't find {searchByName}. Try again!
          </p>
          <img
            src="https://i.gifer.com/ReYG.gif"
            alt="Error Img"
            className="error__image"
          />
           </div>
      );
    }

    return null;
  };
  
  console.log(filteredCharacter);
  return (
    <div>
      <FilterByName searchByName={searchByName} handleFilter={handleFilter} />
      <FilterBySpecies
        searchBySpecies={searchBySpecies}
        handlefilter={handleFilter}
      />
      {errorMessage()}
      
      </div>
      
    
  );
}

export default Filters;
