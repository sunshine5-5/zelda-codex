import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import favoritesReducer, { loadFavorites } from "./store/favoritesSlice";

import HomeScreen from "./screens/HomeScreen";
import MonstersScreen from "./screens/MonstersScreen";
import DetailMonsterScreen from "./screens/DetailMonsterScreen";
import EquipmentsScreen from "./screens/EquipmentsScreen";
import DetailEquipmentScreen from "./screens/DetailEquipmentScreen";
import TreasuresScreen from "./screens/TreasuresScreen";
import DetailTreasureScreen from "./screens/DetailTreasureScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import NotFoundScreen from "./screens/NotFoundScreen";

const Stack = createNativeStackNavigator();

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

// ⏳ Charger les favoris depuis AsyncStorage au démarrage
AsyncStorage.getItem("favorites").then(data => {
  if (data) {
    store.dispatch(loadFavorites(JSON.parse(data)));
  }
});

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          
          {/* 🏠 PAGE PRINCIPALE */}
          <Stack.Screen name="Home" component={HomeScreen} />

          {/* 👹 SECTION MONSTRES */}
          <Stack.Screen name="Monsters" component={MonstersScreen} />
          <Stack.Screen name="DetailMonster" component={DetailMonsterScreen} />

          {/* 🛡️ SECTION ÉQUIPEMENTS */}
          <Stack.Screen name="Equipments" component={EquipmentsScreen} />
          <Stack.Screen name="DetailEquipment" component={DetailEquipmentScreen} />

          {/* 💎 SECTION TRÉSORS */}
          <Stack.Screen name="Treasures" component={TreasuresScreen} />
          <Stack.Screen name="DetailTreasure" component={DetailTreasureScreen} />

          {/* ⭐ FAVORIS */}
          <Stack.Screen name="Favorites" component={FavoritesScreen} />

          {/* 🚫 404 */}
          <Stack.Screen name="NotFound" component={NotFoundScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
