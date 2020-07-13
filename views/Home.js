import React from 'react';
import {View, Text} from 'react-native';
import Event from '../components/Event';
import AddButton from '../components/AddButton';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Home = ({navigation, events}) => {
  const renderEvent = event => {
    return (
      <Event
        id={event.id}
        name={event.title}
        cantActual={
          event.participants.filter(participant => participant.confirmed).length
        }
        cantTotal={event.participants.length}
        navigation={navigation}
      />
    );
  };

  return (
    <View>
      {events.map(event => renderEvent(event))}
      <AddButton onPress={() => navigation.navigate('CreateEvent')} />
    </View>
  );
};

export default Home;
