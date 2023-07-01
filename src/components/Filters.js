import FilterByName from "./FilterByName";

function Filters ({searchByName, searchBySpecies, handleFilter}) {

    
    const handleChangeSearchSpecies = (ev) => {
      // setSearchBySpecie(ev.target.value);
      handleFilter('species', ev.target.value);
    }

    return (
         <form className="filters">
            <FilterByName
            searchByName={searchByName}
            handleFilter={handleFilter} />

            {/* Pndt FilterbySpecies y pasarlo */}

          <label className="form__labelSpecies" htmlFor="search__species"></label>
          <select
            className="select__species"
            name="search__species"
            id="search__species"
            value={searchBySpecies}
            onChange={handleChangeSearchSpecies}
          >
            <option value="ALL">All</option>
            <option value="Human">Human</option>
            <option value="Specie">Specie</option>
          </select>
        </form>

    );

};

export default Filters;