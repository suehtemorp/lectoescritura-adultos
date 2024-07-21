//Dependencias
import { View, StyleSheet, Image, ImageSourcePropType } from 'react-native';

type ImageContainerProps = { 
  source: ImageSourcePropType
} 

const ImageContainer = (props: ImageContainerProps) => {
    return (
      <View style={styles.imgContainer}>
        <Image
          source={props.source}
          style={styles.buttonImage}
        />
      </View>
    );
  }

//EStilos
const styles = StyleSheet.create({
  imgContainer: {
    backgroundColor: "#ffffff",
    width: 140,
    height: 140,
    marginBottom: 10,
    borderWidth: 5,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonImage: {
    width: "90%",
    height: "90%",
    borderRadius: 25,
  },
});

export default ImageContainer;
