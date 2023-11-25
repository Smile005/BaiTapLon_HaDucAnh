import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const RecentlyPlayedCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <Pressable style={{ margin: 10 }}
      onPress={() => navigation.navigate("Info", {
        item: item
      })}
    >
      <Image style={styles.img} source={{ uri: item.picture }} />
      <Text numberOfLines={1} style={styles.text}>{item.name}</Text>
    </Pressable>
  );
};

export default RecentlyPlayedCard;

const styles = StyleSheet.create({
  img: {
    width: 130,
    height: 130,
    borderRadius: 5
  },
  text: {
    fontSize: 13,
    fontWeight: "500",
    color: "white",
    marginTop: 10,
  }
});
