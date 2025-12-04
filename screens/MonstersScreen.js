import { View, Text, ScrollView, TextInput, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import Header from "../components/Header";

export default function MonstersScreen({ navigation }) {

  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // FETCH API
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

  const filtered = monsters.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#B6771D" }}>
      
      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={styles.container}>
        
        <Text style={styles.title}>Liste des monstres du monde Zelda</Text>

        {/* SearchBar */}
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

        {/* LOADER */}
        {loading && <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} />}

        {/* LISTE DES MONSTRES */}
        {!loading && filtered.map((monster, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate("MonsterDetail", { monster })}
          >

            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{monster.name}</Text>
              <Text style={styles.cardText}>{monster.description}</Text>
              <Text style={styles.cardText}>
                Lieu : {monster.common_locations?.join(", ") || "Inconnu"}
              </Text>
            </View>

            <Image 
              source={{ uri: monster.image }}
              style={styles.cardImage}
            />

          </TouchableOpacity>
        ))}

        {!loading && filtered.length === 0 && (
          <Text style={styles.noResult}>Aucun monstre trouvé...</Text>
        )}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15, paddingBottom: 40 },

  title: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    marginBottom: 20,
    marginTop: 10,
  },

  // SearchBar
  searchContainer: {
    backgroundColor: "white",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 25,
  },
  searchIcon: { width: 22, height: 22, tintColor: "#444", marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16, color: "#333" },

  // Card
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },

  cardContent: { width: "60%" },
  cardTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 6 },
  cardText: { color: "#444", fontSize: 13, marginBottom: 2 },
  cardImage: { width: 80, height: 80, borderRadius: 10, resizeMode: "contain" },

  noResult: { marginTop: 20, textAlign: "center", color: "white", fontSize: 18, fontWeight: "bold" },
});
