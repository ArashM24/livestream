import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/VideoCard.module.css";

const VideoCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className={styles.card}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className={styles.poster}
      />
      <div className={styles.cardContent}>
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
      </div>
    </Link>
  );
};

export default VideoCard;
