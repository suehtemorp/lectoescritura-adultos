
import { View, StyleSheet, Text } from "react-native";



export default function Gallery() {
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