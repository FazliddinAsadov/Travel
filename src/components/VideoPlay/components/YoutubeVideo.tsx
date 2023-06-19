import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

const YoutubeVideo = () => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const link = "https://www.youtube.com/watch?v=ut4a_c5lo1g";
  const opts: YouTubeProps["opts"] = {
    height: "600px",
    width: "100%",
    playerVars: {
      link,
      autoplay: 1,
    },
  };

  return <YouTube videoId="ut4a_c5lo1g" opts={opts} onReady={onPlayerReady} />;
};
export default YoutubeVideo;
