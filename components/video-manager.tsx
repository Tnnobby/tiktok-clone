import { Video } from "expo-av";
import { useRef, useState } from "react";
import {
  LayoutChangeEvent,
  LayoutRectangle,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from "react-native";
import { FullScreenVideoPlayer } from "./video-player";
import {
  Gesture,
  GestureDetector,
  ScrollView,
} from "react-native-gesture-handler";

type VideoManagerProps = {
  videoList: string[];
};

export const VideoManager: React.FC<VideoManagerProps> = ({ videoList }) => {
  const [playing, setPlaying] = useState<boolean>(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
  const [layout, setLayout] = useState<LayoutRectangle>();

  const currentVideo = useRef<Video>();

  const tapGesture = Gesture.Tap()
    .runOnJS(true)
    .onEnd(() => {
      setPlaying(!playing);
    });

  const togglePlay = () => {
    setPlaying(!playing);
  };

  const next = () => {
    setPlaying(true)
    setCurrentVideoIndex((last) => last + 1)
  }
  const last = () => {
    setPlaying(true)
    setCurrentVideoIndex((last) => last - 1)
  }

  const scrollEndHandle = (ev: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (ev.nativeEvent.contentOffset.y > layout.height * currentVideoIndex) next()
    if (ev.nativeEvent.contentOffset.y < layout.height * currentVideoIndex) last()
  }

  const layoutHandle = (ev: LayoutChangeEvent) =>
    setLayout(ev.nativeEvent.layout);

  return (
    <View
      style={{ flex: 1, width: "100%", overflow: "hidden" }}
      onLayout={layoutHandle}
    >
      <GestureDetector gesture={tapGesture}>
        <ScrollView
          onLayout={(ev) => console.log("scrollview:", ev.nativeEvent.layout)}
          style={styles.videoFeed}
          pagingEnabled={true}
          onMomentumScrollEnd={scrollEndHandle}
        >
          {layout &&
            videoList.map((url, index) => {
              if (index === currentVideoIndex)
                return (
                  <FullScreenVideoPlayer
                    key={url}
                    ref={currentVideo}
                    shouldPlay={playing}
                    uri={url}
                    onLayout={(ev) =>
                      console.log("video", index, ev.nativeEvent.layout)
                    }
                    layout={layout}
                  />
                );
              return (
                <FullScreenVideoPlayer
                  key={url}
                  shouldPlay={false}
                  uri={url}
                  onLayout={(ev) =>
                    console.log("video", index, ev.nativeEvent.layout)
                  }
                  style={{ height: layout.height, width: layout.width }}
                  layout={layout}
                />
              );
            })}
        </ScrollView>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  
  videoFeed: {
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
});
