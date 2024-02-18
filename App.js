import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


import Home from './src/screens/home';
import Sample from './src/screens/sample';
import MapScreen from './src/screens/MapScreen'; // Import the MapScreen


const Tab =createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Entypo name="home" size={24} color={focused ? "#16247d": "#111"} />
                  <Text style={{fontSize: 12, color: "#16247d"}}>HOME</Text>
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="Events" 
          component={Sample} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 <Entypo name="wallet" size={24} color={focused ? "#16247d": "#111"} />
                  <Text style={{fonSize: 12, color: "#16247d"}}>Add Event</Text>
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
  name="Map" 
  component={MapScreen} 
  options={{
    tabBarIcon: ({focused}) => (
      <View style={{alignItems: "center", justifyContent: "center"}}> 
        <FontAwesome name="map-o" size={24} color={focused ? "#16247d": "#111"} />
        <Text style={{fontSize: 12, color: "#16247d"}}>Map</Text>
      </View>
    ),
  }}
/>

        </Tab.Navigator>

        
    </NavigationContainer>
  );
}