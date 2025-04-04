// Dependencias
// Hook para detección de tema activo del teléfono
import { ColorValue, useColorScheme } from 'react-native';

// Colores según tema / esquema de colores
import ThemedColors from '@/constants/Colors/ThemedColors';
import { MaterialPalette } from '@/shared/Colors/ColorTypes';

// Utilidad para definir ruta de color anidado
import { NestedPathToType, NestedValue } from '@/shared/Utils/NestedPath';

export function useThemeColor(
  colorPath: NestedPathToType<MaterialPalette, ColorValue>
) {
  // Inferir esquema de colores y paleta asociada
  const theme = useColorScheme() ?? 'light';
  const themedPalette = ThemedColors[theme];

  // Obtener color asociado al esquema según ruta
  const color : ColorValue = NestedValue<MaterialPalette, ColorValue>(
    colorPath, themedPalette
  );

  return color;
}
