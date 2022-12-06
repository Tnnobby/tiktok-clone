import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

interface PageProps extends SafeAreaViewProps {
  children: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({ children, style, ...props }) => {
  return (
    <SafeAreaView style={[style, {flex: 1}]} mode='padding' edges={['left', 'right', 'top']} {...props}>
      {children}
    </SafeAreaView>
  );
};
