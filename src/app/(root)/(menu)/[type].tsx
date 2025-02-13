// UI de React Native
import { View, StyleSheet } from 'react-native';

// Navegación y parámetros de URL
import { useLocalSearchParams } from 'expo-router';

// Botón de nivel
import LevelButton from '@/components/Levels/LevelButton';

// Tipos de niveles
import {LevelClass} from "@/shared/Levels/LevelTypes"

export default function SelectLevel () {
    // Obtener tipo de nivel a usar en selección
    const { type: levelType } = useLocalSearchParams<{ type: LevelClass }>();
    
    if (typeof levelType === "undefined") {
        throw Error("Tipo de nivel indefinido en selección de niveles");
    }

    // Mostrar botones para niveles
    // TODO: Cargar niveles de almacenamiento, escoger colores programáticamente
    return (
        <View style={styles.background}>
            <View style={styles.iconGrid}>
                <LevelButton levelIndex={1} levelType={levelType} isBlocked={false} bgColor={"#7bd785"} />
                <LevelButton levelIndex={2} levelType={levelType} isBlocked={false} bgColor={"#d7b27b"} />
                <LevelButton levelIndex={3} levelType={levelType} isBlocked={false} bgColor={"#d7917b"} />
                <LevelButton isBlocked={true} />
                <LevelButton isBlocked={true} />
                <LevelButton isBlocked={true} />
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
        backgroundColor: "#cdeda3",
    },
    iconGrid : {
        width: "90%",
        height: "70%",
        marginBottom: "30%",
        rowGap: 10,
        columnGap: 10,
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },
});