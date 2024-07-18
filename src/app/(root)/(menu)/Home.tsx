import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import AppBanner from "@/assets/images/book_icon.png"

export default function Home() {
return ( 
    <View style={styles.background}> 
        <Image
            source={AppBanner}
            onError={(error) => {
                console.error("Error loading image:", error);
            }}

            contentFit="contain"
            contentPosition="center"
            style={styles.image}
        />
    </View>
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
        backgroundColor: "#f9faef",
    },
    image : {
        width: "70%",
        height: "70%",
    }
});