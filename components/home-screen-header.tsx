import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderTab } from "./header-tab";

export type HomeScreenHeaderTab = {
  label: string;
  routeName: string;
  onPress: () => void;
};

type HomeScreenHeaderProps = {
  tabs: HomeScreenHeaderTab[];
  active: string;
};

export const HomeScreenHeader: React.FC<HomeScreenHeaderProps> = ({
  tabs,
  active,
}) => (
  <SafeAreaView
    style={styles.header}
    onLayout={(ev) => console.log(ev.nativeEvent.layout)}
    mode="padding"
  >
    <View style={{ flexDirection: "row" }}>
      {tabs.map((tab, index) => (
        <HeaderTab
          key={tab.routeName}
          style={{ marginHorizontal: 10 }}
          active={active === tab.routeName}
          label={tab.label}
          onPress={tab.onPress}
        />
      ))}
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    position: "absolute",
    zIndex: 100,
    width: "100%",
  },
});
