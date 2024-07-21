
import { View, StyleSheet } from "react-native";

//Imagenes usadas
import ImgAbrebo from "@/assets/images/Abrebotellas.jpeg"

//Componentes de botones 
import ImageContainer from '@/components/Levels/ImgContainer';

export default function Galley() {
  return (
    <View style={styles.background}>
      <View style={styles.iconGrid}>
        <View style={styles.column}>
          <ImageContainer source={ImgAbrebo} />
          <ImageContainer source={ImgAbrebo} />
          <ImageContainer source={ImgAbrebo} />
          <ImageContainer source={ImgAbrebo} />
        </View>
        <View style={styles.column}>
          <ImageContainer source={ImgAbrebo} />
          <ImageContainer source={ImgAbrebo} />
          <ImageContainer source={ImgAbrebo} />
          <ImageContainer source={ImgAbrebo} />
        </View>
      </View>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#cde7c8",
    },
    iconGrid: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "90%",
      height: "100%",
    },
    column: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
    },
  });