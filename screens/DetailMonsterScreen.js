import { View, Text, ScrollView, StyleSheet, Image, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import Header from "../components/Header";

export default function DetailMonsterScreen({ navigation }) {

  const [monsters, setMonsters] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================================
  // 🐉 1) FETCH API : tous les monstres
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

  return (
    <View style={{ flex: 1, backgroundColor: "#B6771D" }}>

      {/* NAVBAR */}
      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={styles.container}>

        <Text style={styles.title}>Tous les monstres du monde Zelda</Text>

        {/* Loader */}
        {loading && (
          <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} />
        )}

        {/* LISTE DES MONSTRES */}
        {!loading && monsters.map((monster, index) => (
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
    marginBottom: 20,
    marginTop: 10,
    fontWeight: "800",
  },

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
});
