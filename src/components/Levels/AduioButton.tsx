//Dependencias
import React, { useState} from 'react';
import { TouchableOpacity, StyleSheet, View, Image,ColorValue } from 'react-native';
import { Audio } from 'expo-av';

//Imagenes utilizadas
import VolumIcon from '@/assets/images/volum_icon.png';


type AudioButtonProps = { 
  audio: any, 
  color: ColorValue,

} 

const AudioButton = (props: AudioButtonProps) => {
  // Carga del audio 
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(props.audio);
    setSound(sound);
    await sound.playAsync();
  }
  return (
    <TouchableOpacity style={styles.iconButton}
    onPress={playSound}
    >
      <View
        style={[styles.buttonContainer, { backgroundColor: props.color }]}
      >
        <Image
          source={VolumIcon}
          style={styles.buttonImage}
        />
      </View>
    </TouchableOpacity>
  );
}

//Estilos
const styles = StyleSheet.create({
  iconButton: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonContainer: {
    width: "100%",
    height: "100%",
    borderWidth: 5,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden',
    borderColor: "black",
    backgroundColor: "white",
  },
  buttonImage: {
    width: "90%",
    height: "90%",
    borderRadius: 25,
  },
});

export default AudioButton;