function FilterBySpecies({ searchBySpecies, handlefilter }) {
  const handleChangeSearchSpecies = (ev) => {
    handlefilter('species', ev.target.value);
  };

  return (
    <form>
      <div className="container__species">
        <label className="form__labelSpecies" htmlFor="search__species">
          Search by{' '}
        </label>
        <select
          className="select__species"
          name="search__species"
          id="search__species"
          value={searchBySpecies}
          onChange={handleChangeSearchSpecies}
        >
          <option value="ALL">All</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>
      </div>
    </form>
  );
}

export default FilterBySpecies;
