import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import { AsyncStorage, SafeAreaView, Image, StyleSheet, ScrollView, Alert } from 'react-native';

import logo from '../assets/logo.png';
import SpotList from '../components/SpotList';

export default function List() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('user').then(user_id => {
      const socket = socketio('http://192.168.0.5:3030', {
        query: { user_id }
      })

      socket.on('booking_response', booking => {
        Alert.alert(`Your request for the spot on ${booking.spot.company}, date ${booking.date} was ${booking.approved ? 'Accepted' : 'Rejected'}`);
      })
    })
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storagedTechs => {
      const techsArray = storagedTechs.split(',').map(tech => tech.trim());

      setTechs(techsArray);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logo} />

      <ScrollView>
        {techs.map(tech => (
          <SpotList key={tech} tech={tech} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  logo: {
    height: 32,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10
  }
});