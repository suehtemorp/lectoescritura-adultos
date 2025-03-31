// Dependencias

// Contenido a ser dibujado en navegador
import ScoreHeader from '@/components/Navigation/ScoreHeader';
import { Slot } from 'expo-router';

// Elementos visuales de React Native
import { View, StyleSheet } from 'react-native';

export default function Layout() {
	return (
		<View style={styles.container}>
			{ /* Encabezado con puntaje */}
			<View style={styles.header}>
				<ScoreHeader/>
			</View>
			{ /* Contenido */}
			<View style={styles.content}>
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