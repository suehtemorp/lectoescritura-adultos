// Dependencias
// Hook para detección de tema activo del teléfono
import { useColorScheme } from 'react-native';

// Colores según tema / esquema de colores
import ThemedColors from '@/constants/Colors/ThemedColors';

// Hook para obtener paleta de colores según esquema de colores
const useThemePalette = () => {
  // Obtener nombre de esquema de colores
  const theme = useColorScheme() ?? 'light';

  // Obtener la paleta de colores asociada
  return ThemedColors[theme];
};

export default useThemePalette;
