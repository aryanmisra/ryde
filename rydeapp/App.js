import React from 'react';

import CameraPage from './src/camerapage';
import HomePage from './src/homepage';
import Settings from './src/settings';
import VehicleInfo from './src/vehicleinfo';
import SetupPage from './src/setuppage';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
      return (
        <NavigationContainer>

          <Drawer.Navigator initialRouteName="Home" drawerStyle={styles.drawer} drawerContentOptions={item} >

            <Drawer.Screen name=" " component={HomePage} onPress={null} options={{drawerIcon: ({focused, size}) => (
            <Image source={require('./assets/rydetext.png')} style={styles.img}></Image>
          )}}/>

            <Drawer.Screen name="Home">
              {props => <HomePage {...props} user={"Navid"} />}
            </Drawer.Screen>

            <Drawer.Screen name="Setup Ryde" component={SetupPage} />

            <Drawer.Screen name="Vehicle Info" component={VehicleInfo} />

            <Drawer.Screen name="Settings" component={Settings} />

            <Drawer.Screen name="Camera" component={CameraPage} />


          </Drawer.Navigator>
        </NavigationContainer>
      );
  };
};


{/* All styling could not be completed in styles as some attributes are based off jsx objects */}
const styles = StyleSheet.create({
  drawer:{
    backgroundColor: '#000',
    
  },

  img:{
    width: 260,
    height: 100,
    margin: 'auto',
    marginBottom: 20,

  }
});

const item = {
  activeTintColor:"#fff", 
  inactiveTintColor: '#fff', 
  activeBackgroundColor: '#4f4f4f', 
  inactiveBackgroundColor: '#0f0f0f'
};