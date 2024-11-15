import { COLORS } from "@/theme/colors";
import { Text } from "react-native";

const size = {
  largeTitle: 34,
  title: 28,
  heading: 22,
  body: 17,
  text: 14,
};

const fontWeight = {
  bold: "700",
  medium: "600",
  regular: "500",
  light: "400",
  thin: "300",
  black: "800",
};

const color = {
  primary: COLORS.black,
  secondary: COLORS.light.grey,
  accent: COLORS.light.primary,
  white: COLORS.light.background,
  black: COLORS.light.foreground,
};
type Props = {
  size?: keyof typeof size;
  fontWeight?: keyof typeof fontWeight;
  color?: keyof typeof color;
  children: React.ReactNode;
};
export default function TextArea(props: Props) {
  return (
    <Text
      style={{
        fontSize: size[props.size ?? "body"],
        fontWeight: props.fontWeight === "bold" ? "bold" : props.fontWeight,
        color: props.color ?? color.primary,
      }}
    >
      {props.children}
    </Text>
  );
}
