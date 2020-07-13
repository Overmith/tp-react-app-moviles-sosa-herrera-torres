import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import EventStyle from './styles/EventStyle';
import ConfirmedParticipants from '../views/ConfirmedParticipants';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Event = ({id, name, cantActual, cantTotal, navigation}) => {
  return (
    <View style={EventStyle.eventView}>
      <TouchableOpacity
        style={EventStyle.eventButton}
        onPress={() =>
          navigation.navigate('ConfirmedParticipants', {
            eventId: id,
          })
        }>
        <Text style={EventStyle.eventButtonText}>
          {name + ' (' + cantActual + '/' + cantTotal + ') Participantes'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Event;
