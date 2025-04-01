// Dependencias
// UI de React Native
import { Text, View, StyleSheet, ColorValue, Pressable, Image } from 'react-native';

// Controlador de navegación
import { router } from 'expo-router';

// Ícono de nivel bloqueado
import { PropsWithChildren } from 'react';

// Tipos de niveles
import {LevelClass} from "@/shared/Levels/LevelTypes"
import { LevelPalette } from '@/constants/Colors';

// Progresión del jugador
import { useProgress } from '@/shared/Score/UserProgress';

import Checkmark_Vowel from "@/assets/images/icons/Checkmark_Vowel.png";
import Checkmark_Simple_Consonant from "@/assets/images/icons/Checkmark_Simple_Consonant.png";
import Checkmark_Ambigous_Consonant from "@/assets/images/icons/Checkmark_Ambigous_Consonant.png";

type LevelButtonProps = {
    levelIndex : number, 
    levelType : LevelClass, 
};

// Botón para acceder a nivel en lista de niveles
const LevelButton = (props: PropsWithChildren<LevelButtonProps>) => {
    // Determinar último nivel completado por el usuario 
    const progress = useProgress();

    const levelsCompleted = progress.isError || progress.isLoading ? 0 
        : progress.data?.levels_completed[props.levelType] ?? 0;

    // Uso del botón depende del último nivel completado
    const levelState = levelsCompleted >= props.levelIndex ? "completed"
        : levelsCompleted + 1 === props.levelIndex ? "available" 
        : "locked";

    // Colores del botón dependen de su uso y tipo
    const fillColor : ColorValue = levelState === "locked" ? "grey"
        : levelState === "available" ? LevelPalette[props.levelType].soft
        : LevelPalette[props.levelType].hard;

    const borderColor : ColorValue = levelState === "locked" ? "grey"
        : LevelPalette[props.levelType].hard;

    // Ícono de completado también depende de su tipo
    const checkmarkIcon = props.levelType === "Vowel" ? Checkmark_Vowel :
        props.levelType === "SimpleConsonant" ? Checkmark_Simple_Consonant :
            Checkmark_Ambigous_Consonant;

    return (
        <Pressable style={styles.levelButtonContainer}
            // Navegar a página de nivel asociado al ser presionado
            // TODO: Definir rutas
            onPress={() => {
                if (levelState !== "locked") {
                    router.navigate("/levels/Level1Demo");
                }
            }}
        >
            <View style={[
                styles.levelIconContainer, 
                {backgroundColor : fillColor, borderColor: borderColor} 
            ]}>
                {
                    // Mostrar número de nivel
                    <Text style={styles.levelIndexText} adjustsFontSizeToFit={true}
                    numberOfLines={1} minimumFontScale={.5}> 
                        {props.levelIndex}
                    </Text>
                }
            </View>

            { /* Mostrar ícono si nivel ya fue completado */
                levelState === "completed" ? <Image source={checkmarkIcon} 
                    style={styles.checkmarkIcon}/> : null
            }
        </Pressable>
    );
}

export default LevelButton;

// Estilos
// TODO: Usar colores de estilo
const styles = StyleSheet.create({
    levelButtonContainer: {
        width: "15%",
        aspectRatio: 1,

        justifyContent: "center",
        alignItems: "center",
    },
    levelIconContainer: {
        width: "100%",
        height: "100%",

        borderWidth: 7,
        borderRadius: "60%",
        
        justifyContent: "center",
        alignItems: "center",
        
        overflow: 'hidden',
        borderColor: "black",
        backgroundColor: "white",

        filter: [{dropShadow: "#6e6e6e 10 10 15"}],
    },
    levelIcon : {
        width: "80%",
        height: "80%",
    },
    levelIndexText: {
        fontSize: 80,
        color: "white",
        fontWeight: "bold",
    },
    checkmarkIcon: {
        height: "50%", 
        width: "50%",
        
        position: "absolute", 
        bottom: 80, 
        left: 80, 
    }
});