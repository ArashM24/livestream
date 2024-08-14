// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { fetchMovieDetails } from "../services/api";
// import VideoPlayer from "../components/VideoPlayer";
// import styles from "../styles/MovieDetails.module.css";

// const MovieDetails = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     const getMovieDetails = async () => {
//       const data = await fetchMovieDetails(id);
//       setMovie(data);
//     };
//     getMovieDetails();
//   }, [id]);

//   if (!movie) return <p>Loading...</p>;

//   return (
//     <div className={styles.movieDetails}>
//       <h1>{movie.title}</h1>
//       <p>{movie.overview}</p>
//       <VideoPlayer videoUrl="path/to/video.mp4" />
//     </div>
//   );
// };

// export default MovieDetails;

import React from "react";
import VideoPlayer from "../components/VideoPlayer";

const MovieDetails = () => {
  const videoUrl = "https://www.youtube.com/embed/21X5lGlDOfg"; // NASA Live Stream

  return (
    <div>
      <h1>Live Stream</h1>
      <p>Enjoy the live stream from NASA!</p>

      <VideoPlayer videoUrl={videoUrl} />
    </div>
  );
};

export default MovieDetails;
