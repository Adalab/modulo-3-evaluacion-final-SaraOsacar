function FilterByName({ searchByName, handleFilter }) {
  const handleChangeSearchName = (ev) => {
    ev.preventDefault();
    handleFilter('name', ev.target.value);
  };

  /*const errorMessage = true;*/
  

  return (
    <form>
      <div className="container__name">
        <label className="form__labelName" htmlFor="search__name">
          Name{' '}
        </label>
        <input
          type="text"
          placeholder="Write the name of the character you're looking for"
          id="search__name"
          className="main__input"
          value={searchByName}
          onChange={handleChangeSearchName}
        />
        
        {/*}
          {searchByName && errorMessage && (
            <p className="error__input__name">
              Sorry {''} 
              <span className="error__msg">{searchByName}</span> this serie doesn't have any character with that name
            </p>
          )
        }
      */}
      
      </div>
    </form>
  );
}

export default FilterByName;
