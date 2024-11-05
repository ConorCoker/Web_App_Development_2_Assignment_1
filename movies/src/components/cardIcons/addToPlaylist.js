import React, { useContext } from "react";
import PlaylistIcon from "@mui/icons-material/PlaylistAdd";
import { Link } from "react-router-dom";
import { MoviesContext } from "../../contexts/moviesContext";
import { IconButton } from "@mui/material";

const AddToPlaylistIcon = ({ movie }) => {

    const context = useContext(MoviesContext);

    const handleAddToPlaylist = (e) => {
        e.preventDefault(); // Stops the link from immediately navigating
        context.addToPlaylist(movie)
    }

  return (
    <Link
      to={`/`}
      state={{
          movieId: movie.id,
      }}
    >
      <IconButton onClick={handleAddToPlaylist}>
      <PlaylistIcon color="primary" fontSize="large" />
      </IconButton>
    </Link>
  );
};

export default AddToPlaylistIcon;