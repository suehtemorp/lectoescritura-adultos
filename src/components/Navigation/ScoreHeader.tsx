// Dependencias
// Caché de puntaje
import { useScore } from "@/shared/Score/UserScore";

// UI de React Native
import { View, Text, StyleSheet, ColorValue, Image } from "react-native";

// Tipos de niveles
import { LevelClass } from "@/shared/Levels/LevelTypes";

// Íconos de encabezado
import HomeIcon from "@/assets/images/icons/go-home.png"
import AudioHelp from "@/assets/images/icons/audio-help.png"
import QuitIcon from "@/assets/images/icons/quit-app.png"

// Encabezado con el puntaje del jugador
const ScoreHeader = (levelTheme : LevelClass) => {
	// Leer puntaje
	const score = useScore();
	
	// Si pendiente o en error, asumir cero puntos
	const knownScore = score.isLoading || score.isError ?
			0 : score.data!;

	return (
		<View style={[
			styles.headerGrid, {backgroundColor: ThemeBackground[levelTheme]}
		]}>
			{/* Volver a pantalla principal + Pedir aclaración */}
			<View style={styles.leftContainer}> 
				{/* Volver a casa */}
				<Image source={HomeIcon} style={[
					styles.leftIcons, {backgroundColor: ThemeBorder[levelTheme]}
				]}/>

				{/* Pedir aclaración por audio */}
				<Image source={AudioHelp} style={styles.leftIcons}/>
			</View>

			{/* Puntaje */}
			<View style={[
				styles.centerContainer, {borderColor: ThemeBorder[levelTheme]}
			]}> 
				<Text style={styles.scoreText}>
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
				<Image source={QuitIcon} style={styles.rightIcon}/>
			</View>
		</View>
	); 
}

export default ScoreHeader; 

// Estilos
const styles = StyleSheet.create({
	headerGrid: {
		flexDirection: "row",
      	alignContent: "center",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		height: "100%",
		backgroundColor: "red",
	},
	centerContainer : {
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		backgroundColor: 'white',
		borderColor: '#275CC3',
		borderRadius: 10,
		borderWidth: 5,
		width: "15%",
		height: "100%",
	},
	leftContainer: {
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		flexDirection: "row",
		width: "15%",
		height: "100%",
	},
	rightContainer: {
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		width: "8%",
		height: "100%",
	},
	scoreText : {
		fontSize: 20,
		fontWeight: "bold",
	},
	leftIcons : {
		justifyContent: "center",
		alignContent: "center",
		width: "50%",
		height: "100%",
		resizeMode: "contain",
	},
	rightIcon : {
		justifyContent: "center",
		alignContent: "flex-end",
		width: "100%",
		height: "100%",
		resizeMode: "contain",
	},
});

// Tintes de iconos según tipo de nivel
const ThemeBorder : { [K in LevelClass]: ColorValue } = {
	Vowel: "#009621",
	SimpleConsonant: "#275CC3",
	AmbiguousConsonant: "#BA1F63",
};

// y de fondo
const ThemeBackground : { [K in LevelClass]: ColorValue } = {
	Vowel: "#09B930",
	SimpleConsonant: "#5A92FE",
	AmbiguousConsonant: "#EE5A9B",
}