import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Sample = () => {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>Event Signup</Text>
        </View>
      </View>
    )
  }
  
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
  });

export default Sample