import { StyleSheet, Text, View, ScrollView, Image, Pressable, FlatList, } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import ArtistCard from "../components/ArtistCard";
import RecentlyPlayedCard from "../components/RecentlyPlayedCard";
import { useNavigation, useRoute } from "@react-navigation/native";

const HomeScreen = () => {
    const artist = [
        {
          "name": "Alicia",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/877.jpg",
        },
        {
          "name": "Ressie",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/799.jpg",
        },
        {
          "name": "Dallas",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/199.jpg",
        },
        {
          "name": "Athena",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/102.jpg",
        },
        {
          "name": "Ramona",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/597.jpg",
        },
        {
          "name": "Emelia",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/886.jpg",
        },
        {
          "name": "Rogers",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/619.jpg",
        },
        {
          "name": "Deon",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/747.jpg",
        },
        {
          "name": "Bryana",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/767.jpg",
        },
        {
          "name": "Gaston",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/525.jpg",
        }
      ]

    const nav = useNavigation()
    const rou = useRoute()
    const [recentlyplayed, setRecentlyPlayed] = useState([]);
    const [topArtists, setTopArtists] = useState(artist);

    useEffect(() => {
        const renderData = async () => {
            const dataRender = await axios.get(`https://65573b3dbd4bcef8b6124a3b.mockapi.io/api/v1/song`)
            setRecentlyPlayed(dataRender.data)
            console.log(dataRender.data[0]);
        }
        renderData()
    }, [])

    const greetingMessage = () => {
        const currentTime = new Date().getHours();
        if (currentTime < 12) {
            return "Good Morning";
        } else if (currentTime < 16) {
            return "Good Afternoon";
        } else {
            return "Good Evening";
        }
    };
    const message = greetingMessage();

    return (
        <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
            <ScrollView style={{ marginTop: 50 }}>
                <View style={styles.view1}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={styles.img1} source={require('../assets/Gengar.png')} />
                        <Text style={styles.text1}>{message}</Text>
                    </View>

                    <MaterialCommunityIcons name="lightning-bolt-outline" size={24} color="white" />
                </View>

                <View style={styles.view2}>
                    <Pressable style={styles.press1}>
                        <Text style={{ fontSize: 15, color: "white" }}>Music</Text>
                    </Pressable>

                    <Pressable style={styles.press1}>
                        <Text style={{ fontSize: 15, color: "white" }}>Podcasts & Shows</Text>
                    </Pressable>
                </View>

                <View style={{ height: 10 }} />

                <View style={styles.view3}>
                    <Pressable style={styles.press2}
                        onPress={() => { nav.navigate("Liked") }}
                    >
                        <LinearGradient colors={["#33006F", "#FFFFFF"]}>
                            <Pressable style={styles.press3}>
                                <AntDesign name="heart" size={24} color="white" />
                            </Pressable>
                        </LinearGradient>
                        <Text style={styles.text2}>Liked Songs</Text>
                    </Pressable>
                    <View style={styles.view3}>
                        <Image style={{ width: 55, height: 55 }} source={{ uri: "https://i.pravatar.cc/100" }} />
                        <View>
                            <Text style={styles.text2}>Sơn Tùng MTP</Text>
                        </View>
                    </View>
                </View>
                <View style={{ height: 10 }} />
                <View style={styles.view3}>
                    <View style={styles.view3}>
                        <Image style={{ width: 55, height: 55 }} source={{ uri: "https://i.pravatar.cc/101" }} />
                        <View>
                            <Text style={styles.text2}>Sơn Tùng MTP</Text>
                        </View>
                    </View>
                    <View style={styles.view3}>
                        <Image style={{ width: 55, height: 55 }} source={{ uri: "https://i.pravatar.cc/103" }} />
                        <View>
                            <Text style={styles.text2}>Sơn Tùng MTP</Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.text3}>Your Top Artists</Text>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {topArtists.map((item, index) => (
                        <ArtistCard item={item} key={index} />
                    ))}
                </ScrollView>

                <View style={{ height: 10 }} />
                <Text style={styles.text3}>Recently Played</Text>

                <FlatList
                    data={recentlyplayed}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <RecentlyPlayedCard item={item} key={index} />
                    )}
                />
            </ScrollView>
        </LinearGradient>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    view1: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    view2: {
        marginHorizontal: 12,
        marginVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    view3: {
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 8,
        backgroundColor: "#202020",
        borderRadius: 4,
        elevation: 3,
    },
    img1: {
        width: 40,
        height: 40,
        borderRadius: 20,
        resizeMode: "cover",
    },
    text1: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    text2: {
        color: "white",
        fontSize: 13,
        fontWeight: "bold"
    },
    text3: {
        color: "white",
        fontSize: 19,
        fontWeight: "bold",
        marginHorizontal: 10,
        marginTop: 10,
    },
    press1: {
        backgroundColor: "#282828",
        padding: 10,
        borderRadius: 30,
    },
    press2: {
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 8,
        backgroundColor: "#202020",
        borderRadius: 4,
        elevation: 3,
    },
    press3: {
        width: 55,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
    }
})