import { View } from "react-native";

export function Screen({ children }: { children: React.ReactNode }) {
  return (
    <View style={{ flex: 1, marginTop: 40, padding: 20 }}>{children}</View>
  );
}
