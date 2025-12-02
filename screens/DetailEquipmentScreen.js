import { View, Text, Image, ScrollView } from "react-native";
import Header from "../components/Header";
import global from "../styles/global";

export default function DetailEquipmentScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <ScrollView style={global.page}>
        <Text style={global.title}>Équipement</Text>
        <View style={global.line}></View>
        <Image source={require("../assets/images/shield.png")} style={global.image} />
        <Text style={global.description}>Bouclier solide utilisé par les Hyliens.</Text>
      </ScrollView>
    </View>
  );
}
