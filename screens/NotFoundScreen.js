import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../components/Header";

export default function NotFoundScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      {/* NAVBAR */}
      <Header navigation={navigation} />

      {/* CONTENU */}
      <View style={styles.content}>
        <Text style={styles.code}>404</Text>
        <Text style={styles.message}>Link est perdu</Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Retour</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B6771D",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },
  code: {
    fontSize: 130,
    fontWeight: "900",
    color: "rgba(0,0,0,0.4)",
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#FFCF71",
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
  },
  buttonText: {
    color: "#2E2100",
    fontSize: 16,
    fontWeight: "800",
  },
});
