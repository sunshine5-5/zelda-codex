import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useState } from "react";

export default function Header({ navigation }) {
  const [open, setOpen] = useState(false);

  return (
    <View>
      {/* Top bar */}
      <View style={styles.container}>
        <Image 
          source={require("../assets/icons/logo.png")} 
          style={styles.logo} 
        />

        {/* Bouton menu */}
        <TouchableOpacity onPress={() => setOpen(!open)}>
          <Image 
            source={require("../assets/icons/menu.png")} 
            style={styles.menu}
          />
        </TouchableOpacity>
      </View>

      {/* Menu déroulant simple */}
      {open && (
        <View style={styles.dropdown}>
          <TouchableOpacity onPress={() => { setOpen(false); navigation.navigate("Home"); }}>
            <Text style={styles.link}>Accueil</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { setOpen(false); navigation.navigate("Monsters"); }}>
            <Text style={styles.link}>Les monstres</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { setOpen(false); navigation.navigate("Equipments"); }}>
            <Text style={styles.link}>Les équipements</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { setOpen(false); navigation.navigate("Treasures"); }}>
            <Text style={styles.link}>Les trésors</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:110,
    backgroundColor:"#FFCF71",
    justifyContent:"flex-end",
    alignItems:"center",
    flexDirection:"row",
    paddingHorizontal:20,
    paddingBottom:10,

    shadowColor:"#000",
    shadowOpacity:0.2,
    shadowOffset:{ width:0, height:3 },
    elevation:5,
  },

  logo:{
    width:60,
    height:60,
    resizeMode:"contain",
    marginRight:"auto",
  },

  menu:{
    width:28,
    height:28,
  },

  dropdown:{
    backgroundColor:"#FFCF71",
    paddingVertical:15,
    paddingHorizontal:20,
  },

  link:{
    fontSize:18,
    fontWeight:"700",
    color:"#3A2A00",
    marginBottom:12,
  }
});
