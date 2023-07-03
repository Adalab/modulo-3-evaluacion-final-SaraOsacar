const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);

      const cleanData = data.results
        .map((objectAPI) => {
          return {
            id: objectAPI.id,
            image: objectAPI.image,
            name: objectAPI.name,
            species: objectAPI.species,
            origin: objectAPI.origin.name,
            episodes: objectAPI.episode.length,
            status: objectAPI.status,
          };
        })
      
        return cleanData;
        
    });
};

export default getDataFromApi;
