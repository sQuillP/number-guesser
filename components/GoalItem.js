import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';


// pressable component should be the standard for wrapping pressable
// componetns that are not buttons.

function GoalItem(props) {



    return (
        
            <View style={styles.goalItem}> 
                <Pressable 
                style= {
                    ({pressed})=> {
                        return pressed && styles.pressedItem
                    }
                }
                android_ripple={{color: "#dddddd"}} onPress={props.deleteGoalItem.bind(this, props.id)}>
                    <Text
                    style={styles.goalText} 
                    >{props.text}</Text>
                </Pressable>
            </View>
    );
}


export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin:8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
      },
      pressedItem: {
        opacity: 0.5
      },
      goalText: {
        color: 'white',
        padding: 8,
      }
})