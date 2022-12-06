import { ParamListBase, useNavigation } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { useEffect, useMemo } from "react";
import {
  HomeScreenHeader,
  HomeScreenHeaderTab,
} from "../components/home-screen-header";
import { Page } from "../components/Page";
import { FollowingScreen } from "../screens/home/following";
import { ForYouScreen } from "../screens/home/for-you";
import { HomeStack, RootScreenProps } from "./routes";

type HomeScreenProps = RootScreenProps<"home">;

const HomeTabs = createNativeStackNavigator<HomeStack>();

export const homeNavTabsList: (
  navigation: NativeStackNavigationProp<ParamListBase>
) => HomeScreenHeaderTab[] = (navigation) => [
  {
    label: "Following",
    routeName: "following",
    onPress: () => navigation.navigate("following"),
  },
  {
    label: "For You",
    routeName: "for-you",
    onPress: () => navigation.navigate("for-you"),
  },
];

export const HomeRouter = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  // TODO : This typing is kind of hacky, if it works great, but maybe come back and figure out how to properly type this
  const tabs = useMemo(() => homeNavTabsList(navigation), [navigation]);

  return (
    <>
      <HomeScreenHeader active={"for-you"} tabs={tabs} />
      <HomeTabs.Navigator
        initialRouteName="for-you"
        screenOptions={{
          headerShown: false,
          navigationBarColor: "black",
          navigationBarHidden: false,
        }}
      >
        <HomeTabs.Screen
          name="following"
          component={FollowingScreen}
          options={{ animation: "slide_from_left" }}
        />
        <HomeTabs.Screen
          name="for-you"
          component={ForYouScreen}
          options={{ animation: "slide_from_right" }}
        />
      </HomeTabs.Navigator>
    </>
  );
};
