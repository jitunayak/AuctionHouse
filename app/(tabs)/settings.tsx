import { TextArea } from "@/components/ui";
import { View, Image } from "react-native";

export default function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 40,
        padding: 20,
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <TextArea size="largeTitle">Settings</TextArea>

      <Image
        source={require("@/assets/images/today.png")}
        style={{
          height: 280,
          aspectRatio: 1,
          resizeMode: "contain",
          alignSelf: "center",
          marginTop: 200,
        }}
      />
    </View>
  );
}
