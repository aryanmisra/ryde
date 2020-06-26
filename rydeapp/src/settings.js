import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import * as ScreenOrientation from 'expo-screen-orientation';

//used this: https://reactnavigation.org/docs/getting-started

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
        

    }

    render () {
        return(<View></View>);

    };

}