//Dependencias
import { useContext, useEffect, useState } from 'react';
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
import { Audio } from 'expo-av';
import HelpAudios from '@/constants/HelpAudios';
import FrameWithAudio from "@/components/Levels/FrameWithAudio";

// Actualizar color de tema
import { MainLayoutContext } from '@/components/Navigation/MainLayoutContext';
import { LevelPalette } from '@/constants/Colors';

// Actualizar progreso del jugador
import { useProgress, useProgressAssign } from '@/shared/Score/UserProgress';

// Navegación de Expo
import { router } from "expo-router";

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

  console.log("Ejercicio: " + levelType + " de nivel " + levelIndex + 
    " => Modalidad: " + levelData.minigame);
  Object.entries(levelData.options).map(([x, y]) => {
    console.debug("Opción:" + x + " => Respuesta: " + y);
  });

  // Reproducir audio cuando el usuario escoge una opción
  const [loadedSound, setLoadedSound] = useState<Audio.Sound>();
	async function playHelpAudio(choice: "win" | "loss") {
		console.debug('Cargando audio de retroalimentación de ' + choice);
		const soundSource = await Audio.Sound.createAsync( HelpAudios[choice] );

		if (soundSource.status.isLoaded) { // Si cargado con éxito, reproducir
			// Detener audio previo, en caso de estarse reproduciendo
			if (loadedSound) {
				console.debug('Deteniendo audio previo...');
				await loadedSound.unloadAsync();
			}

			console.debug('Reproduciendo audio...');
			
			setLoadedSound(soundSource.sound);
			await soundSource.sound.playAsync();

		} else { // Sino, no hacer nada
			console.error("No se logró cargar el audio");
			console.error("Error: " + soundSource.status.error);
		}
	}

	// Des-cargar audio previo, de haber sido cargado
	useEffect(() => {
		return loadedSound ? () => {
        console.debug('Descargando audio previo');
        loadedSound.unloadAsync();
      } : undefined;
  }, [loadedSound]);

  // Llevar cuenta del progreso y actualizar puntos del jugador acordemente
  const progress = useProgress();
  const progressAssign = useProgressAssign();

  const knownScore : number = progress.isLoading || progress.isError ?
    0 : progress.data?.points?? 0;
  const levelsCompleted = progress.isLoading || progress.isError ?
    0 : progress.data?.levels_completed[levelType]?? 0;

  // Informar al usuario cuando se equivoca
  const onLoss = () => {
    console.log("User lost!");
    playHelpAudio("loss");
  };

  // Informar al usuario cuando gana, actualizar su progreso, y volver a 
  // pantalla de selección de niveles
  const onWin = () => {
    console.log("User won!");
    if (
      (! progressAssign.isError) && (! progressAssign.isPending)
    ) {
      if (
        (parseInt(levelIndex) === levelsCompleted + 1) && progress.data
      ) {
        const reward = levelType === "Vowel" ? 10 :
          levelType === "SimpleConsonant" ? 20 : 30;
  
        progressAssign.mutateAsync({
          points: knownScore + reward,
          levels_completed: {
            "Vowel": levelType === "Vowel" ? levelsCompleted + 1 
              : progress.data.levels_completed.Vowel,
            "SimpleConsonant": levelType === "SimpleConsonant" ? levelsCompleted + 1 
              : progress.data.levels_completed.SimpleConsonant,
            "AmbiguousConsonant": levelType === "AmbiguousConsonant" ? levelsCompleted + 1 
              : progress.data.levels_completed.AmbiguousConsonant,
          }
        }).then(() => {
          console.debug("Progress updated succesfully");
        }, (err) => {
          console.error("Unable to update progress: " + err);
        });
      }

      playHelpAudio("win");
      setTimeout(() => {
        router.replace({ pathname: "/LevelSelect", params: { type: levelType }});
      }, 1500);
    }
  };

  return (
    <View style={styles.mainContainer}>

      { /* Posibles opciones para seleccionar */}
      <View style={styles.lhs_options}>
          { // Dibujar letras
            levelData.minigame === "letter" ? (
              Object.entries(levelData.options).map(([optionIndex, optionLetter]) => {
                return <FrameWithAudio audio={GameLetters[optionLetter]} 
                  style={styles.lhs_choice} onTap={
                    `${levelData.solution}` === optionIndex ? onWin : onLoss
                } key={optionIndex}>
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
                    `${levelData.solution}` === optionIndex ? onWin : onLoss
                } key={optionIndex}>
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