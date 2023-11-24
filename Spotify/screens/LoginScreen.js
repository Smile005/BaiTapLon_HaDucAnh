import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    const nav = useNavigation()
    return (
        <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
            <SafeAreaView>
                <View style={{ height: 80 }} />
                <Entypo style={{ textAlign: "center" }} name="spotify" size={80} color="#1DB954" />
                <Text style={styles.text1}>Millions of Songs Free on spotify!</Text>

                <View style={{ height: 80 }} />
                <Pressable style={styles.press1}
                    onPress={() => { nav.navigate("Main") }}
                >
                    <Text style={{ fontWeight: 500 }}>Sign In with spotify</Text>
                </Pressable>

                <Pressable style={styles.press2}>
                    <MaterialIcons name="phone-android" size={24} color="white" />
                    <Text style={styles.text2}>Continue with phone number</Text>
                </Pressable>

                <Pressable style={styles.press2}>
                    <AntDesign name="google" size={24} color="red" />
                    <Text style={{ fontWeight: "500", color: "white", textAlign: "center", flex: 1 }}>Continue with Google</Text>
                </Pressable>

                <Pressable style={styles.press2}>
                    <Entypo name="facebook" size={24} color="blue" />
                    <Text style={{ fontWeight: "500", color: "white", textAlign: "center", flex: 1 }}>Sign In with facebook</Text>
                </Pressable>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    press1: {
        backgroundColor: "#1DB954",
        padding: 10,
        marginLeft: "auto",
        marginRight: "auto",
        width: 300,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10
    },
    press2: {
        backgroundColor: "#131624",
        padding: 10,
        marginLeft: "auto",
        marginRight: "auto",
        width: 300,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        borderColor: "#C0C0C0",
        borderWidth: 0.8
    },
    text1: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 40,
    },
    text2: {
        fontWeight: "500",
        color: "white",
        textAlign: "center",
        flex: 1
    }
})