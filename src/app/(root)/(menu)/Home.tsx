import { View, StyleSheet, Text, TouchableOpacity, ColorValue } from "react-native";

// Controlador de navegación
import { router } from 'expo-router';

// Posibles tipos de niveles
import { LevelClass } from '@/shared/Levels/LevelTypes';

export default function Home() {
return ( 
    <View style={styles.background}> 
        <View style={styles.optionGrid}>
            {/* TODO: Use named colors */}
            <LevelTypeButton levelType={"Vowel"} fill={"#09B930"} outline={"#025B74"} />
            <LevelTypeButton levelType={"SimpleConsonant"} fill={"#5A92FE"} outline={"#275CC3"}/>
            <LevelTypeButton levelType={"AmbiguousConsonant"} fill={"#EE5A9B"} outline={"#BA1F63"}/>
        </View>
    </View>
);
}

// Botón para seleccionar nivel
const LevelTypeButton = (props: {
    levelType : LevelClass, fill: ColorValue, outline: ColorValue}) => {
    return (
        <TouchableOpacity style={styles.iconButton}
            onPress={() => {
                router.replace({ pathname: "/LevelSelect", params: { type: props.levelType }});
            }}
        >
            <View style={[
                styles.buttonContainer, 
                {backgroundColor : props.fill, borderColor: props.outline}
            ]}>
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
        backgroundColor: "#FFEDD3", // TODO: Add named color
        width: "100%",
        height: "100%",
    },
    optionGrid : {
        width: "90%",
        height: "60%",
        rowGap: "10%",
        columnGap: "10%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        marginHorizontal: "auto",
    },
    iconButton: {
        width: "30%",
        height: "55%",
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
        elevation: 20
    },
    buttonText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        fontFamily: "arial",
        textAlign: "center",
    }
});