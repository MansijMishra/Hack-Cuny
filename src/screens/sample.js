import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { supabase } from '../supabase/supabase';

const Sample = () => {
  const [title, setTitle] = useState("");
  const [capacity, setCapacity] = useState("");
  const [description, setDescription] = useState("");
  const [isAccessible, setIsAccessible] = useState(true);
  const [address, setAddress] = useState("");
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleCapacityChange = (text) => {
    setCapacity(text);
  };

  const handleDescriptionChange = (text) => {
    setDescription(text);
  };

  const toggleAccessibility = () => {
    setIsAccessible(!isAccessible);
  };

  const handleAddressChange = (data, details = null) => {

    setLat(details.geometry.location.lat);
    setLong(details.geometry.location.lng);

    setAddress(data.description);
    console.log(long);
    console.log(lat);
  };

  const handlePost = async () => {
    // Code to handle the post action
    const { error } = await supabase
    .from('Events')
    .insert({ title: title, description: description, lng: long, lat: lat, capacity: capacity, is_accessible: isAccessible })
    console.log(eventData);
    // Further processing logic here, like sending data to backend
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.newEvents}>Create a New Event</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.content}>
        <TextInput
          style={styles.TitleInput}
          onChangeText={handleTitleChange}
          value={title}
          placeholder="Enter event title"
        />
        <TextInput
          style={styles.CapacityInput}
          onChangeText={handleCapacityChange}
          value={capacity}
          placeholder="Enter event capacity"
        />
        <TextInput
          style={styles.DescriptionInput}
          onChangeText={handleDescriptionChange}
          value={description}
          placeholder="Enter event description"
          multiline={true}
          numberOfLines={4}
        />
        <GooglePlacesAutocomplete
          fetchDetails={true}
          placeholder="Address"
          onPress={handleAddressChange}
          query={{
            key: 'AIzaSyB_d5kEvcHC0QWfoRSk_KO0B2aLdUbbWbw',
            language: 'en',
          }}
          styles={{
            textInputContainer: {
              backgroundColor: 'lightgrey',
              marginTop: 20,
              marginLeft: 20,
              borderRadius: 15,
              width: 300,
            },
            textInput: {
              height: 40,
            },
          }}
        />
        <TouchableOpacity onPress={toggleAccessibility} style={styles.accessibility}>
          <Text>Accessibility: {isAccessible ? "Yes" : "No"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePost} style={styles.postButton}>
          <Text style={styles.postText}>Post</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 20,
  },
  newEvents: {
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
  },
  content: {
    flex: 1,
  },
  TitleInput: {
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 20,
    paddingHorizontal: 10,
    width: 300,
    borderRadius: 15,
    backgroundColor: "lightgrey",
  },
  CapacityInput: {
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 20,
    paddingHorizontal: 10,
    width: 300,
    borderRadius: 15,
    backgroundColor: "lightgrey",
  },
  DescriptionInput: {
    height: 120,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 20,
    paddingHorizontal: 10,
    width: 300,
    borderRadius: 15,
    backgroundColor: "lightgrey",
  },
  accessibility: {
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: "lightgrey",
    borderRadius: 15,
    padding: 10,
    width: 300,
    alignItems: "center",
  },
  postButton: {
    backgroundColor: "darkred",
    marginTop: 20,
    marginLeft: 20,
    width: 300,
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
  },
  postText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Sample;
