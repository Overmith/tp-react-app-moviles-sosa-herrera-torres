import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import CreateEventStyle from '../components/styles/CreateEventStyle';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const Item = ({title}) => (
  <View>
    <Text style={CreateEventStyle.participantItem}>{title}</Text>
  </View>
);

const AddedParticipant = ({participants}) => {
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <SafeAreaView>
      <ScrollView style={{height: '50%'}}>
        <FlatList
          data={participants}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddedParticipant;
