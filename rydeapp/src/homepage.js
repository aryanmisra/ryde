import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import * as ScreenOrientation from 'expo-screen-orientation';

//used this: https://reactnavigation.org/docs/getting-started

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
        

    }

    componentDidMount() {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    };


    render () {
        return(
            <View style={styles.container}>
                <Image source={require('../assets/camry.png')} style={styles.img}></Image>
                <Text style={styles.user}>{this.props.user}'s Camry</Text>

                <Button title="Setup Ryde" style={styles.button} type="outline"></Button>
                <Button title="Vehicle Info" style={styles.button} type="outline"></Button>
                <Button title="Settings" style={styles.button} type="outline"></Button>
                <Button
                    title="Camera"
                    onPress={() => this.props.navigation.navigate('Camera')}
                    style={styles.button}
                    
                />
            </View>
        );

    
    };

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'

    },

    img:{
        
        marginTop: -10,
        width: 300,
        height: 200,
        resizeMode: 'stretch'
    },

    user:{
        marginTop: -20,
        marginBottom: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000'
    },

    button:{
        marginTop: 20,
        width: 200,
        
    }
});