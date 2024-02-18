import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker, Callout }from 'react-native-maps';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';
import { useEffect } from 'react';
import { supabase } from '../supabase/supabase';
const MapScreen = () => {

  const getEvents = async  () => {
    let { data: Events, error } = await supabase
    .from('Events')
    .select('*')
    return Events
  }

  useEffect(() => {
    getEvents()
      .then((Events) => {
        console.log("event", Events);
      });
  }, []);


  const eventsData = [
    {
      id: 1,
      latitude: 40.730610,
      longitude: -73.935242,
      title: "Hackathon",
      description: "Come Join us for Hack CUNY !",
      capacity: 200
    },
    {
      id: 2,
      latitude: 40.730610,
      longitude: -73.835242,
      title: "Event 2",
      description: "Description for Event 2",
      capacity: 15
    },
    // Add more events as needed
  ];

  return (
    <MapView
    style={{ flex: 1 }}
    initialRegion={{
      latitude: 40.730610,
      longitude: -73.935242,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}>
    {eventsData.map(event => (
      <Marker
        key={event.id} // Use event id as the key
        coordinate={{ latitude: event.latitude, longitude: event.longitude }}
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