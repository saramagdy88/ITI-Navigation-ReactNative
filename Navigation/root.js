//import liraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Todo from '../Screens/todo';
import Contacts from '../Screens/Contacts';
import routs from '../Common/routes';



const stack = createNativeStackNavigator()
const Root = () => {
    return (
//wrap screens
    <stack.Navigator>
       <stack.Screen name={routs.contacts} component={Contacts} 
       options={{
        headerTitle: 'Contacts' ,
       }}></stack.Screen>
       <stack.Screen name={routs.todo} component={Todo}
        options={{
            headerTitle: 'Todo-List' ,
           }}
       ></stack.Screen>
    </stack.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Root;

