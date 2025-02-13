// Dependencias
// Consultas y mutaciones de datos
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Contenido a ser dibujado en navegador
import { Slot } from 'expo-router';

// Cliente de consultas y mutaciones a ser usado en toda la app
const queryClient = new QueryClient();

// Orientación de la patalla
import * as ScreenOrientation from "expo-screen-orientation"; 

export default function Layout() {
  // Ajustar orientación de pantalla a horizontal si el dispositivo lo soporta 
  ScreenOrientation
    .supportsOrientationLockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
    .then(async (landscapeSupported) => {
      console.debug("Landscape orientation is " + (!landscapeSupported ? "NOT " : "") + "SUPPORTED");
      if (landscapeSupported) {
        console.debug("Adjusting orientation to landscape");
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
      }
    });

  return (
    // Inyectar cliente como dependencia a nodos
    <QueryClientProvider client={queryClient}>
      <Slot />
    </QueryClientProvider>
  );
}