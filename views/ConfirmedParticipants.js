import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Participant from '../components/Participant';
import AddButton from '../components/AddButton';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BackButton from '../components/BackButton';

const ConfirmedParticipants = ({
  route,
  navigation,
  events,
  toggleConfirmParticipant,
}) => {
  const eventId = route.params.eventId;
  let selectedEvent = events.filter(event => event.id == eventId)[0];

  const onValueChange = participantId => {
    toggleConfirmParticipant(selectedEvent.id, participantId);
  };

  const renderParticipant = participant => {
    return (
      <Participant
        id={participant.id}
        name={participant.title}
        eventId={eventId}
        confirmed={participant.confirmed}
        onValueChange={onValueChange}
      />
    );
  };

  return (
    <SafeAreaView>
      <ScrollView style={{height: '70%'}}>
        {selectedEvent.participants.map(participant =>
          renderParticipant(participant),
        )}
      </ScrollView>
      <BackButton onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  );
};

export default ConfirmedParticipants;
