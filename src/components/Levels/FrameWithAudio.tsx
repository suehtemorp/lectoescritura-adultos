import { StyleProp, StyleSheet, View, ViewStyle, Pressable } from "react-native";
import AudioButton from "@/components/Levels/AudioButton";
import { Children, PropsWithChildren } from "react";
import { AVPlaybackSource } from "expo-av";

type ObjectWithAudioProps = {
    audio: AVPlaybackSource, 
    style?: StyleProp<ViewStyle>,
    onTap?: () => void,
};

const FrameWithAudio = (props: PropsWithChildren<ObjectWithAudioProps>) => {
    const originalContent = Children.only(props.children);
    return (
    <View style={props.style ?? styles.defaultViewStyle}>
        <View style={styles.column}>
            {/* Contenido presionable */}
            <Pressable style={styles.tapArea} onPress={props.onTap}>
                {originalContent}
            </Pressable>
            { /* Botón de audio description */}
            <AudioButton audio={props.audio} style={styles.soundIcon}/>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    defaultViewStyle: {
        width: "100%", 
        height: "100%",

        alignItems: "center",
        justifyContent: "center",
    },
    tapArea: {
        width: "100%",
        height: "60%",

        alignItems: "center",
        justifyContent: "center",
    },
    column: {
        width: "100%",
        height: "100%",

        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        rowGap: "5%",
    },
    soundIcon: {
        height: "30%",
        aspectRatio: 1,
    }
});

export default FrameWithAudio;