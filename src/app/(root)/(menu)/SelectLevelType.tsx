// UI de React Native
import { Text, View, StyleSheet, TouchableOpacity, ColorValue } from 'react-native';

// Controlador de navegación
import { router } from 'expo-router';

// Posibles tipos de niveles
import { LevelClass } from '@/shared/Levels/LevelTypes';

// TODO: Usar colores de estilos
export default function SelectLevelType () {
    return (
        <View style={styles.background}>
            <View style={styles.optionGrid}>
                <LevelTypeButton levelType={"Vowel"} color={"#7bd785"} />
                <LevelTypeButton levelType={"SimpleConsonant"} color={"#d7b27b"} />
                <LevelTypeButton levelType={"AmbiguousConsonant"} color={"#d7917b"} />
            </View>
        </View>
    );
}

const LevelTypeButton = (props: {levelType : LevelClass, color: ColorValue}) => {
return (
    <TouchableOpacity style={styles.iconButton}
          onPress={() => {
            router.navigate("SelectLevel/" + props.levelType);
          }}
      >
        <View style={[styles.buttonContainer, {backgroundColor : props.color}]}>
            <Text style={styles.buttonText}> 
                {
                    props.levelType === "Vowel" ? "Vocales" : (
                        props.levelType === "SimpleConsonant" ?
                        "Consonantes simples" :
                        "Consonantes ambiguas"
                    )
                }
            </Text>
        </View>
      </TouchableOpacity>
);
}

// Estilos
// TODO: Usar colores de estilos
const styles = StyleSheet.create({
    background : {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "#cdeda3",
    },
    optionGrid : {
        width: "90%",
        height: "70%",
        rowGap: 30,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
    iconButton: {
        width: "80%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
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
    buttonText: {
        fontSize: 30,
        fontWeight: "bold",
    }
});