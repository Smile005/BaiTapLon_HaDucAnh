import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, AntDesign, Ionicons  } from '@expo/vector-icons';
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createBottomTabNavigator();

function ButtonTabs() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    headerShown: false,
                    tabBarLabelStyle: 'white',
                    tabBarIcon: ({ focused }) =>
                        focused ? (<Entypo name="home" size={24} color="black" />) 
                                : (<AntDesign name="home" size={24} color="black" />)
                }} 
            />
           <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Home',
                    headerShown: false,
                    tabBarLabelStyle: 'white',
                    tabBarIcon: ({ focused }) =>
                        focused ? (<Ionicons name="person" size={24} color="black" />) 
                                : (<Ionicons name="person-outline" size={24} color="black" />)
                }} 
            />
        </Stack.Navigator>
    )
}