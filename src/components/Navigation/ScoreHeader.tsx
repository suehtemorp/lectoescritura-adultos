// Dependencias
// UI de React Native
import { useScore } from "@/shared/Score/UserScore";
import { View, Text, StyleSheet, ColorValue } from "react-native";

// Encabezado con el puntaje del jugador
const ScoreHeader = (bgColor : ColorValue) => {
	// Leer puntaje
	const score = useScore();
	
	// Si pendiente o en error, asumir cero puntos
	const knownScore = score.isLoading || score.isError ?
			0 : score.data!;

	return (
		<View style={[styles.scoreContainer, {backgroundColor: bgColor}]}> 
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
	); 
}

export default ScoreHeader; 

// Estilos
const styles = StyleSheet.create({
	scoreContainer : {
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		backgroundColor: '#cdeda3',
		borderColor: '#DADEE8',
		borderRadius: 5,
		borderWidth: .5,
		width: 100,
		height: 25,
	},
	scoreText : {
		fontSize: 15,
		fontWeight: "bold",
	},
});