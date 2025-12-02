import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import MonstersScreen from "../screens/MonstersScreen";
import TreasuresScreen from "../screens/TreasuresScreen";
import EquipmentsScreen from "../screens/EquipmentsScreen";

import DetailMonsterScreen from "../screens/DetailMonsterScreen";
import DetailTreasureScreen from "../screens/DetailTreasureScreen";
import DetailEquipmentScreen from "../screens/DetailEquipmentScreen";

import NotFoundScreen from "../screens/NotFoundScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Monsters" component={MonstersScreen} />
        <Stack.Screen name="Treasures" component={TreasuresScreen} />
        <Stack.Screen name="Equipments" component={EquipmentsScreen} />
        <Stack.Screen name="MonsterDetail" component={DetailMonsterScreen} />
        <Stack.Screen name="TreasureDetail" component={DetailTreasureScreen} />
        <Stack.Screen name="EquipmentDetail" component={DetailEquipmentScreen} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
