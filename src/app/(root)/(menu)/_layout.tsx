// Encabezado de puntaje de jugador
import ScoreHeader from '@/components/Navigation/ScoreHeader';

// Navegador de pila
import { Stack, Tabs } from 'expo-router';

import { Header } from "@react-navigation/elements";
import { Text } from 'react-native';

// TODO: Usar colores de estilos
export default function Layout() {
	return (
		<Tabs
			screenOptions={{
				tabBarStyle: {
					display: "none"
				},
			}}
		>
			{/* Menu principal */}
			<Tabs.Screen
				name="Home"
				options={{
					header: () => ScoreHeader("Vowel"),
					headerShown: true,
					headerTransparent: true,
				}}
			/>

			{/* Página de ejercicios */}
			<Tabs.Screen
				name="[type]"
				options={{ headerShown: false }}
			/>
			
		</Tabs>
	);
}