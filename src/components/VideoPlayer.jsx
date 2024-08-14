import React from "react";
import styles from "../styles/VideoPlayer.module.css";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className={styles.videoPlayer}>
      <iframe
        src={videoUrl}
        className={styles.video}
        allow="autoplay; encrypted-media"
        allowFullScreen
        frameBorder="0"
        title="Video Player"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;


