import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NavBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navBarButton}>
          <Text style={styles.navBarButtonText}>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarButton}>
          <Text style={styles.navBarButtonText}>Button 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarButton}>
          <Text style={styles.navBarButtonText}>Button 3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    height: 60,
  },
  navBarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarButtonText: {
    fontSize: 16,
  },
});

export default NavBar;
