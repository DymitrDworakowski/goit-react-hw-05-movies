import { useEffect, useState } from 'react';
import EditorList from 'components/EditorList/EditorList';
import Form from 'components/Form/Form';
import { fetchSearchByKeyword } from 'services/TmbdApi';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  
  const [noMoviesText, setNoMoviesText] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams()
  
  const query = searchParams.get('query')
 useEffect(() => {
  if (!query) return;

  fetchSearchByKeyword(query)
    .then(searchResults => {
      setSearchFilms(searchResults);
      setNoMoviesText(searchResults.length === 0);
    })
    .catch(error => {
      console.log(error);
    });
}, [query]);


  const searchMovies = queryMovie => {
    setSearchParams({ query: queryMovie });

    
  };

  return (
    <main>
      <Form searchMovies={searchMovies} />
      
      {noMoviesText && (
        <p>There is no movies with this request. Please, try again</p>
      )}
      {searchFilms && <EditorList films={searchFilms} />}
    </main>
  );
};

export default Movies;
