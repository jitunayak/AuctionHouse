import { Image, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { COLORS } from "@/theme/colors";
import { Screen, TextArea } from "@/components/ui";

export default function HomeScreen() {
  return (
    // <ParallaxScrollView
    //   headerBackgroundColor={{
    //     light: COLORS.light.background,
    //     dark: "#1D3D47",
    //   }}
    //   headerImage={
    //     <Image
    //       source={require("@/assets/images/partial-react-logo.png")}
    //       style={styles.reactLogo}
    //     />
    //   }
    // >
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
    // </ParallaxScrollView>
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
