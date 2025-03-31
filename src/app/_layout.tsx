// Dependencias
// Consultas y mutaciones de datos
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Contenido a ser dibujado en navegador
import { Slot } from 'expo-router';

// Cliente de consultas y mutaciones a ser usado en toda la app
const queryClient = new QueryClient();

// Orientación de la patalla
import * as ScreenOrientation from "expo-screen-orientation"; 

// Contexto inicial de la aplicación
import { MainLayoutContext, MainLayoutInformation } from '@/components/Navigation/MainLayoutContext';
import { useState } from 'react';

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

  // Establecer paleta de colores y audio de ayuda
  const [mainLayoutInformation, setMainLayoutInformation] = 
    useState<MainLayoutInformation>( {theme: "MainMenu", helpAudio: "MainMenu"} );

  return (
    // Inyectar cliente como dependencia a nodos
    <QueryClientProvider client={queryClient}>
      { /* Inyectar dependencia de contexto incial de la aplicación */ }
      <MainLayoutContext.Provider value={ { mainLayoutInformation, setMainLayoutInformation } }>
        <Slot />
      </MainLayoutContext.Provider>
    </QueryClientProvider>
  );
}