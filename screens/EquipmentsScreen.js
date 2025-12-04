import { View, Text, ScrollView, TextInput, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import Header from "../components/Header";

export default function EquipmentsScreen({ navigation }) {

  const [equipments, setEquipments] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment")
      .then(res => res.json())
      .then(data => {
        setEquipments(data.data);
        setLoading(false);
      })
      .catch(err => {
        console.log("Erreur API :", err);
        setLoading(false);
      });
  }, []);

  const filtered = equipments.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#B6771D" }}>

      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={styles.container}>
        
        <Text style={styles.title}>Tous les équipements</Text>

        <View style={styles.searchContainer}>
          <Image 
            source={require("../assets/icons/search.png")} 
            style={styles.searchIcon} 
          />

          <TextInput
            placeholder="Rechercher un équipement..."
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
            onPress={() => navigation.navigate("EquipmentDetail", { item })}
          >
            <Image 
              source={{ uri: item.image }}
              style={styles.image}
            />

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.desc}>{item.description}</Text>

              {item.properties && (
                <Text style={styles.stat}>
                  Attaque : {item.properties.attack || "N/A"}  
                  {"   "}Défense : {item.properties.defense || "N/A"}
                </Text>
              )}
            </View>

          </TouchableOpacity>
        ))}

        {!loading && filtered.length === 0 && (
          <Text style={styles.noResult}>Aucun équipement trouvé...</Text>
        )}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15, paddingBottom: 40 },
  title: { fontSize: 22, textAlign: "center", color: "white", marginBottom: 20, marginTop: 10, fontWeight: "800" },

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
  desc: { color: "#444", fontSize: 13, marginBottom: 6 },
  stat: { fontSize: 12, color: "#333", marginTop: 5, fontWeight: "600" },

  noResult: { marginTop: 20, textAlign: "center", color: "white", fontSize: 18, fontWeight: "bold" },
});
