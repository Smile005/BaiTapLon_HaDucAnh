import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React ,{useEffect} from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo, MaterialIcons, AntDesign } from "@expo/vector-icons";
import * as AppAuth from "expo-app-auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const checkTokenValidity = async () => {
      const accessToken = await AsyncStorage.getItem("token");
      const expirationDate = await AsyncStorage.getItem("expirationDate");
      console.log("acess token",accessToken);
      console.log("expiration date",expirationDate);

      if(accessToken && expirationDate){
        const currentTime = Date.now();
        if(currentTime < parseInt(expirationDate)){
          // here the token is still valid
          navigation.replace("Main");
        } else {
          // token would be expired so we need to remove it from the async storage
          AsyncStorage.removeItem("token");
          AsyncStorage.removeItem("expirationDate");
        }
      }
    }

    checkTokenValidity();
  },[])

  async function authenticate ()  {
    const config = {
      issuer:"https://accounts.spotify.com",
      clientId:"2c2dce73f533485984b512ea50c3ac9c",
      scopes: [
        "user-read-email",
        "user-library-read",
        "user-read-recently-played",
        "user-top-read",
        "playlist-read-private",
        "playlist-read-collaborative",
        "playlist-modify-public" // or "playlist-modify-private"
      ],
      redirectUrl:"http://localhost:19006/"
    }

    const result = await AppAuth.authAsync(config);

    console.log(result);
    
    if(result.accessToken){
      const expirationDate = new Date(result.accessTokenExpirationDate).getTime();
      AsyncStorage.setItem("token",result.accessToken);
      AsyncStorage.setItem("expirationDate",expirationDate.toString());
      navigation.navigate("Main")
    }
  }
  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <SafeAreaView>
        <View style={{ height: 80 }} />
        <Entypo style={{ textAlign: "center" }} name="spotify" size={80} color="#1DB954" />
        <Text style={styles.header}>Millions of Songs Free on spotify!</Text>
        <View style={{ height: 80 }} />

        <Pressable  onPress={authenticate} style={styles.button1}>
          <Text>Sign In with spotify</Text>
        </Pressable>

        <Pressable style={styles.button2}>
          <MaterialIcons name="phone-android" size={24} color="white" />
          <Text style={styles.text1}>Continue with phone number</Text>
        </Pressable>

        <Pressable style={styles.button2}>
          <AntDesign name="google" size={24} color="red" />
          <Text style={styles.text1}>Continue with Google</Text>
        </Pressable>

        <Pressable style={styles.button2}>
          <Entypo name="facebook" size={24} color="blue" />
          <Text style={styles.text1}>Sign In with facebook</Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  header: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40
  },
  button1: {
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
  button2: {
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
    fontWeight: "500",
    color: "white",
    textAlign: "center",
    flex: 1
  }
})