import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import IonIcon from "@expo/vector-icons/Ionicons";
import { useEffect } from "react";

type PauseOverlayProps = {
  playing: boolean;
};

export const PauseOverlay: React.FC<PauseOverlayProps> = ({ playing }) => {
  const playAnimate = useSharedValue<number>(0);

  useEffect(() => {
    if (playing) playAnimate.value = 0;
    else playAnimate.value = 1;
  }, [playing]);

  const animatedPlayStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(playAnimate.value * 0.8, { duration: 100 }),
      transform: [
        { scale: withTiming(1.4 - playAnimate.value * 0.4, { duration: 100 }) },
      ],
    };
  });
  return (
    <View style={styles.pauseOverlay} pointerEvents="none">
      <Animated.View style={[{ alignSelf: "center" }, animatedPlayStyle]}>
        <IonIcon name="play" size={48} style={{ color: "white" }} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  pauseOverlay: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
