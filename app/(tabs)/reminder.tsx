import { TextArea, VStack, Screen } from "@/components/ui";
import { COLORS } from "@/theme/colors";
import { Icon } from "@roninoss/icons";
import { FlashList } from "@shopify/flash-list";
import { View, Image, Platform } from "react-native";

export default function ReminderScreen() {
  const notifications = [
    {
      id: 1,
      title: "'Winter Wonderland' Auction",
      body: "This is the body of the notification 1",
      auctionDate: new Date("2024-12-20"),
      amount: 100,
    },
    {
      id: 2,
      title: "'Spring Fling' Auction",
      body: "This is the body of the notification 2",
      auctionDate: new Date("2025-02-22"),
      amount: 200,
    },
    {
      id: 3,
      title: "'Summer Lovin' Auction",
      body: "This is the body of the notification 3",
      auctionDate: new Date("2025-02-25"),
      amount: 300,
    },
  ];

  return (
    <Screen>
      <TextArea size="largeTitle" style={{ fontWeight: "bold" }}>
        Notifications
      </TextArea>
      <View
        style={{
          height: 20,
        }}
      />
      <FlashList
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              backgroundColor: COLORS.light.grey2,
              marginVertical: 8,
            }}
          />
        )}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                gap: 8,
                marginVertical: 8,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Icon name="bell" color={COLORS.light.grey} size={28} />
              <VStack gap={4}>
                <TextArea size="body">{item.title}</TextArea>
                <TextArea color="secondary" size="text">
                  {item.body}
                </TextArea>
                <TextArea size="text">
                  {item.auctionDate.toDateString()}
                </TextArea>
              </VStack>
              <View
                style={{
                  backgroundColor: COLORS.light.grey5,
                  padding: 8,
                  borderRadius: 4,
                }}
              >
                <TextArea size="heading">
                  {item.auctionDate.getDate().toString()}
                </TextArea>
              </View>
            </View>
          );
        }}
        data={notifications}
      />

      <Image
        source={require("@/assets/images/reminders.png")}
        style={{
          height: 250,
          width: "100%",
          aspectRatio: 1,
          resizeMode: "contain",
          alignSelf: "center",
          marginBottom: 120,
        }}
      />
    </Screen>
  );
}
