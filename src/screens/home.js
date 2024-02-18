import { FlatList, StyleSheet, View, Text } from 'react-native';
import React, { useState, useEffect } from 'react'
import NavBar from '../components/navbar'
import { supabase } from '../supabase/supabase';
import EventCard from '../components/EventCard';

const Home = () => {
  const [events, setEvents] = useState([]);

    // Fetch events from your database and set them in state
    const getEvents = async  () => {
      let { data: data, error } = await supabase
      .from('Events')
      .select('*')
      setEvents(data)
    }
  
    useEffect(() => {
      getEvents()
    }, []);

    return (
      <FlatList
      data={events}
      renderItem={({ item }) => <EventCard event={item} />}
      keyExtractor={(item) => item.id.toString()}
      // Add more FlatList props as needed, like ListHeaderComponent, etc.
      contentContainerStyle={styles.listContainer}
    />
  );
};
  
  const styles = StyleSheet.create({
    listContainer: {
      paddingBottom: 48, // Add padding at the bottom for better spacing
      paddingTop: 48, // Add padding at the top for better spacing
      // You may want to adjust these values based on your layout and design
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
     
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  

export default Home;