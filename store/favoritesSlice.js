import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      const exists = state.find(item => item.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
        AsyncStorage.setItem("favorites", JSON.stringify(state));
      }
    },
    removeFavorite: (state, action) => {
      const updated = state.filter(item => item.id !== action.payload.id);
      AsyncStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    },
    loadFavorites: (_, action) => action.payload,
  },
});

export const { addFavorite, removeFavorite, loadFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
