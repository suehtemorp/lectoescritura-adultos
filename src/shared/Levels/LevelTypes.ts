import GameLetters from "@/constants/GameLetters";
import GameObjects from "@/constants/GameObjects";

// Tipos de niveles
export type LevelClass = "Vowel" | "SimpleConsonant" | "AmbiguousConsonant";

// Información de un nivel
export type LevelInfo = ({
    minigame: "letter",
    options: {
        1: keyof typeof GameLetters,
        2: keyof typeof GameLetters,
        3: keyof typeof GameLetters,
    },
    suggestion: keyof typeof GameObjects
} | {
    minigame: "image",
    options: {
        1: keyof typeof GameObjects,
        2: keyof typeof GameObjects,
        3: keyof typeof GameObjects,
    },
    suggestion: keyof typeof GameLetters
}) & {
    solution: keyof LevelInfo["options"]
};

// Información de la colección de niveles
export type LevelCollection = {
    [K in LevelClass] : {
        1: LevelInfo,
        2: LevelInfo,
        3: LevelInfo,
        4: LevelInfo,
        5: LevelInfo,
    }
};

// Información sobre la cantidad de niveles
export type LevelIndex = keyof LevelCollection[LevelClass];
