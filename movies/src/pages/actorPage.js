import React from "react";
import { getPopularPeople } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from "../components/spinner";
import ActorCard from "../components/actorCard/actorCard";
import { useNavigate } from "react-router-dom";

const ActorPage = () => {

const {data,error,isError,isLoading} = useQuery("pop-people",getPopularPeople)
const navigate = useNavigate();

if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  const onActorMovieClicked = (id) => {
    console.log('Selected Movie ID:', id);
    navigate(`/movies/${id}`);
  };

  return(
    <div style={{display:`flex`, gap:`20px`, flexWrap: 'wrap' }}>
    {actors.map(element => (
        <ActorCard key={element.id} person={element} handleMovieClick={onActorMovieClicked}></ActorCard>
    )
  )}
  </div>
  )
};

export default ActorPage;