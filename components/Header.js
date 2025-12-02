import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../styles/colors";

export default function Header({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/icons/logo.png")} style={styles.logo} />
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image source={require("../assets/icons/menu.png")} style={styles.menu} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:70,
    backgroundColor:"#E8C16C",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:20},

  logo:{width:60,height:60,resizeMode:"contain"},
  menu:{width:25,height:25}
});
