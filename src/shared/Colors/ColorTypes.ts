// Dependencias
// Tipo para posibles valores de colores en componentes 
import { ColorValue } from "react-native";

// Plantillas para colores según Material Design 3
// Colores principales
export type MainPalette = {
	Main: ColorValue,
	Container: ColorValue,

	OnMain: ColorValue,
	OnContainer: ColorValue,
}

// Colores principales fijos
export type FixedPalette = {
	Main: ColorValue,
	Dim: ColorValue,

	OnMain: ColorValue, 
	OnVariant: ColorValue,
}

// Colores para roles
export type RolePalette = {
	Main: MainPalette,
	Fixed: FixedPalette,
}

// Colores en superficies
export type SurfacePalette = {
	Main: ColorValue,
	Dim: ColorValue,
	Bright: ColorValue,

	Outline: ColorValue,
	OutlineVariant: ColorValue,

	OnMain: ColorValue,
	OnVariant: ColorValue,

	ContainerLowest: ColorValue,
	ContainerLow: ColorValue,
	Container: ColorValue,
	ContainerHigh: ColorValue,
	ContainerHighest: ColorValue,
}

// Colores inversos
export type InversePalette = {
	Primary: ColorValue,
	Surface: ColorValue,

	OnSurface: ColorValue, 
}

// Colores para aplicacion
export type MaterialPalette = {
	Primary: RolePalette,
	Secondary: RolePalette,
	Tertiary: RolePalette,

	Error: MainPalette,

	Surface: SurfacePalette,
	Inverse: InversePalette,

	Scrim: ColorValue,
	Shadow: ColorValue, 
}

// Colores para aplicación según tema
export type ThemedPalette = {
  light : MaterialPalette,
  dark : MaterialPalette,
}
