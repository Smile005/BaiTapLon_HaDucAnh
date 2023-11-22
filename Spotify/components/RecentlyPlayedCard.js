import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const RecentlyPlayedCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("Info", {item: item,})} 
        style={{ margin: 10 }}
    >
      <Image style={styles.img} source={{ uri: item.track.album.images[0].url }}/>
      <Text numberOfLines={1} style={styles.text}>{item?.track?.name}</Text>
    </Pressable>
  );
};

export default RecentlyPlayedCard;

const styles = StyleSheet.create({
    img:{ 
        width: 130, 
        height: 130, 
        borderRadius: 5 },
    text: {
        fontSize: 13,
        fontWeight: "500",
        color: "white",
        marginTop: 10,
      }
});