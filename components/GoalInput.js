import React, {useState} from 'react';
import { 
  StyleSheet, 
  View, 
  TextInput,
  Button, 
  Modal,
  Image
} from 'react-native';


function GoalInput(props) {

    const [enteredGoalText,setEnteredGoalText] = useState('');
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      }

    function addGoalHandler() {
        props.addGoalHandler(enteredGoalText);
        setEnteredGoalText('');
    }


    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.jpg")}/>
            <TextInput 
            onChangeText={goalInputHandler}
            style={styles.textInput}
            placeholder='Your course goal!!'
            value={enteredGoalText}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button 
                color="#b180f0"
                onPress={addGoalHandler}
                title='Add Goal'/>
              </View>
              <View style={styles.button}>
                <Button 
                title='Cancel' 
                onPress={props.endAddGoalHandler}
                color="#f31282"

                />
              </View>
            </View>
        </View>
      </Modal>
    )
}

export default GoalInput;


const styles = StyleSheet.create({
  inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems:"center",
      padding:16,
      backgroundColor: "#311b6b"
    },
    buttonContainer:{
      marginTop: 16,
      flexDirection: 'row'
    },  
    textInput: {
      borderWidth: 1,
      borderColor: "#cccccc",
      width:'100%',
      padding: 16,
      backgroundColor: '#e4d0ff',
      borderColor: '#e4d0ff',
      color:"#120438",
      borderRadius: 6,

    },
    button: {
      width: 100,
      marginHorizontal:8
    },
    image: {
      width: 100,
      height: 100,
      margin: 20
    }
})