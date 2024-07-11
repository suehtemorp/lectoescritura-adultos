import { Text, View, StyleSheet, TouchableOpacity, ColorValue } from 'react-native';

import { router } from 'expo-router';

type LevelType = "Vocal" | "Simple" | "Ambigua";

export default function SelectExcercise () {

return (
    <View style={styles.background}>
        <View style={styles.optionGrid}>
            <LevelTypeButton level={"Vocal"} color={"#7bd785"} />
            <LevelTypeButton level={"Simple"} color={"#d7b27b"} />
            <LevelTypeButton level={"Ambigua"} color={"#d7917b"} />
        </View>
    </View>
);
}

const LevelTypeButton = (props: {level : LevelType, color: ColorValue}) => {
return (
    <TouchableOpacity style={styles.iconButton}
          onPress={() => {
            router.navigate("SelectLevel/" + props.level);
          }}
      >
        <View style={[styles.buttonContainer, {backgroundColor : props.color}]}>
            <Text style={styles.buttonText}> 
                {
                    props.level === "Vocal" ? "Vocales" : (
                        props.level === "Simple" ?
                        "Consonantes simples" :
                        "Consonantes ambiguas"
                    )
                }
            </Text>
        </View>
      </TouchableOpacity>
);
}

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