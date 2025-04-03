//Dependencias
import { useContext, useEffect } from 'react';
import { View, StyleSheet, Image, ColorValue, Text} from 'react-native';

// Tipografía
import { useFonts } from "expo-font";

// Parámetros para nivel
import { useLocalSearchParams, usePathname } from 'expo-router';
import { LevelClass, LevelIndex } from '@/shared/Levels/LevelTypes';
import LevelData from '@/constants/LevelData';

// Objetos y letras (y sus respectivos audios)
import GameObjects from '@/constants/GameObjects';
import GameLetters from '@/constants/GameLetters';

// Soporte para audio descriptivo
import FrameWithAudio from "@/components/Levels/FrameWithAudio";

// Actualizar color de tema
import { MainLayoutContext } from '@/components/Navigation/MainLayoutContext';
import { LevelPalette } from '@/constants/Colors';

export default function Game() {
  // Obtener tipo de nivel y número para indizar
  const { type: levelType, index: levelIndex } = useLocalSearchParams<{
    type: LevelClass, index: `${LevelIndex}` }>();

  if (typeof levelType === "undefined") {
    throw Error("Tipo de nivel indefinido en selección de niveles");
  }

  if (typeof levelIndex === "undefined") {
    throw Error("Numero de nivel indefinido en selección de niveles");
  }

  // Cargar tipografía Futura
  const [fontLoaded, fontError] = useFonts({
    'Futura-Unicode': require('@/assets/fonts/Unicode-Futura.ttf'),
  });

  useEffect(() => {
    if (fontLoaded) {
      console.debug("Font loaded succesfully");
    } else if (fontError) {
      console.debug("Error loading font: " + fontError);
    }
  }, [fontLoaded, fontError]);

  // Actualizar audio de ayuda y color cuando ingresa a la página según tipo
  // de nivel y progreso
  const mainLayoutContext = useContext(MainLayoutContext);
  const path = usePathname();
  useEffect(() => {
    if (mainLayoutContext) {
        mainLayoutContext.setMainLayoutInformation({
            theme: levelType,
            helpAudio: levelType
        });
    }
  }, [path]);

  // Determinar color de bordes para letras e imagen
  const borderColor : ColorValue = LevelPalette[levelType].hard;

  // Determinar datos del nivel
  const levelData = LevelData[levelType][levelIndex];

  Object.entries(levelData.options).map(([x, y]) => {
    console.debug("Opción " + x + " respuesta " + y);
  })

  return (
    <View style={styles.mainContainer}>

      { /* Posibles opciones para seleccionar */}
      <View style={styles.lhs_options}>
          { // Dibujar letras
            levelData.minigame === "letter" ? (
              Object.entries(levelData.options).map(([optionIndex, optionLetter]) => {
                return <FrameWithAudio audio={GameLetters[optionLetter]} 
                  style={styles.lhs_choice} onTap={
                    `${levelData.solution}` === optionIndex ? () => {console.log("Win")}
                  : () => {console.log("Lose")}
                }>
                  <View style={[styles.letter_background, {borderColor: borderColor}]}>
                    <Text style={styles.letter} adjustsFontSizeToFit={true} 
                      numberOfLines={1} minimumFontScale={.5}>{optionLetter}</Text>
                  </View>
                </FrameWithAudio>
              })
            ) : ( // Dibujar imágenes
              Object.entries(levelData.options).map(([optionIndex, optionImage]) => {
                return <FrameWithAudio audio={GameObjects[optionImage].sound} 
                  style={styles.lhs_choice} onTap={
                    `${levelData.solution}` === optionIndex ? () => {console.log("Win")}
                  : () => {console.log("Lose")}
                }>
                  <Image source={GameObjects[optionImage].image} style={[styles.image, {borderColor: borderColor}]} />
                </FrameWithAudio>
              })
            )
          }
      </View>

      { // Respuesta sugerida por imagen o letra
        levelData.minigame === "letter" ? (
          <FrameWithAudio audio={GameObjects[levelData.suggestion].sound} 
            style={styles.rhs_solution}>
            <Image source={GameObjects[levelData.suggestion].image} 
              style={[styles.image, {borderColor: borderColor}]} />
          </FrameWithAudio>
        ) : (
          <FrameWithAudio audio={GameLetters[levelData.suggestion]} 
            style={styles.rhs_solution}>
            <View style={[styles.letter_background, {borderColor: borderColor}]}>
              <Text style={styles.letter} adjustsFontSizeToFit={true} numberOfLines={1}
                minimumFontScale={.5}>{levelData.suggestion}</Text>
            </View>
          </FrameWithAudio>
        )
      }
    </View>
  );
}
// Estilos
const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "90%",
    marginTop: "3%",

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rhs_solution: {
    height: "100%",
    width: "30%",

    justifyContent: "center",
    alignItems: "center",
  },
  lhs_options: {
    height: "100%",
    width: "70%",

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  lhs_choice: {
    height: "100%",
    width: "30%",

    justifyContent: "center",
    alignItems: "center",
  },
  image : {
    height: "100%",
    aspectRatio: 1,

    borderWidth: 8,
    filter: [{dropShadow: "black 5 5 7"}],
  },
  letter_background: {
    height: "100%",
    aspectRatio: 1,

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",

    borderWidth: 8,
    borderRadius: "100%",
    filter: [{dropShadow: "black 5 5 7"}],
  },
  letter: {
    fontSize: 75,
    fontFamily: "Futura-Unicode",
    color: "black",
		fontWeight: "bold",
		textAlign: "center",
  }
});