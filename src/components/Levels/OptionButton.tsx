//Dependencias
import { TouchableOpacity, ToastAndroid, StyleSheet, Text, View } from 'react-native';

const OptionButton = (props: {option : string, correct : Boolean, color: ColorValue}) => {
  //Fucniones para dar retroalimentacion inmediata
  function showToastCorrect() {
    ToastAndroid.show('✔️ Correcto!', ToastAndroid.SHORT);
  }
  function showToastError() {
    ToastAndroid.show('❌ Incorrecto!', ToastAndroid.SHORT);
  }
  return (
    <TouchableOpacity style={styles.iconButton}
      //Eleccion del mensaje 
      onPress={() => {
        if(props.correct == true){
          showToastCorrect();
        }else{
          showToastError();
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

//Estilos
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
