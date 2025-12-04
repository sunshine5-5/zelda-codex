import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import Header from "../components/Header";

export default function DetailTreasureScreen({ navigation }) {
  const route = useRoute();
  const item = route.params?.item;

  return (
    <View style={styles.screen}>

      {/* 🌟 NAVBAR FIXE */}
      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={styles.container}>

        {/* ⭐ TITRE */}
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subTitle}>〽 Trésor légendaire 〽</Text>


        {/* 💎 IMAGE DANS UN CADRE ORNEMENTAL */}
        <View style={styles.imageBox}>
          <Image 
            source={{ uri: item.image }}
            style={styles.bigImage}
          />
        </View>

        {/* 📜 Description sur parchemin */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📜 Description</Text>
          <Text style={styles.desc}>{item.description}</Text>
        </View>

        {/* ✨ Effet spécial */}
        {item.cooking_effect && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>✨ Pouvoir alchimique</Text>
            <Text style={styles.stat}>{item.cooking_effect}</Text>
          </View>
        )}

        {/* 📍 Lieux trouvables */}
        {item.common_locations && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>📍 Lieux trouvables</Text>
            <Text style={styles.location}>
              {item.common_locations.join(", ")}
            </Text>
          </View>
        )}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#B6771D",
  },

  container: {
    padding: 20,
    paddingBottom: 70,
    alignItems: "center",
  },

  /* 🌟 TITRES */
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF7D6",
    textAlign: "center",
    textTransform: "capitalize",
    textShadowColor: "#5A3E00",
    textShadowRadius: 8,
    textShadowOffset: { width: 0, height: 3 },
    marginTop: 15,
  },

  subTitle: {
    fontSize: 14,
    color: "#FFE49A",
    textAlign: "center",
    marginBottom: 10,
    fontStyle: "italic",
  },

  
  symbol: {
    fontSize: 18,
    color: "#FFD466",
    fontWeight: "900",
  },

  /* 💎 CADRE OR */
  imageBox: {
    backgroundColor: "#FFF0D1",
    borderRadius: 25,
    padding: 18,
    borderWidth: 4,
    borderColor: "#E7C873",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 10,
    marginBottom: 25,
  },

  bigImage: {
    width: 220,
    height: 220,
    resizeMode: "contain",
  },

  /* 📜 CARTE PARCHEMIN */
  card: {
    width: "95%",
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 18,
    padding: 15,
    marginBottom: 18,
    borderWidth: 2,
    borderColor: "#FFD466",
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#FFF",
    marginBottom: 8,
  },

  desc: {
    fontSize: 15,
    color: "#FFF",
    lineHeight: 22,
    textAlign: "justify",
  },

  stat: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFF",
  },

  location: {
    fontSize: 15,
    fontStyle: "italic",
    color: "#FFEAB0",
  },
});
