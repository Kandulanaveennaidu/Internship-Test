import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import ShowList from './components/ShowList';

const App = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (query) => {
    setLoading(true);
    setError(null);

    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    handleSearch('all');
  }, []);

  return (
    <div className="app">
      <h1>TV Show Search</h1>
      <SearchForm handleSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && shows.length === 0 && (
        <p>No shows found. Try a different search term.</p>
      )}
      {!loading && !error && shows.length > 0 && (
        <ShowList shows={shows} />
      )}
    </div>
  );
};

export default App;
