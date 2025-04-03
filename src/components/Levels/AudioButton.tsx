//Dependencias
import React, { useEffect, useState} from 'react';
import { Pressable, StyleSheet, Image, StyleProp, ViewStyle, View } from 'react-native';
import { Audio, AVPlaybackSource } from 'expo-av';

//Imagenes utilizadas
import SoundIcon from '@/assets/images/icons/Object_Sound_Button.png';

const AudioButton = (props: {audio: AVPlaybackSource, style?: StyleProp<ViewStyle>} ) => {

  const [sound, setSound] = useState<Audio.Sound>();

  async function playSound() {
    console.log('Cargando audio descriptivo de objeto ' +  props.audio.toString());
    
    const { sound } = await Audio.Sound.createAsync(props.audio);
    setSound(sound);

    console.log('Reproduciendo audio');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Descargando audio descriptivo de objeto ' + props.audio.toString());
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={props.style ?? styles.defaultViewStyle}>
      <Pressable style={styles.iconButton} onPress={playSound}>
        <Image source={SoundIcon} style={styles.buttonImage} />
      </Pressable>
    </View>
  );
}

//Estilos
const styles = StyleSheet.create({
  defaultViewStyle: {
    width: "100%", 
    height: "100%"
  },
  iconButton: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonImage: {
    width: "100%",
    height: "100%",
  },
});

export default AudioButton;