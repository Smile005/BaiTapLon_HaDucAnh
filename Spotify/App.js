import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DangNhap from './screens/DangNhap'
import TrangChu from './screens/HomeScreen'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:true}}>
        <Stack.Screen component={DangNhap} name='DangNhap'/>
        {/* <Stack.Screen component={TrangChu} name='TrangChu'/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

