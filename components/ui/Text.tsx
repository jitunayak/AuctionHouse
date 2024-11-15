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
  medium: "500",
  regular: "400",
  light: "300",
  thin: "100",
  black: "900",
};

type Props = {
  size?: keyof typeof size;
  fontWeight?: keyof typeof fontWeight;
  children: React.ReactNode;
};
export default function TextArea(props: Props) {
  return (
    <Text
      style={{
        fontSize: size[props.size ?? "body"],
        fontWeight: props.fontWeight === "bold" ? "bold" : props.fontWeight,
      }}
    >
      {props.children}
    </Text>
  );
}
