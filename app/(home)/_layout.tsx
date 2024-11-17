import { TextArea, Screen } from "@/components/ui";
import { useAuth } from "@clerk/clerk-expo";
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
