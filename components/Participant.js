import React, {useState} from 'react';
import {Switch, View, Text, Vibration} from 'react-native';
import ParticipantStyle from './styles/ParticipantStyle';

const Participant = ({id, name, confirmed, onValueChange}) => {
  const [isEnabled, setIsEnabled] = useState(confirmed);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    if (isEnabled) Vibration.vibrate(500);
    onValueChange(id);
  };

  return (
    <View style={ParticipantStyle.participantView}>
      <Text style={ParticipantStyle.participantText}>{name}</Text>
      <View style={ParticipantStyle.participantSwitch}>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={confirmed ? '#D1D1D1' : '#D1D1D1'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

export default Participant;
