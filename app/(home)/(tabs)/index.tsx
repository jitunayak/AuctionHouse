import { Button, Image, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { COLORS } from "@/theme/colors";
import { Screen, TextArea } from "@/components/ui";
import { SignedIn, SignedOut, useOAuth, useUser } from "@clerk/clerk-expo";

export default function HomeScreen() {
  return (
    <Screen
      style={{
        padding: 20,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TextArea size="largeTitle" style={{ fontWeight: "bold" }}>
        Auctions
      </TextArea>
      <Image
        source={require("@/assets/images/things.png")}
        style={{
          height: 280,
          aspectRatio: 1,
          resizeMode: "contain",
          alignSelf: "center",
          marginBottom: 260,
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
