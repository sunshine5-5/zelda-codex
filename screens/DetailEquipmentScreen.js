import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import Header from "../components/Header";

export default function DetailEquipmentScreen({ navigation }) {

  const route = useRoute();
  const item = route.params?.item;

  return (
    <View style={{ flex: 1, backgroundColor: "#B6771D" }}>

      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={styles.container}>

        <Text style={styles.title}>{item.name}</Text>

        <Image 
          source={{ uri: item.image }}
          style={styles.bigImage}
        />

        <Text style={styles.desc}>{item.description}</Text>

        {item.properties?.attack && (
          <Text style={styles.stat}>
            Attaque : {item.properties.attack || "N/A"}   Défense : {item.properties.defense || "N/A"}
            </Text>

        )}
        {item.common_locations && (
          <Text style={styles.location}>
            Lieux : {item.common_locations.join(", ")}
          </Text>
        )}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15, paddingBottom: 40 },
  title: { fontSize: 24, fontWeight: "900", textAlign: "center", color: "white", marginBottom: 20, textTransform: "capitalize" },

  bigImage: {
    width: "80%",
    height: 250,
    alignSelf: "center",
    marginBottom: 20,
    resizeMode: "contain",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
  },

  desc: { fontSize: 16, marginBottom: 15, color: "white" },
  stat: { fontSize: 15, color: "#FFF", fontWeight: "700", marginBottom: 10 },
  location: { fontSize: 14, color: "#FFE4A1", fontStyle: "italic", marginTop: 10 },
});
