// Dependencias
// UI de React Native
import { StyleSheet, TouchableOpacity } from 'react-native';

// Navegador de cajón y componentes
import { DrawerContentScrollView } from '@react-navigation/drawer';

// Componente de imágenes
import { Image } from 'expo-image';

// Íconos de navegación a menús
import HomeLogo from "@/assets/images/home_icon.png";
import PlayLogo from "@/assets/images/play_icon.png";
import LearnLogo from "@/assets/images/learn_icon.png";

// Tablón con íconos de páginas
const MenuPagesDrawerContent = (props : any) => {
	return (
		<DrawerContentScrollView 
			{...props} 
			contentContainerStyle={styles.drawerContainer}
		>
			{/* Icono de hogar */}
			<TouchableOpacity style={styles.drawerButton}
					onPress={() => {
						props.navigation.navigate("Home");
					}}
			>
				<Image
					source={HomeLogo}
					contentFit="contain"
					style={styles.drawerImage}
				/>
			</TouchableOpacity>

			{/* Icono de ejercicios */}
			<TouchableOpacity style={styles.drawerButton}
					onPress={() => {
						props.navigation.navigate("SelectLevelType");
					}}
			>
				<Image
					source={PlayLogo}
					contentFit="contain"
					style={styles.drawerImage}
				/>
			</TouchableOpacity>

			{/* Icono de diccionario */}
			<TouchableOpacity style={styles.drawerButton}
					onPress={() => {
						props.navigation.navigate("Home");
					}}
			>
				<Image
					source={LearnLogo}
					contentFit="contain"
					style={styles.drawerImage}
				/>
			</TouchableOpacity>

		</DrawerContentScrollView>
	);
}

export default MenuPagesDrawerContent;

// Estilos
const styles = StyleSheet.create({
	drawerContainer: {
		alignItems: "center",
		justifyContent: 'center',
		backgroundColor: '#FEF7FF',
		paddingVertical: 30,
		rowGap: 30,
		flex: 1,
	},
	drawerButton: {
		alignItems: "center",
	},
	drawerImage: {
		width: 100,
		height: 100,
	},
	drawerIconContainer: {
		backgroundColor: "red",
		height: 100
	}
});