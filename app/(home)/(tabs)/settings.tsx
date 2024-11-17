import { TextArea } from "@/components/ui";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Image, Button } from "react-native";

export default function SettingsScreen() {
  const { signOut } = useAuth();
  const router = useRouter();
  const { isSignedIn } = useUser();
  useEffect(() => {
    if (!isSignedIn) {
      console.log("Sign in to see this screen");
      router.replace("/(tabs)");
    }
  }, [isSignedIn]);

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
      <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  );
}
