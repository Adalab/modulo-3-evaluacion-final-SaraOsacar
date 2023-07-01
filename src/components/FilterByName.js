function FilterByName ({searchByName, handleFilter}) {
 const handleChangeSearchName = (ev) => {
   handleFilter('name', ev.target.value);
 };

    return (
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
    );

}

export default FilterByName;