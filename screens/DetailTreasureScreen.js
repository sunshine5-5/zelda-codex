import { View, Text, Image, ScrollView } from "react-native";
import Header from "../components/Header";
import global from "../styles/global";

export default function DetailTreasureScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <ScrollView style={global.page}>
        <Text style={global.title}>Trésor</Text>
        <View style={global.line}></View>
        <Image source={require("../assets/images/treasure.png")} style={global.image} />
        <Text style={global.description}>Coffre contenant des objets rares.</Text>
      </ScrollView>
    </View>
  );
}
