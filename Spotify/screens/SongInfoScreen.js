import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, AntDesign, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

const SongInfoScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.params.item);
  
  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: 50 }}>
        <View style={{ flexDirection: "row", padding: 12 }}>
          <Ionicons name="arrow-back" size={24} color="white"
            onPress={() => navigation.goBack()}
          />
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image style={{ width: 200, height: 200 }}
              source={{ uri: route?.params?.item?.picture }}
            />
          </View>
        </View>
        <Text style={styles.text1}>{route?.params?.item?.name}</Text>
        <View style={styles.view1}>
            <Text style={{ color: "#909090", fontSize: 13, fontWeight: "500" }}>{route?.params?.item?.artist}</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SongInfoScreen;

const styles = StyleSheet.create({
  text1: {
    color: "white",
    marginHorizontal: 12,
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  view1: {
    marginHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 10,
    gap: 7,
  },
  press1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  press2: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#1DB954",
    justifyContent: "center",
    alignItems: "center",
  },
  press3: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1DB954",
  },
});

