import { Text, View, StyleSheet, TouchableOpacity, ColorValue } from 'react-native';

import { Image } from 'expo-image';
import LockedLevelIcon from "@/assets/images/locked_level_icon.svg"

import { router } from 'expo-router';

export default function SelectLevel () {

return (
    <View style={styles.background}>
        <View style={styles.iconGrid}>
            <LevelButton level={1} color={"#7bd785"} />
            <LevelButton level={2} color={"#d7b27b"} />
            <LevelButton level={3} color={"#d7917b"} />
            <LevelButton level={"locked"} color={"grey"} />
            <LevelButton level={"locked"} color={"grey"} />
            <LevelButton level={"locked"} color={"grey"} />
        </View>
    </View>
);
}

const LevelButton = (props: {level : number | "locked", color: ColorValue}) => {
return (
    <TouchableOpacity style={styles.iconButton}
          onPress={() => {
            if (props.level !== "locked") {
                router.navigate("SelectLevel/Level1Demo");
            }
          }}
      >
        <View
          contentFit="contain"
          style={[styles.buttonContainer, {backgroundColor : props.color}]}
        >
            {props.level === "locked" ? (
                <Image
                    source={LockedLevelIcon}
                    style={styles.buttonImage}
                />
                ) : (
                    <Text style={styles.buttonText}> 
                        {props.level}
                    </Text>
                )
            }
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
    iconButton: {
        width: 100,
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
    buttonImage : {
        width: "80%",
        height: "80%",
    },
    buttonText: {
        fontSize: 60,
        fontWeight: "bold",
    }
});