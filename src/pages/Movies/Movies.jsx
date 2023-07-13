import { useState } from 'react';
import EditorList from 'pages/EditorList/EditorList';
import Form from 'components/Form/Form';
import { fetchSearchByKeyword } from 'services/TmbdApi';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  
  const [noMoviesText, setNoMoviesText] = useState(false);

  const searchMovies = queryMovie => {
    

    fetchSearchByKeyword(queryMovie)
      .then(searchResults => {
        setSearchFilms(searchResults);
        setNoMoviesText(searchResults.length === 0);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        
      });
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
