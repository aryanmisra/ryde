import React from 'react';

import CameraPage from './src/camerapage';
import HomePage from './src/homepage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    /* adding props to stack.screen components: 

    <Stack.Screen name="Home">
      {props => <HomeScreen {...props} extraData={someData} />}
    </Stack.Screen>

    https://reactnavigation.org/docs/hello-react-navigation
    */
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" >

            <Stack.Screen name="Home" options={
              {headerStyle: {backgroundColor: '#4b5ec9'},
              headerTintColor: '#fff',
              headerTitleStyle: {fontWeight: 'bold'}
              }}>

              {props => <HomePage {...props} user={"Navid"} />}

            </Stack.Screen>

            <Stack.Screen name="Camera" component={CameraPage} />


      
          </Stack.Navigator>
        </NavigationContainer>
      );
  };
};