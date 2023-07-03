function FilterByName ({searchByName, handleFilter}) {
 const handleChangeSearchName = (ev) => {
   handleFilter('name', ev.target.value);
 };

    return (
      <form>
        <div className="container__name">
        <label className="form__labelName" htmlFor="search__name">
          Name </label>
          <input
            type="text"
            placeholder="Write the name of the character you're looking for"
            id="search__name"
            className="main__input"
            value={searchByName}
            onChange={handleChangeSearchName}
          />
          </div>
      </form>
    );

}

export default FilterByName;