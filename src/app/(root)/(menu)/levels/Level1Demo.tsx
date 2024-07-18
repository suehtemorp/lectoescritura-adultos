import { Text, View, StyleSheet, TouchableOpacity, ColorValue } from 'react-native';
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';

import { Image } from 'expo-image';
import VolumIcon from "@/assets/images/volum_icon.png"
import ImgAbrebo from "@/assets/images/Abrebotellas.jpeg"



export default function Level1Demo() {
  const [sound, setSound] = useState();
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(require('@/assets/audio/Abrebotellas.m4a'));
    setSound(sound);
    await sound.playAsync();
  }
  return (
    <View style={styles.background}>
      <View style={styles.iconGrid}>
        <View style={styles.column}>
          <OptionButton level={"a"} color={"#7BA0D7"} />
          <OptionButton level={"i"} color={"#7BA0D7"} />
          <OptionButton level={"e"} color={"#7BA0D7"} />
        </View>
        <View style={styles.column}>
          <ImageContainer source={ImgAbrebo} />
          <AudioButton color={"#D7917B"} playSound={playSound} />
        </View>
      </View>
    </View>
  );
}
const ImageContainer = (props: { source: any }) => {
  return (
    <View style={styles.imgContainer}>
      <Image
        source={props.source}
        style={styles.buttonImage}
      />
    </View>
  );
}
const OptionButton = (props: {level : string, color: ColorValue}) => {
return (
    <TouchableOpacity style={styles.iconButton}
          onPress={() => {
            
            
          }}
      >
        <View
          contentFit="contain"
          style={[styles.buttonContainer, {backgroundColor : props.color}]}
        >
          <Text style={styles.buttonText}> 
              {props.level}
          </Text>
        </View>
      </TouchableOpacity>
);
}

const AudioButton = (props: { color: ColorValue, playSound: () => void }) => { // Aceptamos la función playSound como propiedad
  return (
    <TouchableOpacity style={styles.iconButton}
    onPress={props.playSound}
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
  imgContainer: {
    width: "100%",
    height: 120,
    borderWidth: 5,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden',
    borderColor: "black",
    backgroundColor: "white",
    marginBottom: 10,
  },
  buttonImage: {
    width: "90%",
    height: "90%",
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 60,
    fontWeight: "bold",
  },
});