// Dependencias
// Consultas y mutaciones de datos
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Contenido a ser dibujado en navegador
import { Slot } from 'expo-router';

// Cliente de consultas y mutaciones a ser usado en toda la app
const queryClient = new QueryClient()

export default function Layout() {
  return (
    // Inyectar cliente como dependencia a nodos
    <QueryClientProvider client={queryClient}>
      <Slot />
    </QueryClientProvider>
  );
}