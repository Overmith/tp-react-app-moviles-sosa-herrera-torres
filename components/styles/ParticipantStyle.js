import React from 'react';
import {StyleSheet} from 'react-native';

const ParticipantStyle = StyleSheet.create({
  participantView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  participantText: {
    textAlignVertical: 'center',
    width: '80%',
    fontSize: 20,
    paddingLeft: 30,
  },
  participantSwitch: {
    width: '15%',
    alignSelf: 'center',
  },
});

export default ParticipantStyle;
