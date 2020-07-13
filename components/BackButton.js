import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import BackButtonStyle from './styles/BackButtonStyle';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const BackButton = ({onPress}) => {
  return (
    <View style={BackButtonStyle.backButtonView}>
      <TouchableOpacity style={BackButtonStyle.backButton} onPress={onPress}>
        <Text style={BackButtonStyle.backButtonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
