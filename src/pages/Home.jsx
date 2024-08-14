import React, { useEffect, useState } from "react";
import { fetchMovies } from "../services/api";
import VideoCard from "../components/VideoCard";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };
    getMovies();
  }, []);

  return (
    <div className={styles.home}>
      <h1>Popular Movies</h1>
      <div className={styles.videoGrid}>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
