//Dependencias
import {View, StyleSheet} from 'react-native';

//Imagenes usadas
import ImgAbrebo from "@/assets/images/Abrebotellas.jpeg"

//Componentes de botones 
import AudioButton from '@/components/Levels/AduioButton';
import ImageContainer from '@/components/Levels/ImgContainer';
import OptionButton from '@/components/Levels/OptionButton';

export default function Level1Demo() {
  return (
    <View style={styles.background}>
      <View style={styles.iconGrid}>
        <View style={styles.column}>
          <OptionButton option={"a"} correct={true} color={"#7BA0D7"} />
          <OptionButton option={"i"} correct={false} color={"#7BA0D7"} />
          <OptionButton option={"e"} correct={false} color={"#7BA0D7"} />
        </View>
        <View style={styles.column}>
          <ImageContainer source={ImgAbrebo} />
          <AudioButton color={"#D7917B"} audio={require("@/assets/audio/Abrebotellas.m4a")} />
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
    height: "60%",
  },
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
});