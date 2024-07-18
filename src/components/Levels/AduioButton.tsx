//Dependencias
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { Audio } from 'expo-av';

//Imagenes utilizadas
import VolumIcon from '@/assets/images/volum_icon.png';


const AudioButton = (props: { color: ColorValue, audio: string}) => {
  //Carga del audio 
  const [sound, setSound] = useState();
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
        contentFit="contain"
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