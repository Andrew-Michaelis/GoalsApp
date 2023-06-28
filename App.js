import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem.js';
import GoalInput from './components/GoalInput.js';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()}
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal)=> goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#BADA55' onPress={startAddGoalHandler}/>
      <GoalInput 
        onAddGoal={addGoalHandler} 
        visible={modalIsVisible} 
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList // FlatList specifically looks for a key
          keyExtractor={(item, index)=> {return item.id}} // is used to assign keys when you are provided an object with a non-key identifier
          data={courseGoals} 
          renderItem={(itemData) => {
            return (
              <GoalItem 
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }} 
          alwaysBounceVertical={false}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    // backgroundColor: '#877f74',
    flex: 1,
    paddingTop: 24,
  },
  goalsContainer: {
    flex: 5,
    paddingTop: 16,
  },
  // goalButton: {
  //   backgroundColor: '#bfd756',
  //   color: '#fff',
  // }
});
