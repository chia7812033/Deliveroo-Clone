import "react-native-url-polyfill/auto";

import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import RestaurantScreen from "./screens/RestaurantScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Restaurant' component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
