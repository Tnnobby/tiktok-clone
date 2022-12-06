import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStack = {
  home: undefined;
  now: undefined;
  create: undefined;
  inbox: undefined;
  profile: undefined;
};

export type RootScreenProps<T extends keyof RootStack> = BottomTabScreenProps<
  RootStack,
  T
>;

export type HomeStack = {
  "for-you": undefined;
  following: undefined;
};

export type HomeScreenProps<T extends keyof HomeStack> = NativeStackScreenProps<
  HomeStack,
  T
>;
