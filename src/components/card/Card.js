import React, { useState, useEffect } from "react";
import axios from "axios";

const api_key = "7f4f7f19cab58d3e19984c9e7d8ba5d8";
const base_URL = "https://api.themoviedb.org/3/movie";
const imgURL = "https://image.tmdb.org/t/p/original";
const titlePopular = "Upcoming movies";
const titleTopRated = "Top Rated"
const popular = "popular";
const upcoming = "upcoming";
const topRated = "top_rated"
const titleUpcoming = "Upcoming"
 

const Card = () => {
  // const [error, setError] = useState(false);
  const [results, setResults] = useState([]);

  const [topRateds, setTopRateds] = useState([]);
  const [upcomings, setUpcomings] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      const { data } = await axios.get(
        `${base_URL}/${popular}?api_key=${api_key}&language=en-US&page=1`
      );
      setResults(data.results);
      // console.log(data);
    };

    const topRatedData = async () => {
        const { data } = await axios.get(
          `${base_URL}/${topRated}?api_key=${api_key}&language=en-US&page=1`
        );
        setTopRateds(data.results);
        // console.log(data);
      };

      const upcomingData = async () => {
        const { data } = await axios.get(
          `${base_URL}/${upcoming}?api_key=${api_key}&language=en-US&page=1`
        );
        setUpcomings(data.results);
        // console.log(data);
      };

      fetchPopular();
    topRatedData();
    upcomingData();
  }, []);

  return (
    <>
    <div className="popular">
    <h3 className="title">{titlePopular}</h3>
      <div className="card-container">
        {results.map((item) => (
          <div key={item.id} className="card">
            <img
              className="card-poster"
              src={`${imgURL}/${item.poster_path}`}
              alt="img"
            />
            <h5>{item.title}</h5>
            <h6>Release Date: {item.release_date}</h6>
          </div>
        ))}
      </div>
    </div>


    <div className="top-rated">
    <h3 className="title">{titleTopRated}</h3>
      <div className="card-container">
        {topRateds.map((item) => (
          <div key={item.id} className="card">
            <img
              className="card-poster"
              src={`${imgURL}/${item.poster_path}`}
              alt="img"
            />
            <h5>{item.title}</h5>
            <h6>Release Date: {item.release_date}</h6>
          </div>
        ))}
      </div>
    </div>


    <div className="top-rated">
    <h3 className="title">{titleUpcoming}</h3>
      <div className="card-container">
        {upcomings.map((item) => (
          <div key={item.id} className="card">
            <img
              className="card-poster"
              src={`${imgURL}/${item.poster_path}`}
              alt="img"
            />
            <h5>{item.title}</h5>
            <h6>Release Date: {item.release_date}</h6>
          </div>
        ))}
      </div>
    </div>
     
    </>
  );
};

export default Card;
