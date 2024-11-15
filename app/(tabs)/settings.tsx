import { View } from "react-native";
import Text from "./../../components/ui/Text";

export default function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 50,
        padding: 20,
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Text size="largeTitle" fontWeight="bold">
        Settings
      </Text>
    </View>
  );
}
