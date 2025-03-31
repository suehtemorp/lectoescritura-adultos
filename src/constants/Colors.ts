import { LevelClass } from "@/shared/Levels/LevelTypes"
import { ColorValue } from "react-native"

export const LevelPalette : { 
    [K in LevelClass | "MainMenu"]: {
        soft : ColorValue, hard: ColorValue, background: ColorValue,
    }
} = {
    MainMenu: { hard: "#025b74", soft : "#09b930", background: "#ffeccf"},
    Vowel: { hard: "#025b74", soft : "#09b930", background: "#b7f2c4"},
    SimpleConsonant: { hard: "#275cc3", soft : "#5a92fe", background: "#c7daff"},
    AmbiguousConsonant: { hard: "#ba1f63", soft : "#ee5a9b", background: "#ffdaea"},
}
