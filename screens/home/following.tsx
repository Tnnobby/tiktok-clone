import { Page } from "../../components/Page";
import { VideoManager } from "../../components/video-manager";
import { FullScreenVideoPlayer } from "../../components/video-player";
import { useVideos } from "../../hooks/useVideos";
import { HomeScreenProps } from "../../routes/routes";

type FollowingScreenProps = HomeScreenProps<"following">;

const sampleVideos = [
  'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
]

export const FollowingScreen: React.FC<FollowingScreenProps> = ({
  navigation,
  route,
}) => {
  const { videos } = useVideos()

  return (
    <Page
      style={{
        backgroundColor: "black",
        alignItems: "flex-end",
        justifyContent: "flex-end",
      }}
    >
      <VideoManager videoList={videos}/>
    </Page>
  );
};
