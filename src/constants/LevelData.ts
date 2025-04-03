import { LevelCollection } from "@/shared/Levels/LevelTypes"

const LevelData : LevelCollection = {
    "Vowel" : {
        1: {
            minigame: "letter",
            options: {
                1: "a",
                2: "e",
                3: "o",
            },
            suggestion: "aguacate",
            solution: 1,
        },
        2: {
            minigame: "letter",
            options: {
                1: "o",
                2: "a",
                3: "e",
            },
            suggestion: "espejo",
            solution: 3,
        },
        3: {
            minigame: "letter",
            options: {
                1: "e",
                2: "u",
                3: "i",
            },
            suggestion: "uña",
            solution: 2,
        },
        4: {
            minigame: "image",
            options: {
                1: "espejo",
                2: "aguacate",
                3: "uña",
            },
            suggestion: "e",
            solution: 1,
        },
        5: {
            minigame: "image",
            options: {
                1: "ojo",
                2: "uña",
                3: "aguacate",
            },
            suggestion: "o",
            solution: 1,
        },
    },
    "SimpleConsonant": {
        1: {
            minigame: "letter",
            options: {
                1: "d",
                2: "f",
                3: "g",
            },
            suggestion: "gato",
            solution: 3,
        },
        2: {
            minigame: "letter",
            options: {
                1: "j",
                2: "g",
                3: "h",
            },
            suggestion: "jugo",
            solution: 1,
        },
        3: {
            minigame: "letter",
            options: {
                1: "l",
                2: "m",
                3: "n",
            },
            suggestion: "naranja",
            solution: 3,
        },
        4: {
            minigame: "image",
            options: {
                1: "reloj",
                2: "lana",
                3: "pato",
            },
            suggestion: "r",
            solution: 1,
        },
        5: {
            minigame: "image",
            options: {
                1: "pato",
                2: "flor",
                3: "tomate",
            },
            suggestion: "f",
            solution: 2,
        },
        
    },
    "AmbiguousConsonant": {
        1: {
            minigame: "letter",
            options: {
                1: "b",
                2: "c",
                3: "w",
            },
            suggestion: "café",
            solution: 2,
        },
        2: {
            minigame: "letter",
            options: {
                1: "s",
                2: "k",
                3: "v",
            },
            suggestion: "sopa",
            solution: 1,
        },
        3: {
            minigame: "letter",
            options: {
                1: "v",
                2: "b",
                3: "s",
            },
            suggestion: "bola",
            solution: 2,
        },
        4: {
            minigame: "image",
            options: {
                1: "reloj",
                2: "bola",
                3: "vaso",
            },
            suggestion: "v",
            solution: 3,
        },
        5: {
            minigame: "image",
            options: {
                1: "café",
                2: "kiwi",
                3: "tomate",
            },
            suggestion: "t",
            solution: 3,
        },
    },
}

export default LevelData;