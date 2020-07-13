import React from 'react';
import {View, Text, Button} from 'react-native';
import AddParticipant from '../components/AddParticipant';
import AddedParticipant from '../components/AddedParticipant';
import EventNameForm from '../components/EventNameForm';
import SaveEventButton from '../components/SaveEventButton';
import CreateEventStyle from '../components/styles/CreateEventStyle';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const CreateEvent = ({navigation, saveEvent, eventCount}) => {
  const [participants, setParticipants] = React.useState([]);
  const [participantCount, setParticipantCount] = React.useState(0);
  const [eventName, setEventName] = React.useState('');

  const addParticipant = name => {
    setParticipants(
      participants.concat({
        id: participantCount,
        title: name,
      }),
    );
    setParticipantCount(participantCount + 1);
  };

  const parseEvent = () => {
    saveEvent({
      id: eventCount,
      title: eventName,
      participants: participants,
    });
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>{JSON.stringify(parseEvent)}</Text>
      <Text style={CreateEventStyle.newEventTitle}>Nombre del evento</Text>
      <EventNameForm setEventName={setEventName} eventName={eventName} />
      <Text style={CreateEventStyle.newEventTitle}>Participantes</Text>
      <AddedParticipant participants={participants} />
      <AddParticipant onPress={addParticipant} />
      <SaveEventButton parseEvent={parseEvent} />
    </View>
  );
};

export default CreateEvent;
