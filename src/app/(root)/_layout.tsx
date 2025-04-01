// Dependencias

// Contenido a ser dibujado en navegador
import { Slot } from 'expo-router';

// Información sobre color según tema
import { useContext } from 'react';
import { MainLayoutContext } from '@/components/Navigation/MainLayoutContext';
import { LevelPalette } from '@/constants/Colors';

// Encabezado con puntaje
import ScoreHeader from '@/components/Navigation/ScoreHeader';

// Elementos visuales de React Native
import { View, StyleSheet } from 'react-native';

export default function Layout() {
	// Leer información adicional para color de fondo
	const mainLayoutContext = useContext(MainLayoutContext);
	
	// Si no hay ninguna establecida, utilizar la del menu principal
	const theme = mainLayoutContext?.mainLayoutInformation.theme ?? 
		"MainMenu";

	const backgroundColor = LevelPalette[theme].background;

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