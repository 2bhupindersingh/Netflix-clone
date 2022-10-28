import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./card/Card";

const api_key = "7f4f7f19cab58d3e19984c9e7d8ba5d8";
const base_URL = "https://api.themoviedb.org/3/genre/movie";
const list = "list";
const Home = () => {
  const [genresResults, setGenresResults] = useState([]);
  useEffect(() => {
    const fetchGenre = async () => {
      const { data } = await axios.get(
        `${base_URL}/${list}?api_key=${api_key}&language=en-US`
      );
      setGenresResults(data.genres);
      console.log(data);
    };
    fetchGenre();
  }, []);

  return (
    <div>
      <Card />
      <div className="genres">
        {genresResults.map((genres) => (
          <div className="columns" key={genres.id}>
            {genres.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
