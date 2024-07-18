// Dependencias
// Navegador de pila
import { Stack } from 'expo-router';

export default function RootLayout() {
	return (
		<Stack initialRouteName='(menu)'>
			<Stack.Screen
				name="(menu)"
				options={{ headerShown: false }}
			/>
		</Stack>
	);
}