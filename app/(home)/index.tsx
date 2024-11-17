import { TextArea, Screen, HStack, VStack } from "@/components/ui";
import { useUser, useOAuth } from "@clerk/clerk-expo";
import { EvilIcons } from "@expo/vector-icons";
import { Icon } from "@roninoss/icons";
import { useRouter } from "expo-router";
import { Button, TouchableOpacity, Image } from "react-native";

export default function RootLayout() {
  const user = useUser();
  const router = useRouter();
  const { startOAuthFlow: startGithubOAuthFlow } = useOAuth({
    strategy: "oauth_github",
  });

  const handleGithubSignIn = async () => {
    try {
      const { createdSessionId, setActive, authSessionResult } =
        await startGithubOAuthFlow();
      console.log({ createdSessionId, authSessionResult });
      if (createdSessionId) {
        setActive!({ session: createdSessionId });
        router.replace("/(tabs)");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Screen
      style={{
        padding: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <VStack>
        <TextArea
          size="largeTitle"
          style={{ fontWeight: "bold", marginTop: 100 }}
        >
          Auction House
        </TextArea>
        <TextArea
          size="text"
          style={{ marginTop: 20, textAlign: "center" }}
          color="secondary"
        >
          Welcome to the Auction House
        </TextArea>
      </VStack>
      <Image
        source={require("@/assets/images/today.png")}
        style={{
          width: "100%",
          height: 260,
          resizeMode: "contain",
          marginTop: 30,
        }}
      />
      <TouchableOpacity
        style={{
          marginBottom: 100,
          paddingHorizontal: 40,
          paddingVertical: 10,
          backgroundColor: "black",
          borderRadius: 10,
          width: "100%",
        }}
        onPress={() => handleGithubSignIn()}
      >
        <HStack alignItems="center" justifyContent="center">
          <EvilIcons name="sc-github" size={32} color="white" />
          <TextArea
            size="body"
            color="white"
            style={{ marginLeft: 10, fontWeight: "600" }}
          >
            Sign In with Github
          </TextArea>
        </HStack>
      </TouchableOpacity>
    </Screen>
  );
}
