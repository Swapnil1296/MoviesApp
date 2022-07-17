import React, {useEffect} from 'react';
import axios from 'axios';
import {Chip} from '@mui/material';
const REACT_APP_API_KEY = '5b9c151b195617ae748ad318345d8cee';
const GenresTv = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${REACT_APP_API_KEY}&language=en-US`
    );
    // const res=JSON.stringify(data)
    console.log(data.genres);
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({}); // unmounting
    };
  }, []);

  return (
    <div style={{padding: '6px 0'}}>
      {selectedGenres &&
        selectedGenres.map((e) => (
          <Chip
            label={e.name}
            style={{margin: 2}}
            key={e.id}
            clickable
            color="primary"
            onClick={() => handleRemove(e)}
          />
        ))}
      {genres &&
        genres.map((e) => (
          <Chip
            label={e.name}
            style={{margin: 2}}
            key={e.id}
            clickable
            onClick={() => handleAdd(e)}
          />
        ))}
    </div>
  );
};

export default GenresTv;
