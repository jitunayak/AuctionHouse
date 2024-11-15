import { Tabs } from "expo-router";
import React from "react";
import { Platform, View } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { COLORS } from "@/theme/colors";
import { Icon } from "@roninoss/icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarVariant: Platform.select({
          ios: "uikit",
          android: "material",
        }),
        tabBarButton: HapticTab,
        tabBarBackground: () => (
          <View
            style={{
              backgroundColor: COLORS.light.primary,
            }}
          />
        ),
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            borderTopWidth: 0,
            margin: 20,
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Icon
              size={28}
              name="heart"
              color={focused ? COLORS.light.primary : COLORS.light.grey}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused }) => (
            <Icon
              size={28}
              name="calendar-month"
              color={focused ? COLORS.light.primary : COLORS.light.grey}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="reminder"
        options={{
          title: "Notifications",
          tabBarIcon: ({ focused }) => (
            <Icon
              size={28}
              name="bell"
              color={focused ? COLORS.light.primary : COLORS.light.grey}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <Icon
              size={28}
              name="cog"
              ios={{
                name: "gear",
              }}
              color={focused ? COLORS.light.primary : COLORS.light.grey}
            />
          ),
        }}
      />
    </Tabs>
  );
}
