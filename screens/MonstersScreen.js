import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import Header from "../components/Header";
import global from "../styles/global";

export default function MonstersScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <Header navigation={navigation} />

      <ScrollView style={global.page}>
        
        {/* Titre */}
        <Text style={styles.title}>la liste des monstres du monde Zelda</Text>

        {/* Barre de recherche */}
        <TextInput
          placeholder="Chercher les monstres, les trésors, équipements..."
          placeholderTextColor="#626262"
          style={styles.searchBar}
        />

        {/* BOX 1 — Exemple Bokoblins */}
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Bokoblins</Text>
            <Text style={styles.cardText}>Type : monstre faible</Text>
            <Text style={styles.cardText}>Comportement : agressif</Text>
            <Text style={styles.cardText}>Habitat : plaines, forêts</Text>
            <Text style={styles.cardText}>Attaque : armes basiques</Text>
            <Text style={styles.cardText}>Force : faible à moyenne</Text>
          </View>
          <View style={styles.cardImagePlaceholder} />
        </View>

        {/* BOX 2 — Exemple Lizalfos */}
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Lizalfos</Text>
            <Text style={styles.cardText}>Type : reptilien</Text>
            <Text style={styles.cardText}>Comportement : agressif</Text>
            <Text style={styles.cardText}>Habitat : zones humides</Text>
            <Text style={styles.cardText}>Attaque : langue + armes</Text>
            <Text style={styles.cardText}>Force : moyenne</Text>
          </View>
          <View style={styles.cardImagePlaceholder} />
        </View>

        {/* BOX 3 — Exemple Chuchus */}
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Chuchus</Text>
            <Text style={styles.cardText}>Type : gluant</Text>
            <Text style={styles.cardText}>Comportement : attaque proche</Text>
            <Text style={styles.cardText}>Habitat : forêts / grottes</Text>
            <Text style={styles.cardText}>Attaque : explosion élémentaire</Text>
            <Text style={styles.cardText}>Force : faible</Text>
          </View>
          <View style={styles.cardImagePlaceholder} />
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    marginBottom: 20,
    marginTop: 10,
  },

  searchBar: {
    backgroundColor: "#F2F2F2",
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 25,
    fontSize: 20
    ,
  },

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

  cardContent: {
    width: "60%",
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },

  cardText: {
    color: "#444",
    fontSize: 13,
    marginBottom: 2,
  },

  // TEMPORAIRE — emplacement des images
  cardImagePlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: "#DDDDDD",
    borderRadius: 10,
  },
});
