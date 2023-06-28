import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable 
        android_ripple={{color: '#66615b', borderless: true}} 
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed})=> pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#877f74',
    backgroundColor: '#E8E6E0',
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    padding: 8,
    color: '#3b4a60'
    // #66615b for hint-colors
  },
});