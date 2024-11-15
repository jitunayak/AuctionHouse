import { COLORS } from "@/theme/colors";
import { Text, TextProps } from "react-native";

const sizes = {
  largeTitle: 34,
  title: 28,
  heading: 22,
  body: 17,
  text: 14,
};

const colors = {
  primary: COLORS.black,
  secondary: COLORS.light.grey,
  accent: COLORS.light.primary,
  white: COLORS.light.background,
  black: COLORS.light.foreground,
};
type Props = {
  size?: keyof typeof sizes;
  color?: keyof typeof colors;
};
export const TextArea = (props: Props & TextProps) => {
  const { size, color, children, ...rest } = props;
  return (
    <Text
      {...rest}
      style={{
        fontSize: sizes[(props.size as keyof typeof size) ?? sizes.body],
        color: colors[(props.color as keyof typeof color) ?? colors.primary],
      }}
    >
      {props.children}
    </Text>
  );
};
