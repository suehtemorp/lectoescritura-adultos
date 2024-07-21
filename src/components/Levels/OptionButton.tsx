//Dependencias
import { TouchableOpacity, ToastAndroid, StyleSheet, Text, View, ColorValue } from 'react-native';
import { Audio } from 'expo-av';
import React, { useState} from 'react';
import { useScore, useScoreAssign } from '@/shared/Score/UserScore';

//Audio utilizados
import AudioCorrect from '@/assets/audio/correcto.m4a'
import AudioIncorrect from '@/assets/audio/incorrecto.m4a'

type OptionButtonProps = { 
  option : string, 
  correct : Boolean, 
  color: ColorValue

} 

const OptionButton = (props: OptionButtonProps) => {
  //Fucniones para dar retroalimentacion inmediata
  function showToastCorrect() {
    ToastAndroid.show('✔️', ToastAndroid.SHORT);
  }
  function showToastError() {
    ToastAndroid.show('❌', ToastAndroid.SHORT);
  }

  // Cargas de audios
  const [soundCorrect, setSoundCorrect] = useState<Audio.Sound | null>(null);
  const [soundIncorrect, setSoundIncorrect] = useState<Audio.Sound | null>(null);

  async function playSoundCorrect() {
    const { sound } = await Audio.Sound.createAsync(AudioCorrect);
    setSoundCorrect(sound);
    await sound.playAsync();
  }

  async function playSoundIncorrect() {
    const { sound } = await Audio.Sound.createAsync(AudioIncorrect);
    setSoundIncorrect(sound);
    await sound.playAsync();
  }

  // Hook para actualizar el puntaje
  const score = useScore();
  const scoreAssign = useScoreAssign();
  const knownScore = score.isLoading || score.isError ?
			0 : score.data!;
  
  return (
    <TouchableOpacity style={styles.iconButton}
      //Eleccion del mensaje 
      onPress={() => {
        if(props.correct == true){
          showToastCorrect();
          playSoundCorrect();
          scoreAssign.mutate(knownScore+50); 
        }else{
          showToastError();
          playSoundIncorrect();
        }
      }}
    >
      <View
        style={[styles.buttonContainer, {backgroundColor : props.color}]}
      >
        <Text style={styles.buttonText}> 
            {props.option}
        </Text> 
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
  buttonText: {
    fontSize: 60,
    fontWeight: "bold",
  },
});

export default OptionButton;
