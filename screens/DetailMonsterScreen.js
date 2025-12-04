import { View, Text, ScrollView, StyleSheet, Image, ActivityIndicator, TextInput } from "react-native";
import { useState, useEffect } from "react";
import Header from "../components/Header";

export default function DetailMonsterScreen({ navigation }) {

  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // ================================
  // 🐉 FETCH API : tous les monstres
  // ================================
  useEffect(() => {
    fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters")
      .then(res => res.json())
      .then(data => {
        setMonsters(data.data);
        setLoading(false);
      })
      .catch(err => {
        console.log("Erreur API :", err);
        setLoading(false);
      });
  }, []);

  // ================================
  // 🔍 Filtrage des monstres
  // ================================
  const filteredMonsters = monsters.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#B6771D" }}>

      {/* NAVBAR FIXE */}
      <Header navigation={navigation} />

      {/* CONTENU SCROLL SEULEMENT */}
      <ScrollView contentContainerStyle={styles.container}>

        <Text style={styles.title}>Tous les monstres du monde Zelda</Text>

        {/* 🔍 SEARCHBAR */}
        <View style={styles.searchContainer}>
          <Image 
            source={require("../assets/icons/search.png")} 
            style={styles.searchIcon} 
          />
          <TextInput
            placeholder="Chercher un monstre..."
            placeholderTextColor="#626262"
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* ⏳ LOADER */}
        {loading && (
          <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} />
        )}

        {/* LISTE FILTRÉE DES MONSTRES */}
        {!loading && filteredMonsters.map((monster, index) => (
          <View key={index} style={styles.card}>

            <Image 
              source={{ uri: monster.image }}
              style={styles.image}
            />

            <View style={styles.info}>
              <Text style={styles.name}>{monster.name}</Text>
              <Text style={styles.desc}>{monster.description}</Text>
              <Text style={styles.location}>
                Lieux : {monster.common_locations?.join(", ") || "Inconnu"}
              </Text>
            </View>

          </View>
        ))}

        {/* Aucun résultat */}
        {!loading && filteredMonsters.length === 0 && (
          <Text style={styles.noResult}>Aucun monstre trouvé...</Text>
        )}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 40,
  },

  title: {
    fontSize: 22,
    textAlign: "center",
    color: "white",
    marginBottom: 10,
    marginTop: 10,
    fontWeight: "800",
  },

  /* 🔎 SearchBar */
  searchContainer: {
    backgroundColor: "white",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 20,
  },

  searchIcon: {
    width: 22,
    height: 22,
    tintColor: "#444",
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },

  /* 📦 Card */
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 10,
    resizeMode: "contain",
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
    textTransform: "capitalize",
  },

  desc: {
    color: "#444",
    fontSize: 13,
    marginBottom: 6,
  },

  location: {
    fontSize: 12,
    color: "#555",
    fontStyle: "italic",
  },

  noResult: {
    marginTop: 20,
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
