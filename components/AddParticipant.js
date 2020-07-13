import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import CreateEventStyle from '../components/styles/CreateEventStyle';

const AddParticipant = ({onPress}) => {
  const [value, onChangeText] = React.useState('Nuevo Participante');

  return (
    <View style={CreateEventStyle.addParticipantButtonView}>
      <TextInput
        style={CreateEventStyle.addParticipantInput}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <TouchableOpacity
        style={CreateEventStyle.addParticipantButton}
        onPress={() => onPress(value)}>
        <Text style={CreateEventStyle.addParticipantButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddParticipant;
