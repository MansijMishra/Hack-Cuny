import { SafeAreaView, View, Text, StyleSheet} from 'react-native'
import React from 'react'
import NavBar from '../components/navbar'

const Home = () => {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>Main Content</Text>
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
  

export default Home;