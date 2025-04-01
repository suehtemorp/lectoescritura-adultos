// UI de React Native
import { View, StyleSheet, ColorValue } from 'react-native';

// Navegación y parámetros de URL
import { useLocalSearchParams, usePathname } from 'expo-router';

// Botón de nivel
import LevelButton from '@/components/Levels/LevelButton';

// Tipos de niveles
import {LevelClass} from "@/shared/Levels/LevelTypes"

// Contexto de encabezado de puntaje
import { MainLayoutContext } from '@/components/Navigation/MainLayoutContext';
import { useContext, useEffect } from 'react';
import { useProgress } from '@/shared/Score/UserProgress';

// Audios de ayuda
import HelpAudios from '@/constants/HelpAudios';

export default function SelectLevel () {
    // Obtener tipo de nivel a usar en selección
    const { type: levelType } = useLocalSearchParams<{ type: LevelClass }>();
    
    if (typeof levelType === "undefined") {
        throw Error("Tipo de nivel indefinido en selección de niveles");
    }

    // Obtener progreso de usuario en nivel
    const progress = useProgress();
    const levelIndex : number = progress.isLoading || progress.isError ?
        0 : progress.data?.levels_completed[levelType]?? 0;

    // Actualizar audio de ayuda y color cuando ingresa a la página según tipo
    // de nivel y progreso
    const mainLayoutContext = useContext(MainLayoutContext);
    const path = usePathname();
    useEffect(() => {
        if (levelIndex > 5 || levelIndex < 0) {
            console.error("Invalid level index of " + levelIndex);
        } else if (mainLayoutContext) {
            mainLayoutContext.setMainLayoutInformation({
                theme: levelType,
                // TODO: Make level index type safe
                helpAudio: levelIndex === 5 ? "Level_Complete" : 
                    `Level_${levelIndex+1}` as keyof typeof HelpAudios
            })
        }
    }, [path, progress.data?.levels_completed]);

    // Mostrar botones para niveles
    // TODO: Cargar niveles de almacenamiento, escoger colores programáticamente
    return (
        <View style={styles.background}>
            <View style={styles.iconGrid}>
                <LevelButton levelIndex={1} levelType={levelType} />
                <LevelButton levelIndex={2} levelType={levelType} />
                <LevelButton levelIndex={3} levelType={levelType} />
                <LevelButton levelIndex={4} levelType={levelType} />
                <LevelButton levelIndex={5} levelType={levelType} />
            </View>
        </View>
    );
}

// Estilos
// TODO: Usar colores de estilo
const styles = StyleSheet.create({
    background : {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
    iconGrid : {
        width: "100%",
        height: "100%",
        // marginBottom: "30%",
        rowGap: 10,
        columnGap: 10,
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },
});


// Tintes de iconos según tipo de nivel
const ThemeBorder : { [K in LevelClass]: ColorValue } = {
    Vowel: "#009621",
    SimpleConsonant: "#275CC3",
    AmbiguousConsonant: "#BA1F63",
};
