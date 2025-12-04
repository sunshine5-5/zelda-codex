import { View, Text, ScrollView, TextInput, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import Header from "../components/Header";

export default function TreasuresScreen({ navigation }) {

  const [treasures, setTreasures] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials")
      .then(res => res.json())
      .then(data => {
        setTreasures(data.data);
        setLoading(false);
      })
      .catch(err => {
        console.log("Erreur API :", err);
        setLoading(false);
      });
  }, []);

  const filtered = treasures.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#B6771D" }}>
      
      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={styles.container}>
        
        <Text style={styles.title}>Tous les trésors & matériaux</Text>

        {/* SearchBar */}
        <View style={styles.searchContainer}>
          <Image 
            source={require("../assets/icons/search.png")} 
            style={styles.searchIcon} 
          />

          <TextInput
            placeholder="Rechercher un trésor..."
            placeholderTextColor="#626262"
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {loading && <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} />}

        {!loading && filtered.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate("TreasureDetail", { item })}
          >
            <Image 
              source={{ uri: item.image }}
              style={styles.image}
            />

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.desc}>{item.description}</Text>

              {item.cooking_effect && (
                <Text style={styles.stat}>Effet : {item.cooking_effect}</Text>
              )}
            </View>

          </TouchableOpacity>
        ))}

        {!loading && filtered.length === 0 && (
          <Text style={styles.noResult}>Aucun trésor trouvé...</Text>
        )}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15, paddingBottom: 40 },

  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "white",
    textAlign: "center",
    marginBottom: 15,
    marginTop: 10,
  },

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

  image: { width: 90, height: 90, borderRadius: 10, marginRight: 10, resizeMode: "contain" },
  info: { flex: 1 },
  name: { fontSize: 18, fontWeight: "bold", marginBottom: 6, textTransform: "capitalize" },
  desc: { color: "#444", fontSize: 13, marginBottom: 4 },
  stat: { fontSize: 12, fontWeight: "600", color: "#333" },

  noResult: { textAlign: "center", marginTop: 20, color: "white", fontSize: 18, fontWeight: "bold" }
});
