//import liraries
import React, {useState} from 'react';
import { View, Text, StyleSheet , TextInput ,Button,TouchableOpacity} from 'react-native';
import uuid from 'react-native-uuid';


// create a component
const Todo = () => {
    const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim().length>3) {
      setTodos([...todos, { text: newTodo.trim(), completed: false }]);
      setNewTodo('');
    }
  };

    const handleCompleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index] = { ...newTodos[index], completed: !newTodos[index].completed };
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };



    return (
        <View style={styles.container}>
        <Text style={styles.title}>Todo List</Text>
         {/* input part */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add a new todo"
            value={newTodo}
            onChangeText={setNewTodo}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>

        <Text style={{color:"gray"}}>*Task must be more than 3 characters *</Text>
        <View style={styles.listContainer}>
          {todos.map((todo, index) => (
            <View key={index} style={[styles.todoItem, { backgroundColor: todo.completed ? '#eee' : '#fff' }]}>
              <TouchableOpacity onPress={() => handleCompleteTodo(index)}>
                <Text style={[styles.todoText, {textDecorationLine: todo.completed ? 'line-through' : 'none' }]}>
                  {todo.text}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteTodo(index)}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}

        </View>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
      },
      title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color:"#314c78"
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginRight: 10,
      },
      addButton: {
        backgroundColor: '#314c78',
        padding: 10,
        borderRadius: 5,
      },
      addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
      listContainer: {
        flex: 1,
        width: '100%',
      },
      todoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        color:"#6a040f" ,
        fontWeight:"bold",
        marginTop: 15
      },
      todoText: {
        fontSize: 18,
      },
      deleteButton: {
        backgroundColor: '#6a040f',
        padding: 8,
        borderRadius: 8,
        marginLeft:100
      },
      deleteButtonText: {
        color: '#fff',
      },




    });


//make this component available to the app
export default Todo;
