import { createContext, useState } from "react";

type VideoContextType = {
  videos: string[];
  addVideo: (uri: string) => void;
};
export const VideoContext = createContext<VideoContextType>({ videos: [], addVideo: () => null });

export const VideoContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [videoList, setVideoList] = useState([
    "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  ])

  const addVideo = (uri: string) => {
    console.log('adding', uri)
    setVideoList((prev) => [...prev, uri])
  }

  return (
    <VideoContext.Provider
      value={{
        videos: videoList,
        addVideo
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
