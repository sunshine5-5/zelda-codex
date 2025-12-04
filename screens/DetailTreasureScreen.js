import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import Header from "../components/Header";

export default function DetailTreasureScreen({ navigation }) {

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

        {item.cooking_effect && (
          <Text style={styles.stat}>Effet de cuisson : {item.cooking_effect}</Text>
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

  title: {
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
    color: "white",
    marginBottom: 20,
    textTransform: "capitalize",
  },

  bigImage: {
    width: "80%",
    height: 250,
    resizeMode: "contain",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },

  desc: { fontSize: 16, color: "white", marginBottom: 10 },

  stat: { fontSize: 15, color: "#FFF", marginBottom: 10, fontWeight: "700" },

  location: { fontSize: 14, fontStyle: "italic", color: "#FFE49A", marginTop: 10 },
});
