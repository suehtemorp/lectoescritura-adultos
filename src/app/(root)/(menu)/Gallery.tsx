//Dependencias
import { View, StyleSheet } from "react-native";
import { useScore } from "@/shared/Score/UserScore";

//Imagenes usadas
import ImgAbrebo from "@/assets/images/Abrebotellas.jpeg"
import ImgLock from "@/assets/images/lock_icon.png"

//Componentes de botones 
import ImageContainer from '@/components/Levels/ImgContainer';

export default function Galley() {
  // Leer puntaje
  const score = useScore();
  
  // Si pendiente o en error, asumir cero puntos
  const knownScore = score.isLoading || score.isError ? 0 : score.data;

  // Determinar imagen a mostrar basado en el puntaje
  const imageToShow1 = knownScore >= 100 ? ImgAbrebo : ImgLock;
  const imageToShow2 = knownScore >= 200 ? ImgAbrebo : ImgLock;
  const imageToShow3 = knownScore >= 300 ? ImgAbrebo : ImgLock;
  const imageToShow4 = knownScore >= 400 ? ImgAbrebo : ImgLock;
  const imageToShow5 = knownScore >= 500 ? ImgAbrebo : ImgLock;
  const imageToShow6 = knownScore >= 600 ? ImgAbrebo : ImgLock;
  const imageToShow7 = knownScore >= 700 ? ImgAbrebo : ImgLock;
  const imageToShow8 = knownScore >= 800 ? ImgAbrebo : ImgLock;
 
  return (
    <View style={styles.background}>
      <View style={styles.iconGrid}>
        <View style={styles.column}>
          <ImageContainer source={imageToShow1} />
          <ImageContainer source={imageToShow2} />
          <ImageContainer source={imageToShow3} />
          <ImageContainer source={imageToShow4} />
        </View>
        <View style={styles.column}>
        <ImageContainer source={imageToShow5} />
        <ImageContainer source={imageToShow6} />
        <ImageContainer source={imageToShow7} />
        <ImageContainer source={imageToShow8} />
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