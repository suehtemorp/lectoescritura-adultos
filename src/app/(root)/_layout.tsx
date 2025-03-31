// Dependencias

// Contenido a ser dibujado en navegador
import { Slot } from 'expo-router';

// Información sobre color según tema
import { useContext } from 'react';
import { ScoreHeaderContext } from '@/components/Navigation/ScoreHeaderContext';
import { LevelPalette } from '@/constants/Colors';

// Encabezado con puntaje
import ScoreHeader from '@/components/Navigation/ScoreHeader';

// Elementos visuales de React Native
import { View, StyleSheet } from 'react-native';

export default function Layout() {
	// Descubrir color de paisaje
	const scoreHeaderContext = useContext(ScoreHeaderContext);
	const backgroundColor = LevelPalette[scoreHeaderContext.theme ?? "Vowel"].background;

	return (
		<View style={styles.container}>
			{ /* Encabezado con puntaje */}
			<View style={styles.header}>
				<ScoreHeader/>
			</View>
			{ /* Contenido */}
			<View style={ [styles.content, {backgroundColor: backgroundColor}] }>
				<Slot/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'aliceblue',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 0, 
	},
	header: {
		width: "100%",
		height: "25%",
	},
	content: {
		width: "100%",
		height: "75%",
	},
});