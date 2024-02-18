import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker, Callout }from 'react-native-maps';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';
import { useEffect } from 'react';
import { supabase } from '../supabase/supabase';
const MapScreen = () => {

  const [Events, setEvents] = useState([]);

  const getEvents = async  () => {
    let { data: data, error } = await supabase
    .from('Events')
    .select('*')
    setEvents(data)
  }

  useEffect(() => {
    getEvents()
  }, []);

  useEffect(() => {
    console.log("Events updated:", Events); // This logs the updated state.
  }, [Events]); // This triggers whenever 'Events' changes.
  
  return (
    <MapView
    style={{ flex: 1 }}
    userInterfaceStyle="dark"
    initialRegion={{
      latitude: 40.730610,
      longitude: -73.935242,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}>
    {Events.map(event => (
      <Marker
        key={event.id} // Use event id as the key
        coordinate={{ latitude: event.lat, longitude: event.lng }}
        title={event.title}
        description={event.description}>
        <View style={styles.marker}>
          <Text style={styles.markerText}>📍</Text>
        </View>
        <Callout>
          <View style={styles.calloutView}>
            <Text style={styles.calloutTitle}>{event.title}</Text>
            <Text style={styles.calloutCap}>Event Capacity: {event.capacity}</Text>
            <Text style={styles.calloutDescription}>{event.description}</Text>
          </View>
        </Callout>
      </Marker>
    ))}
  </MapView>
);
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  marker: {
    padding: 5,
    borderRadius: 5,
  },
  markerText: {
    color: "#fff",
    fontWeight: "bold",
  },
  calloutView: {
    width: 150, // Adjust the width of the callout
    padding: 10,
  },
  calloutTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  calloutDescription: {
    fontSize: 14,
  },
  calloutCap: {
    fontSize: 14,
  },
});


export default MapScreen;