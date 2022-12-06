import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonIcons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { RootStack } from "./routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HomeRouter } from "./home";
import { Platform, Text } from "react-native";
import { NowScreen } from "../screens/root/now";
import { CreateScreen } from "../screens/root/create";
import { InboxScreen } from "../screens/root/inbox";
import { ProfileScreen } from "../screens/root/profile";
import React from "react";
import { renderTabBar } from "../components/tab-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { VideoContextProvider } from "../context/video-context";

const RootRouter = createBottomTabNavigator<RootStack>();

type IconLibrary = typeof IonIcons | typeof MaterialCommunityIcons;

export const Router = () => {
  console.log("Platform Version:", Platform.Version);
  return (
    <SafeAreaProvider>
      <VideoContextProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <RootRouter.Navigator
              screenOptions={({ route }) => {
                return {
                  tabBarIcon: ({ color, focused, size }) => {
                    let iconName: any;
                    let Library: IconLibrary;

                    switch (route.name) {
                      case "home":
                        Library = IonIcons;
                        iconName = focused ? "home-sharp" : "home-outline";
                        break;
                      case "create":
                        Library = MaterialCommunityIcons;
                        iconName = focused
                          ? "plus-circle"
                          : "plus-circle-outline";
                        break;
                      case "inbox":
                        Library = MaterialCommunityIcons;
                        iconName = focused ? "inbox" : "inbox-outline";
                        break;
                      case "now":
                        Library = MaterialCommunityIcons;
                        iconName = focused
                          ? "lightning-bolt"
                          : "lightning-bolt-outline";
                        break;
                      case "profile":
                        Library = IonIcons;
                        iconName = focused ? "person" : "person-outline";
                        break;
                      default:
                        break;
                    }

                    return (
                      <Library
                        name={iconName}
                        size={size}
                        color={"white"}
                        style={{ color }}
                      />
                    );
                  },
                  headerShown: false,
                  tabBarLabel: ({ color }) => (
                    <Text style={{ fontSize: 10, paddingBottom: 2, color }}>
                      {[
                        route.name[0].toUpperCase(),
                        ...route.name.substring(1),
                      ].join("")}
                    </Text>
                  ),
                  tabBarInactiveBackgroundColor: "black",
                };
              }}
              initialRouteName="home"
              tabBar={renderTabBar}
            >
              <RootRouter.Screen name="home" component={HomeRouter} />
              <RootRouter.Screen name="now" component={NowScreen} />
              <RootRouter.Screen name="create" component={CreateScreen} />
              <RootRouter.Screen name="inbox" component={InboxScreen} />
              <RootRouter.Screen name="profile" component={ProfileScreen} />
            </RootRouter.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </VideoContextProvider>
    </SafeAreaProvider>
  );
};
