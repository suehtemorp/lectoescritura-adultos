// Dependencias
// UI de React Native
import { Text, View, StyleSheet, TouchableOpacity, ColorValue } from 'react-native';

// Controlador de navegación
import { router } from 'expo-router';

// Componente de imagen
import { Image } from 'expo-image';

// Ícono de nivel bloqueado
import LockedLevelIcon from "@/assets/images/locked_level_icon.svg"
import { PropsWithChildren } from 'react';

// Tipos de niveles
import {LevelClass} from "@/shared/Levels/LevelTypes"

type LevelButtonProps = {
    isBlocked : false,
    levelIndex : number, 
    levelType : LevelClass, 
    bgColor: ColorValue
} | {
    isBlocked : true,
};

// Botón para acceder a nivel en lista de niveles
const LevelButton = (props: PropsWithChildren<LevelButtonProps>) => {
    return (
        <TouchableOpacity style={styles.levelButtonContainer}
            // Navegar a página de nivel asociado al ser presionado
            // TODO: Definir rutas
            onPress={() => {
                if (!props.isBlocked) {
                    router.navigate("Home");
                }
            }}
        >
            <View
                style={
                    props.isBlocked ? [
                        styles.levelIconContainer, 
                        {backgroundColor : "grey"}
                    ] : [
                        styles.levelIconContainer, 
                        {backgroundColor : props.bgColor}
                    ]
                }
            >
                {
                    // Mostrar número de nivel si nivel está desbloqueado
                    // Sino, mostrar ícono de bloqueado 
                    props.isBlocked ? (
                        <Image
                            source={LockedLevelIcon}
                            style={styles.levelIcon}
                        />
                    ) : (
                        <Text style={styles.levelIndexText}> 
                            {props.levelIndex}
                        </Text>
                    )
                }
            </View>
        </TouchableOpacity>
    );
}

export default LevelButton;

// Estilos
// TODO: Usar colores de estilo
const styles = StyleSheet.create({
    levelButtonContainer: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    levelIconContainer: {
        width: "100%",
        height: "100%",
        borderWidth: 5,
        borderRadius: 35,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        overflow: 'hidden',
        borderColor: "black",
        backgroundColor: "white",
    },
    levelIcon : {
        width: "80%",
        height: "80%",
    },
    levelIndexText: {
        fontSize: 60,
        fontWeight: "bold",
    }
});