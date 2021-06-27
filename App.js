import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/Home'
import ProfileScreen from './src/screens/Users'
import MovieScreen from './src/screens/Movies'
import RecoScreen from './src/screens/Recomendacion'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        overlayColor="#C5922790"
        drawerStyle={{
          backgroundColor: "#7A1F24",
          width: 250,
        }}
        drawerContentOptions={{
          labelStyle: {
            color: "#C59227",
          }
        }}

        screenOptions={{
          headerShown: true,
          swipeEnabled: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#7A1F24'
          },
          headerTintColor: "#C59227"
        }}
      >
        <Drawer.Screen
          name="Screen_A"
          component={HomeScreen}
          options={{
            title: "Inicio",
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="home"
                size={focused ? 25 : 20}
                color={focused ? "#C59227" : "#999999"}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Screen_B"
          component={ProfileScreen}
          options={{
            title: "Usuarios",
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="user"
                size={focused ? 25 : 20}
                color={focused ? "#C59227" : "#999999"}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Screen_C"
          component={MovieScreen}
          options={{
            title: "Peliculas",
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="film"
                size={focused ? 25 : 20}
                color={focused ? "#C59227" : "#999999"}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Screen_D"
          component={RecoScreen}
          options={{
            title: "Recomendación",
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="ticket-alt"
                size={focused ? 25 : 20}
                color={focused ? "#C59227" : "#999999"}
              />
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;