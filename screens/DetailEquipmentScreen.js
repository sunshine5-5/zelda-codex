import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import Header from "../components/Header";

export default function DetailEquipmentScreen({ navigation }) {

  const route = useRoute();
  const item = route.params?.item;

  return (
    <View style={styles.screen}>

      {/* 🌟 NAVBAR FIXE */}
      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={styles.container}>

        {/* ⭐ NOM DE L’ÉQUIPEMENT */}
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subTitle}>Arme / Armure légendaire</Text>

        {/* 💎 CADRE DORÉ FANTASY */}
        <View style={styles.imageBox}>
          <Image 
            source={{ uri: item.image }}
            style={styles.bigImage}
          />
        </View>

        {/* 📜 Description */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📜 Description</Text>
          <Text style={styles.desc}>{item.description}</Text>
        </View>

        {/* ⚔️ Statistiques */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>⚔️ Caractéristiques</Text>

          <Text style={styles.stat}>
            Attaque : {item.properties?.attack || "0"}
          </Text>

          <Text style={styles.stat}>
            Défense : {item.properties?.defense || "0"}
          </Text>

          <Text style={styles.statSmall}>
            Une arme forgée pour les héros de la légende ✨
          </Text>
        </View>

        {/* 📍 Lieux */}
        {item.common_locations && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>📍 Lieux trouvables</Text>
            <Text style={styles.location}>
              {item.common_locations.join(" • ")}
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
    fontWeight: "900",
    textAlign: "center",
    color: "#FFF7D6",
    textTransform: "capitalize",
    textShadowColor: "#5A3E00",
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 10,
    marginTop: 10,
  },

  subTitle: {
    fontSize: 15,
    color: "#FFE49A",
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: 15,
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
    width: 250,
    height: 250,
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
    fontWeight: "900",
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
    fontSize: 15,
    fontWeight: "700",
    color: "#FFF",
    marginBottom: 4,
  },

  statSmall: {
    fontSize: 13,
    color: "#EFEFEF",
    fontStyle: "italic",
  },

  location: {
    fontSize: 15,
    fontStyle: "italic",
    color: "#FFEAB0",
  },
});
