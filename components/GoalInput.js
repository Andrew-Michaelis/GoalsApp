import { View, TextInput, Button, StyleSheet, Modal, Image, } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {

  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
      <Image source={require('../assets/images/goal.png')} style={styles.image}/>
        <TextInput 
          placeholder='Your course goal!' 
          style={styles.textInput} 
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button 
              title='Cancel'
              onPress={props.onCancel}
              color='#da6455'
            />
          </View>
          <View style={styles.button}>
            <Button 
              title='Add Goal'
              onPress={addGoalHandler}
              color='#bfd756'
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    paddingBottom: 116,
    backgroundColor: '#CCC5B9',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#877f74',
    backgroundColor: '#E8E6E0',
    borderRadius: 6,
    width: '100%',
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex:1,
    marginTop: 16,
    marginHorizontal: 8,
    width: '50%',
  },
})