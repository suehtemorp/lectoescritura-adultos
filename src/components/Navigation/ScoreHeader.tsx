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

type ScoreHeaderProps = {
	levelTheme: LevelClass
}

// Encabezado con el puntaje del jugador
const ScoreHeader = (props : ScoreHeaderProps) => {
	// Leer puntaje
	const score = useScore();
	
	// Si pendiente o en error, asumir cero puntos
	const knownScore = score.isLoading || score.isError ?
			0 : score.data!;

	return (
		<View style={[
			styles.headerGrid, {backgroundColor: ThemeBackground[props.levelTheme]}
		]}>
			{/* Volver a pantalla principal + Pedir aclaración */}
			<View style={styles.leftContainer}> 
				{/* Volver a casa */}
				<Image source={HomeIcon} style={[
					styles.icon, {
						backgroundColor: ThemeBorder[props.levelTheme],
						aspectRatio: 1 / 1,
					}
				]}/>

				{/* Pedir aclaración por audio */}
				<Image source={AudioHelp} style={[
					styles.icon, {
						backgroundColor: ThemeBorder[props.levelTheme],
						aspectRatio: 128 / 81 ,
					}
				]}/>
			</View>

			{/* Puntaje */}
			<View style={[
				styles.centerContainer, {borderColor: ThemeBorder[props.levelTheme]}
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
				<Image source={QuitIcon} style={[
					styles.icon, {
						backgroundColor: ThemeBorder[props.levelTheme],
						aspectRatio: 128 / 81,
					}
				]}/>
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
		fontSize: 30,
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