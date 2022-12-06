import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import {
  BottomTabDescriptor,
  BottomTabDescriptorMap,
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { useMemo } from "react";
import { Pressable, View, StatusBar } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";

interface MappableDescriptor extends BottomTabDescriptor {
  key: string;
}

export const renderTabBar = ({
  descriptors,
  insets,
  navigation,
  state,
}: BottomTabBarProps) => {
  return (
    <TabBar
      descriptors={descriptors}
      activeIndex={state.index}
      insets={insets}
    />
  );
};

type TabBarProps = {
  descriptors: BottomTabDescriptorMap;
  activeIndex: number;
  insets: EdgeInsets;
};

const TabBar: React.FC<TabBarProps> = ({
  descriptors,
  activeIndex,
  insets,
}) => {
  const descriptorMap: MappableDescriptor[] = useMemo(() => {
    let _returnVal: MappableDescriptor[] = [];

    for (const _key in descriptors) {
      _returnVal.push({ key: _key, ...descriptors[_key] });
    }

    return _returnVal;
  }, [descriptors]);
  return (
    <View
      style={{
        backgroundColor: "black",
        height: 50,
        paddingTop: 5,
        flexDirection: "row",
        marginBottom: insets.bottom,
        borderTopColor: 'rgba(255, 255, 255, 0.3)',
        borderTopWidth: 0.5
      }}
    >
      <StatusBar 
        barStyle={activeIndex === 0 ? 'light-content' : 'dark-content'}
      />
      {descriptorMap.map((descriptor, index) => (
        <Tab
          key={descriptor.key}
          options={descriptor.options}
          route={descriptor.route}
          navigation={descriptor.navigation}
          focused={index === activeIndex}
        />
      ))}
    </View>
  );
};

type TabProps = {
  options: BottomTabNavigationOptions;
  focused: boolean;
  route: RouteProp<ParamListBase>;
  navigation: BottomTabNavigationProp<ParamListBase>;
};

const Tab: React.FC<TabProps> = ({ options, focused, navigation, route }) => {
  const { tabBarIcon, tabBarLabel } = options;

  const pressHandle = () => {
    navigation.navigate(route);
  };

  return (
    <Pressable
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
      onPress={pressHandle}
    >
      <>
        {tabBarIcon({ color: "white", focused, size: 22 })}
        {typeof tabBarLabel === "function" &&
          tabBarLabel({ focused, color: "white", position: "below-icon" })}
      </>
    </Pressable>
  );
};
