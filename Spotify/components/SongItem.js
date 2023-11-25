import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SongItem = ({ item }) => {
  const nav = useNavigation()
  const isPlaying = false

  return (
    <View style={styles.press1} >
      <Pressable style={{ width: "90%", flexDirection: 'row' }}
        onPress={() => nav.navigate("Info", {
          item: item
        })}>
        <Image style={styles.img1} source={{ uri: item?.picture }} />
        <View style={{ flex: 1 }}>
          <Text numberOfLines={1} style={isPlaying ? styles.textPlay : styles.textStop}>{item?.name}</Text>
          <Text style={{ marginTop: 4, color: "#989898" }}>{item?.artist}</Text>
        </View>
      </Pressable>

      <View style={styles.view1}>
        <AntDesign name="heart" size={24} color="#1DB954" />
        <Entypo name="dots-three-vertical" size={24} color="#C0C0C0" />
      </View>
    </View>
  );
};

export default SongItem;

const styles = StyleSheet.create({
  press1: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  img1: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    marginHorizontal: 10,
  },
  textPlay: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#3FFF00"
  },
  textStop: {
    fontWeight: "bold",
    fontSize: 14,
    color: "white"
  }
});
