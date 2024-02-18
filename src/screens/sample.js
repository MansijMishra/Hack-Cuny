import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Sample = () => {
  const [title, setTitle] = useState("");
  const [capacity, setCapacity] = useState("");
  const [description, setDescription] = useState("");
  const [isAccessible, setIsAccessible] = useState(true);

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

  const handlePost = () => {
    // Code to handle the post action
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.newEvents}>Create a New Event</Text>
      </View>
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
        <TouchableOpacity onPress={toggleAccessibility} style={styles.accessibility}>
          <Text>Accessibility: {isAccessible ? "Yes" : "No"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePost} style={styles.postButton}>
          <Text style={styles.postText}>Post</Text>
        </TouchableOpacity>
        {/* <Text>Title: {title}</Text>
        <Text>Capacity: {capacity}</Text>
        <Text>Description: {description}</Text>
        <Text>Accessibility: {isAccessible ? "Yes" : "No"}</Text> */}
      </View>
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
    height: 60, // Increased height
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 40,
    marginLeft: 20,
    paddingHorizontal: 10,
    width: 300, // Increased width
    borderRadius: 15,
    backgroundColor: "lightgrey",
  },
  CapacityInput: {
    height: 60, // Increased height
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 20,
    paddingHorizontal: 10,
    width: 300, // Increased width
    borderRadius: 15,
    backgroundColor: "lightgrey",
  },
  DescriptionInput: {
    height: 120, // Increased height
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 20,
    paddingHorizontal: 10,
    width: 300, // Increased width
    borderRadius: 15,
    backgroundColor: "lightgrey",
  },
  accessibility: {
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: "lightgrey",
    borderRadius: 15,
    padding: 10,
    width: 300, // Increased width
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
