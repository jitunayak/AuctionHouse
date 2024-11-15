import { View, ViewProps } from "react-native";

export const Screen = (props: ViewProps) => {
  const { children, style, ...rest } = props;
  return (
    <View
      style={{
        flex: 1,
        marginTop: 50,
        padding: 20,
        ...(style && typeof style === "object" ? style : {}),
      }}
    >
      {children}
    </View>
  );
};
