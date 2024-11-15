import { Screen } from "@/components/Screen";
import TextArea from "@/components/ui/Text";
import { COLORS } from "@/theme/colors";
import { Icon } from "@roninoss/icons";
import { FlashList } from "@shopify/flash-list";
import { View, Text } from "react-native";

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
      <TextArea size="largeTitle" fontWeight="bold">
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
              <View
                style={{
                  gap: 4,
                }}
              >
                <TextArea fontWeight="medium">{item.title}</TextArea>
                <TextArea color="secondary" size="text">
                  {item.body}
                </TextArea>
                <TextArea size="text">
                  {item.auctionDate.toDateString()}
                </TextArea>
              </View>
              <View
                style={{
                  backgroundColor: COLORS.light.grey5,
                  padding: 8,
                  borderRadius: 4,
                }}
              >
                <TextArea fontWeight="medium" size="heading">
                  {item.auctionDate.getDate()}
                </TextArea>
              </View>
            </View>
          );
        }}
        data={notifications}
      />
      ;
    </Screen>
  );
}
