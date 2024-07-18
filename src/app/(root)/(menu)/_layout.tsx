// Navegador de cajón y componentes
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Encabezado de puntaje de jugador
import ScoreHeader from '@/components/Navigation/ScoreHeader';

// Cajón de íconos de menus
import MenuDrawerContent from '@/components/Navigation/MenuPagesDrawerContent';

// TODO: Usar colores de estilos
export default function Layout() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
		<Drawer
			screenOptions = {{
				drawerStyle: {width: 200},
			}}
			drawerContent = {
				(props : any) => <MenuDrawerContent {...props} />
			}
		>
			{/* Menu principal */}
			<Drawer.Screen
				name="Home"
				options={{
					headerTitle: () => ScoreHeader("#cdeda3"),
					headerTitleAlign: 'center',
					headerStyle: {
					backgroundColor: "#FEF7FF",
					}
				}}
			/>

			{/* Página de ejercicios */}
			<Drawer.Screen
				name="SelectExcercise"
				options={{
					headerTitle: () => ScoreHeader("#e6e0e9"),
					headerTitleAlign: 'center',
					headerStyle: {
					backgroundColor: "#7bd79a",
					}
				}}
			/>

			{/* Sub-página de ejercicios */}
			<Drawer.Screen
				name="SelectLevel/[type]"
				options={{
					headerTitle: () => ScoreHeader("#e6e0e9"),
					headerTitleAlign: 'center',
					headerStyle: {
					backgroundColor: "#7bd79a",
					}
				}}
			/>
		</Drawer>
		</GestureHandlerRootView>
	);
}