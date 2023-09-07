function FilterByName({ searchByName, handleFilter }) {
  const handleChangeSearchName = (ev) => {
    ev.preventDefault();
    handleFilter('name', ev.target.value);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container__name">
        <label className="form__labelName" htmlFor="search__name">
          Name
        </label>
        <input
          type="text"
          placeholder="Look for your favorite character"
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
