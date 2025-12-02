import { View, Text, Image, ScrollView } from "react-native";
import Header from "../components/Header";
import global from "../styles/global";

export default function DetailMonsterScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <ScrollView style={global.page}>
        <Text style={global.title}>Les Monstres</Text>
        <View style={global.line}></View>
        <Image source={require("../assets/images/lizalfos.png")} style={global.image} />
        <Text style={global.label}>Lizalfos</Text>
        <Text style={global.description}>
          Créature reptilienne rapide et agressive.
        </Text>
      </ScrollView>
    </View>
  );
}
