import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Alert, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../screens/Dashboard';
import Agreement from '../screens/Agreement';
import Company from '../screens/Company';
import Documents from '../screens/Documents';
import Profile from '../screens/Profile';
import Schedule from '../screens/Schedule';
import Statement from '../screens/Statement';
import Vacancy from '../screens/Vacancy';
import Vetting from '../screens/Vetting';
import Clock from '../screens/Clock';

const Drawer = createDrawerNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          drawerStyle: {
            marginTop: 55,
          },
          headerStyle: {
            backgroundColor: '#007d9c',
          },
          headerTintColor: 'white',
          headerTitle: () => (
            <Image
              source={require('../assets/logo.png')} 
              style={{ width: 160, height: 40 }} 
            />
          ),
        }}>
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Documents" component={Documents} />
        <Drawer.Screen name="Company" component={Company} />
        <Drawer.Screen name="Clock" component={Clock} />
        <Drawer.Screen name="Schedule" component={Schedule} />
        <Drawer.Screen name="Vacancy" component={Vacancy} />
        <Drawer.Screen name="Vetting" component={Vetting} />
        <Drawer.Screen name="Agreement" component={Agreement} />
        <Drawer.Screen name="Statement" component={Statement} />

      </Drawer.Navigator>
    </NavigationContainer>

  );
};

export default App;