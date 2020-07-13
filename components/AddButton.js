import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import AddButtonStyle from './styles/AddButtonStyle';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AddButton = ({onPress}) => {
  return (
    <View style={AddButtonStyle.addButtonView}>
      <TouchableOpacity style={AddButtonStyle.addButton} onPress={onPress}>
        <Text style={AddButtonStyle.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;
