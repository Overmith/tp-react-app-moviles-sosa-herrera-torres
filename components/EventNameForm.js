import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import CreateEventStyle from '../components/styles/CreateEventStyle';

const EventNameForm = ({setEventName, eventName}) => {
  return (
    <View>
      <TextInput
        style={CreateEventStyle.eventInputs}
        onChangeText={text => setEventName(text)}
        value={eventName}
      />
    </View>
  );
};

export default EventNameForm;
