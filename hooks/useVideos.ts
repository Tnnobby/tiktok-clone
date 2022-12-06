import { useContext } from "react";
import { VideoContext } from "../context/video-context";

export const useVideos = () => {
  const videos = useContext(VideoContext);

  return videos;
};
