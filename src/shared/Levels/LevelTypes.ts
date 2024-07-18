// Datos comunes entre todos los tipos de niveles 
type BaseLevel = {
    points: number,
    requiredPoints: number
}

// Datos de nivel según tipo
export type VowelLevel = BaseLevel & {

}

export type SimpleConsonantLevel = BaseLevel & {
    
}

export type AmbiguousConsonantLevel = BaseLevel & {
    
}

// Niveles almacenados según tipo de nivel
export type StoredLevels = {
    "Vowel" : VowelLevel[],
    "SimpleConsonant": SimpleConsonantLevel[],
    "AmbiguousConsonant": AmbiguousConsonantLevel[]
}

// Tipos de niveles
export type LevelClass = keyof StoredLevels;
