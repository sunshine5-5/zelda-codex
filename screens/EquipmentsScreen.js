import { View, Text, ScrollView } from "react-native";
import Header from "../components/Header";
import global from "../styles/global";

export default function EquipmentsScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <ScrollView style={global.page}>
        <Text style={global.title}>Équipements</Text>
        <View style={global.line}></View>
      </ScrollView>
    </View>
  );
}
