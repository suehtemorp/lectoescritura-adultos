// Dependencias
// Navegador de pila
import { Stack } from 'expo-router';

// Contexto para audios descriptivos
import { ScoreHeaderContext } from '@/components/Navigation/ScoreHeaderContext';

export default function RootLayout() {
	return (
		<ScoreHeaderContext.Provider value={ {helpAudio: "MainMenu"} }>
			<Stack initialRouteName='(menu)'>
				<Stack.Screen
					name="(menu)"
					options={{ headerShown: false }}
				/>
			</Stack>
		</ScoreHeaderContext.Provider>
	);
}