import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import Header from "../components/Header";

export default function DetailMonsterScreen({ navigation }) {

  const route = useRoute();
  const monster = route.params?.monster;

  // 🛑 Sécurité pour éviter les crash
  if (!monster) {
    return (
      <View style={{ flex: 1, backgroundColor: "#B6771D" }}>
        <Header navigation={navigation} />
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 18 }}>
            Aucun monstre sélectionné...
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>

      {/* 🌟 NAVBAR */}
      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={styles.container}>
        
        {/* ⭐ NOM */}
        <Text style={styles.title}>{monster.name}</Text>
        <Text style={styles.subTitle}>Créature légendaire</Text>

        {/* 💎 IMAGE ENCADRÉE */}
        <View style={styles.imageBox}>
          <Image 
            source={{ uri: monster.image }}
            style={styles.bigImage}
          />
        </View>

        {/* 📜 DESCRIPTION */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📜 Description</Text>
          <Text style={styles.desc}>{monster.description}</Text>
        </View>

        {/* 🗺️ Lieux */}
        {monster.common_locations && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>📍 Lieux rencontrés</Text>
            <Text style={styles.location}>
              {monster.common_locations.join(" • ")}
            </Text>
          </View>
        )}

        {/* ⚔️ Butins / Danger */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>⚔️ Danger potentiel</Text>

          {monster.drops && monster.drops.length > 0 ? (
            <Text style={styles.stat}>Unités lâchées : {monster.drops.join(" | ")}</Text>
          ) : (
            <Text style={styles.stat}>Ce monstre ne lâche rien d’utile…</Text>
          )}

          <Text style={styles.statSmall}>
            Soyez prêt avant d’engager le combat 🛡️
          </Text>
        </View>

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
    textShadowColor: "#6E4C00",
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

  /* 📜 PARCHEMIN */
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
