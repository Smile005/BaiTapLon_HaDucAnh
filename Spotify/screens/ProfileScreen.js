import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import { useRoute } from "@react-navigation/native";

const ProfileScreen = () => {
  const user = {
    name: "HaDucAnh",
    avatar: require('../assets/Gengar.png'),
    email: "haducanh1802@gmail.com"
  }

  const [userProfile, setUserProfile] = useState(user);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const renderData = async () => {
      const dataRender = await axios.get(`https://65573b3dbd4bcef8b6124a3b.mockapi.io/api/v1/playlist`)
      setPlaylists(dataRender.data)
      console.log(dataRender.data[0]);
    }
    renderData()
  }, [])

  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: 50 }}>
        <View style={{ padding: 12 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Image style={styles.img1} source={userProfile.avatar} />
            <View>
              <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
                {userProfile.name}
              </Text>
              <Text style={{ color: "gray", fontSize: 16, fontWeight: "bold" }}>
                {userProfile.email}
              </Text>
            </View>
          </View>
        </View>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "500", marginHorizontal: 12 }}>
          Your Playlists
        </Text>
        <View style={{ padding: 15 }}>
          {playlists.map((item, index) => (
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginVertical: 10 }}>
              <Image style={{ width: 50, height: 50, borderRadius: 4 }}
                source={{
                  uri: item?.avatar ||
                    "https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=800",
                }}
              />
              <View>
                <Text style={{ color: "white" }}>{item?.name}</Text>
                <Text style={{ color: "white", marginTop: 7 }}>{item?.followers} followers</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  img1: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: "cover"
  },
});