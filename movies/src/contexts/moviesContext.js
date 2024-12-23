import React, { useState, useEffect } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [playlists, setPlaylists] = useState([]);

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

  useEffect(() => {
    console.log(playlists.map((it) => it));
  }, [playlists]); // This runs whenever `playlists` changes

  const addToPlaylist = (movie) => {
    let newPlaylists = []
    if (!playlists.includes(movie.id)) {
      newPlaylists = [...playlists, movie.id];
    }
    else {
      newPlaylists = [...playlists]
    }
    setPlaylists(newPlaylists)
  }

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  
  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const removeFromPlaylist = (movie) => {
    setPlaylists( playlists.filter(
      (mId) => mId !== movie.id
    ) )
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        playlists,
        addToPlaylist,
        addReview,
        removeFromPlaylist
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;