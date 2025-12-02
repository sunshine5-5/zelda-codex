import { View, Text } from "react-native";

export default function NotFoundScreen() {
  return (
    <View style={{ flex:1,justifyContent:"center",alignItems:"center" }}>
      <Text style={{ fontSize:40,fontWeight:"bold" }}>404</Text>
      <Text>Page non trouvée</Text>
    </View>
  );
}
