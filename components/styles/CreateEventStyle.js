import React from 'react';
import {StyleSheet} from 'react-native';

const CreateEventStyle = StyleSheet.create({
  createEventView: {
    flexDirection: 'row',
  },
  newEventTitle: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 5,
    color: '#333',
    fontWeight: 'bold',
  },
  addedParticipant: {
    fontSize: 20,
  },
  eventInputs: {
    height: 40,
    width: '90%',
    borderColor: '#CDCDCD',
    backgroundColor: '#FFF',
    alignSelf: 'center',
    borderWidth: 1,
  },
  eventInputsOnFocus: {
    height: 40,
    width: '90%',
    borderColor: '#00F',
    backgroundColor: '#FFF',
    alignSelf: 'center',
    borderWidth: 3,
  },
  saveButton: {
    backgroundColor: 'orange',
    width: '80%',
    alignSelf: 'center',
    height: 50,
    marginTop: 30,
    borderColor: '#FF8500',
    borderWidth: 1,
    borderRadius: 4,
  },
  saveButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 25,
    height: 50,
    textAlignVertical: 'center',
    borderWidth: 1,
    borderColor: '#FF9500',
  },
  addParticipantInput: {
    width: '60%',
    height: 40,
    borderColor: '#CDCDCD',
    backgroundColor: '#FFF',
    alignSelf: 'center',
    borderWidth: 1,
    marginHorizontal: 10,
  },
  addParticipantButton: {
    width: 40,
    height: 40,
    backgroundColor: '#21940d',
    borderRadius: 50,
  },
  addParticipantButtonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 27,
    height: 27,
    textAlignVertical: 'center',
  },
  addParticipantButtonView: {
    marginTop: 20,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  participantItem: {
    marginLeft: 10,
    marginVertical: 5,
    fontSize: 15,
  },
});

export default CreateEventStyle;
