import 'react-native-gesture-handler';

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './views/Home';
import ConfirmedParticipants from './views/ConfirmedParticipants';
import CreateEvent from './views/CreateEvent';

const Stack = createStackNavigator();

const App = () => {
  // data guarda la informacion de los eventos y sus participantes.
  const [events, setEvents] = React.useState([]);
  const [eventCount, setEventCount] = React.useState(0);

  const saveEvent = event => {
    event.participants.map(participant => {
      participant.confirmed = false;
    });
    setEvents([...events, event]);
    setEventCount(eventCount + 1);
  };

  const toggleConfirmParticipant = (eventId, participantId) => {
    let newStateEvents = events;
    console.log('Eventos: ');
    console.log(newStateEvents);
    let selectedEvent = newStateEvents.filter(event => eventId == event.id)[0];
    console.log('Evento encontrado: ');
    console.log(selectedEvent);
    let participant = selectedEvent.participants.filter(
      participant => participantId == participant.id,
    )[0];
    console.log('Participante encontrado');
    console.log(participant);
    let value = participant.confirmed;

    // Niega el valor del confirmed

    newStateEvents
      .filter(event => eventId == event.id)[0]
      .participants.filter(
        participant => participantId == participant.id,
      )[0].confirmed = !value;

    console.log(events);
    setEvents(newStateEvents);

    console.log('----------');
    console.log(events);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{title: 'Inicio'}}>
          {props => <Home {...props} events={events} />}
        </Stack.Screen>
        <Stack.Screen name="CreateEvent" options={{title: 'Nuevo evento'}}>
          {props => (
            <CreateEvent
              {...props}
              saveEvent={saveEvent}
              eventCount={eventCount}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="ConfirmedParticipants"
          options={{title: 'Participantes'}}>
          {props => (
            <ConfirmedParticipants
              {...props}
              events={events}
              toggleConfirmParticipant={toggleConfirmParticipant}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
