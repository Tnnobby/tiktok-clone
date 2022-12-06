import { useRef } from "react";
import { Pressable, Text, TextInput } from "react-native";
import { Page } from "../../components/Page";
import { useVideos } from "../../hooks/useVideos";

export const ProfileScreen = () => {
  const { addVideo } = useVideos();
  const inputVal = useRef<string>('');

  const submitHandle = () => {
    if (inputVal.current === '') return;
    addVideo(inputVal.current)
  };

  return (
    <Page>
      <TextInput
        style={{
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "black",
          marginHorizontal: 10,
          paddingHorizontal: 10,
        }}
        onChangeText={(val) => inputVal.current = val}
      />
      <Pressable
        style={{
          marginLeft: 10,
          marginTop: 10,
          paddingHorizontal: 10,
          paddingVertical: 5,
          backgroundColor: "lightblue",
          alignSelf: "center",
          borderRadius: 5,
          borderWidth: 0.5
        }}
        onPress={submitHandle}
      >
        <Text>Add Video</Text>
      </Pressable>
    </Page>
  );
};
