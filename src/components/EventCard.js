import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';

const EventCard = ({ event }) => {
    const onAttendPress = (event) => {
        // Placeholder for your logic to handle attending an event
        console.log("Attending event:", event.title);
        // Update the event in the database, show a confirmation, etc.
      };
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.description}>{event.description}</Text>
      {/* Footer container for capacity and button */}
      <View style={styles.footer}>
        <Text style={styles.capacity}>Capacity: {event.capacity}</Text>
        {/* This button will now be on the right and green */}
        <TouchableOpacity style={styles.attendButton} onPress={() => onAttendPress(event)}>
          <Text style={styles.attendButtonText}>Attend</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // This keeps items spaced on both ends
        alignItems: 'center',
        
      },
      capacity: {
        fontSize: 12,
        color: '#666',
        padding: 2
      },
      attendButton: {
        backgroundColor: 'green', // Change the button color to green
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
      },
      attendButtonText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
      },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 2
  },
  description: {
    fontSize: 14,
    color: '#666',
    padding: 2
  },
  // Add more styles as needed
});

export default EventCard;