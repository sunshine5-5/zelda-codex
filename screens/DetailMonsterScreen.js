  import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import Header from "../components/Header";

export default function DetailMonsterScreen({ navigation }) {

  const route = useRoute();
  const monster = route.params?.monster;

  return (
    <View style={{ flex: 1, backgroundColor: "#B6771D" }}>
      
      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={styles.container}>
        
        <Text style={styles.title}>{monster.name}</Text>

        <Image 
          source={{ uri: monster.image }}
          style={styles.imageBig}
        />

        <Text style={styles.desc}>{monster.description}</Text>

        <Text style={styles.location}>
          Lieux : {monster.common_locations?.join(", ") || "Inconnu"}
        </Text>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15, paddingBottom: 40 },

  title: {
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
    color: "white",
    marginBottom: 20,
    textTransform: "capitalize",
  },

  imageBig: {
    width: "80%",
    height: 260,
    alignSelf: "center",
    borderRadius: 15,
    marginBottom: 20,
    resizeMode: "contain",
    backgroundColor: "white",
    padding: 10,
  },

  desc: {
    fontSize: 15,
    color: "white",
    marginBottom: 10,
    textAlign: "justify",
  },

  location: {
    fontSize: 14,
    color: "#FFE49A",
    fontStyle: "italic",
  },
});
