import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import CreateEventStyle from './styles/CreateEventStyle';

const SaveEventButton = ({parseEvent}) => {
  return (
    <View>
      <TouchableOpacity
        style={CreateEventStyle.saveButton}
        onPress={() => {
          parseEvent();
        }}>
        <Text style={CreateEventStyle.saveButtonText}>Agregar Evento</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SaveEventButton;
