import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../styles/colors";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Image de Link agrandie */}
      <Image 
        source={require("../assets/images/link.png")} 
        style={styles.img} 
      />

      {/* Titre principal */}
      <Text style={styles.title}>Zelda Codex</Text>

      
      
        <Text style={styles.introText}>
          Vous pouvez connaître le type de trésors, d'équipements et de monstres du monde Zelda.
        </Text>
      

      {/* Bouton d'entrée */}
      <TouchableOpacity 
        style={styles.btn} 
        onPress={() => navigation.navigate("Monsters")}
      >
        <Text style={styles.btnText}>Entrer</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:20,
    backgroundColor:"#E8C16C", // Fond doré clair
  },

  // 🔥 IMAGE PLUS GRANDE + SHADOW
  img:{
    width:300,
    height:300,
    resizeMode:"contain",
    marginBottom:10,
    shadowColor:"#000",
    shadowOpacity:0.25,
    shadowOffset:{ width:0, height:6 },
    shadowRadius:10,
  },

  title:{
    fontSize:34,
    fontWeight:"900",
    color:"#2E2100",
    textShadowColor:"#C89235",
    textShadowOffset:{ width:1, height:1 },
    textShadowRadius:3,
    marginBottom:10,
  },

  introBox:{
    backgroundColor:"#F1D9A9",
    padding:15,
    borderRadius:12,
    borderWidth:2,
    borderColor:"#C89235",
    shadowColor:"#000",
    shadowOpacity:0.18,
    shadowOffset:{width:0,height:3},
    width:"90%",
    marginBottom:20,
  },

  introText:{
    fontSize:16,
    textAlign:"center",
    color:"#2E2100",
    lineHeight:22,
    fontWeight:"600",
  },

  btn:{
    backgroundColor:"#73AF6F",
    paddingVertical:14,
    paddingHorizontal:40,
    borderRadius:12,
    shadowColor:"#000",
    shadowOpacity:0.25,
    shadowOffset:{ width:10, height:14 },
    marginTop:10,
  },

  btnText:{
    color:"white",
    fontSize:20,
    fontWeight:"bold",
    letterSpacing:1,
  }
});
