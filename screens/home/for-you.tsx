import { Text, View } from "react-native";
import { HomeScreenHeader } from "../../components/home-screen-header";
import { Page } from "../../components/Page";
// import { HomeNavTabsList } from "../../routes/home";
import { HomeScreenProps } from "../../routes/routes";

type ForYouScreenProps = HomeScreenProps<'for-you'>

export const ForYouScreen: React.FC<ForYouScreenProps> = ({navigation, route}) => {
  console.log('for-you')
  return (
    <Page style={{ backgroundColor: "black" }}>
      {/* <HomeScreenHeader active={0} tabs={HomeNavTabsList(navigation)}/> */}
      <Text style={{ alignSelf: "center" }}>For You Screen</Text>
    </Page>
  );
};
