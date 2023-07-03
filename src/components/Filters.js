import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';

function Filters({ searchByName, searchBySpecies, handleFilter }) {
  return (
    <div>
      <FilterByName searchByName={searchByName} handleFilter={handleFilter} />
      <FilterBySpecies
        searchBySpecies={searchBySpecies}
        handlefilter={handleFilter}
      />
    </div>
  );
}

export default Filters;
