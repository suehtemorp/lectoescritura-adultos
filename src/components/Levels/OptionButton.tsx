import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const OptionButton = (props: {option : string, correct : Boolean, color: ColorValue}) => {
  return (
      <TouchableOpacity style={styles.iconButton}
            onPress={() => {
              if(props.correct == true){

              }else{

              }
            }}
        >
          <View
            contentFit="contain"
            style={[styles.buttonContainer, {backgroundColor : props.color}]}
          >
            <Text style={styles.buttonText}> 
                {props.option}
            </Text> 
          </View>
        </TouchableOpacity>
  );
  }

const styles = StyleSheet.create({
  
  iconButton: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonContainer: {
    width: "100%",
    height: "100%",
    borderWidth: 5,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden',
    borderColor: "black",
    backgroundColor: "white",
  },
  buttonText: {
    fontSize: 60,
    fontWeight: "bold",
  },
});

export default OptionButton;
