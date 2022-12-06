import { ResizeMode, Video, VideoProps } from "expo-av";
import { forwardRef, useRef } from "react";
import { LayoutRectangle, View } from "react-native";
import Animated from "react-native-reanimated";
import { PauseOverlay } from "./pause-overlay";

interface FullScreenVideoPlayerProps extends VideoProps {
  uri: string;
  shouldPlay: boolean;
  layout: LayoutRectangle;
}

export const FullScreenVideoPlayer = forwardRef<
  Video,
  FullScreenVideoPlayerProps
>(({ shouldPlay, uri, layout, ...props }, ref) => {
  return (
    <View style={{ height: layout.height, width: layout.width }}>
      <PauseOverlay playing={shouldPlay}/>
      <Video
        isLooping={true}
        source={{ uri }}
        shouldPlay={shouldPlay}
        style={{flex: 1}}
        onLoad={(ev) => null}
        onError={(err) => console.log("video error:", err)}
        resizeMode={ResizeMode.CONTAIN}
        ref={ref}
        {...props}
      />
    </View>
  );
});
