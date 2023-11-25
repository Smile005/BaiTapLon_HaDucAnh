import { ActivityIndicator, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View, } from "react-native";
import React, { useState, useEffect, useContext, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, AntDesign, Feather, FontAwesome, Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import SongItem from "../components/SongItem";

const LikedSongsScreen = () => {
  const colors = ["#27374D", "#1D267D", "#BE5A83", "#212A3E", "#917FB3", "#37306B", "#443C68", "#5B8FB9", "#144272",]

  const navigation = useNavigation()
  const route = useRoute()
  const [text, onChangeText] = useState('')
  const [likedSong, setLikedSong] = useState([])

  useEffect(() => {
    fetch("https://65573b3dbd4bcef8b6124a3b.mockapi.io/api/v1/song")
      .then((reponse) => reponse.json())
      .then((json) => {
        var newarr = json.filter((item) => {
          return item.liked == true
        })
        setLikedSong(newarr)
        console.log(newarr[0])
      })
  }, [])

  return (
    <>
      <LinearGradient colors={["#614385", "#516395"]} style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, marginTop: 50 }}>
          <Pressable style={{ marginHorizontal: 10 }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>

          <Pressable style={styles.press1}>
            <Pressable style={styles.press2}>
              <AntDesign name="search1" size={20} color="white" />
              <TextInput style={{ fontWeight: "500", color: "white" }}
                placeholder="Find in Liked songs"
                placeholderTextColor={"white"}
                onChangeText={onChangeText}
                value={text}
              />
            </Pressable>

            <Pressable style={styles.press3}>
              <Text style={{ color: "white" }}>Sort</Text>
            </Pressable>
          </Pressable>

          <View style={{ height: 50 }} />
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>Liked Songs</Text>
            <Text style={{ color: "white", fontSize: 13, marginTop: 5 }}>120 songs</Text>
          </View>

          <Pressable style={styles.press1}>
            <Pressable style={styles.press4}>
              <AntDesign name="arrowdown" size={20} color="white" />
            </Pressable>

            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Ionicons name="add" size={50} color="#1DB954" />
              <Pressable style={styles.press5}
              // onPress={}
              >
                <Entypo name="controller-play" size={24} color="white" />
              </Pressable>
            </View>
          </Pressable>

          <FlatList data={likedSong}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <SongItem item={item} />}
          />
        </ScrollView>
      </LinearGradient>
    </>
  );
};

export default LikedSongsScreen;

const styles = StyleSheet.create({
  progressbar: {
    height: "100%",
    backgroundColor: "white",
  },
  press1: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 9,
  },
  press2: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#42275a",
    padding: 9,
    flex: 1,
    borderRadius: 3,
    height: 38,
  },
  press3: {
    marginHorizontal: 10,
    backgroundColor: "#42275a",
    padding: 10,
    borderRadius: 3,
    height: 38,
  },
  press4: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#1DB954",
    justifyContent: "center",
    alignItems: "center",
  },
  press5: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1DB954",
  },
});