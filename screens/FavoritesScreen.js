import { View, Text, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function FavoritesScreen() {
  const favorites = useSelector(state => state.favorites);

  if (favorites.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.empty}>Aucun favori pour le moment ⭐</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {favorites.map(item => (
        <View key={item.id} style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.img}/>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, alignItems:"center", paddingTop:20, backgroundColor:"#fff" },
  empty:{ fontSize:18, fontWeight:"600", color:"#333" },
  card:{ width:"90%", backgroundColor:"#FFD47A", padding:12, borderRadius:12, marginBottom:10, alignItems:"center" },
  img:{ width:80, height:80, resizeMode:"contain" },
  name:{ fontSize:16, fontWeight:"700", color:"#3A2A00" },
});
