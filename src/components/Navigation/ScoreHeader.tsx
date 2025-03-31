// Dependencias
// Caché de puntaje
import { useScore } from "@/shared/Score/UserScore";

// UI de React Native
import { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, ColorValue, Image, Pressable, BackHandler } from "react-native";

// Tipos de niveles
import { LevelClass } from "@/shared/Levels/LevelTypes";

// Íconos de encabezado
import HomeIcon from "@/assets/images/icons/go-home.png"
import AudioHelp from "@/assets/images/icons/audio-help.png"
import QuitIcon from "@/assets/images/icons/quit-app.png"

// Audios de ayuda
import HelpAudios from "@/constants/HelpAudios";
import { ScoreHeaderContext } from "./ScoreHeaderContext";

// Navegación de Expo
import { router } from "expo-router";

// Reproducción de audio de Expo y React
import { Audio } from 'expo-av';

// Encabezado con el puntaje del jugador
const ScoreHeader = () => {
	// Leer puntaje
	const score = useScore();
	
	// Si pendiente o en error, asumir cero puntos
	const knownScore = score.isLoading || score.isError ?
			0 : score.data!;

	// Leer información adicional para encabezado
	const scoreHeaderContext = useContext(ScoreHeaderContext);

	// Escoger paleta de colores según tipo de nivel
	const backgroundColor = ThemeBackground[scoreHeaderContext.theme ?? "Vowel"];

	// Cargar dirección de audio de ayuda correspondiente
	const [loadedSound, setLoadedSound] = useState<Audio.Sound>();

	// Cargar y reproducir audio de ayuda previo
	async function playHelpAudio() {
		console.debug('Cargando audio de ayuda con nombre ' + scoreHeaderContext.helpAudio);
		const soundSource = await Audio.Sound.createAsync( HelpAudios[scoreHeaderContext.helpAudio] );

		if (soundSource.status.isLoaded) { // Si cargado con éxito, reproducir
			// Detener audio previo, en caso de estarse reproduciendo
			if (loadedSound) {
				await loadedSound.stopAsync();
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
	  }, [scoreHeaderContext]);

	return (
		<View style={[
			styles.headerGrid, {backgroundColor: backgroundColor}
		]}>
			{/* Volver a pantalla principal + Pedir aclaración */}
			<View style={styles.leftContainer}> 
				{/* Volver a casa */}
				<Pressable 
					onPress={ () => {router.replace({ pathname: "/Home" });} } 
					style={ [styles.icon, {aspectRatio: 1 / 1,}] }
				>
					<Image source={HomeIcon} style={[
						styles.icon, {
							backgroundColor: backgroundColor,
							aspectRatio: 1 / 1,
						}
					]}/>
				</Pressable>

				{/* Pedir aclaración por audio */}
				<Pressable 
					onPress={ () => {playHelpAudio();} } 
					style={ [styles.icon, {aspectRatio: 128 / 81,}] }
				>
					<Image source={AudioHelp} style={[
						styles.icon, {
							backgroundColor: backgroundColor,
							aspectRatio: 128 / 81 ,
						}
					]}/>
				</Pressable>
			</View>

			{/* Puntaje */}
			<View style={[
				styles.centerContainer, {borderColor: backgroundColor}
			]}> 
				<Text 
					style={styles.scoreText} adjustsFontSizeToFit={true}
					numberOfLines={1} minimumFontScale={.5}
				>
					{
						// Texto de puntaje con mínimo tres dígitos
						knownScore.toLocaleString(
							'en-US', {
							minimumIntegerDigits: 3,
							useGrouping: false
						})
					}
				</Text>
			</View>
			
			{/* Salir de la aplicación */}
			<View style={styles.rightContainer}> 
				<Pressable 
					onPress={ () => {BackHandler.exitApp();} } 
					style={ [styles.icon, { aspectRatio: 128 / 81,}] }
				>
					<Image source={QuitIcon} style={[
						styles.icon, {
							backgroundColor: backgroundColor,
							aspectRatio: 128 / 81,
						}
					]}/>
				</Pressable>
			</View>
		</View>
	); 
}

export default ScoreHeader; 

// Estilos
const styles = StyleSheet.create({
	headerGrid: {
		width: "100%",
		height: "100%",
		flexDirection: "row",

		justifyContent: "space-between",
		alignItems: "stretch",
	},
	centerContainer : {
		flex: 2,

		justifyContent: "center",
		alignItems: "stretch",

		backgroundColor: 'white',
		borderColor: '#275CC3',
		
		borderRadius: 10,
		borderWidth: 5,
	},
	leftContainer: {
		flex: 3,

		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "stretch",
	},
	rightContainer: {
		flex: 3,

		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "stretch",
	},
	scoreText : {
		fontSize: 50,
		fontWeight: "bold",
		textAlign: "center",
	},
	icon : {
		// Workaround: https://github.com/facebook/react-native/issues/3686#issuecomment-156280873
		width: null,
		height: null,
		aspectRatio: 1 / 1,
		resizeMode: "contain",
	},
});

// y de fondo
const ThemeBackground : { [K in LevelClass]: ColorValue } = {
	Vowel: "#09B930",
	SimpleConsonant: "#5A92FE",
	AmbiguousConsonant: "#EE5A9B",
}