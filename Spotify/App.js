import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DangNhap from './view/DangNhap'
import TrangChu from './view/TrangChu'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={DangNhap} name='DangNhap'/>
        <Stack.Screen component={TrangChu} name='TrangChu'/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

