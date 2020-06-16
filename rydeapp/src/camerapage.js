import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image } from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';

import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as ScreenOrientation from 'expo-screen-orientation';
import {Ionicons} from '@expo/vector-icons';

import styles from './styles';


// import Toolbar from './toolbar'

export default class CameraPage extends React.Component {
    camera = null;
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,
            flash: Camera.Constants.FlashMode.off,
            camSide: Camera.Constants.Type.back,
        };
        
      }
    
    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');

        
        this.setState({ hasCameraPermission });

        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    };

    handleFlash = () => {
        if (this.state.flash === Camera.Constants.FlashMode.off){
            this.setState({
                flash: Camera.Constants.FlashMode.on
            });
        }
        else if (this.state.flash === Camera.Constants.FlashMode.on){
            this.setState({
                flash: Camera.Constants.FlashMode.off
            });
        }
    };

    handleCamSwitch = () => {
        if (this.state.camSide === Camera.Constants.Type.back){
            this.setState({
                camSide: Camera.Constants.Type.front
            });
        }
        else if (this.state.camSide === Camera.Constants.Type.front){
            this.setState({
                camSide: Camera.Constants.Type.back
            });
        }
    };

    render () {
        const { hasCameraPermission } = this.state;

        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
        }

        return (
            <React.Fragment>
                <View>
                    <Camera
                        flashMode={this.state.flash}
                        type={this.state.camSide}
                        style={styles.preview}
                        ref={camera => this.camera = camera}
                    />
                </View>
                <View style={styles.borderCol}>

                </View>
                <Grid style={styles.bottomToolbar}>
                    <Row>
                        <Col style={styles.alignCenter}>
                            {/* <TouchableOpacity onPress={() => this.handleFlash()}>
                                <Ionicons
                                    name={this.state.flash == Camera.Constants.FlashMode.on ? "md-flash" : 'md-flash-off'}
                                    color="white"
                                    size={30}
                                />
                            </TouchableOpacity> */}
                            <Text style={styles.smallWhiteText}>MAX</Text>
                            <Text style={styles.boldWhiteText}>90</Text>
                            
                            
                        </Col>
                        <Col style={styles.alignCenter}>
                            <Text style={styles.boldWhiteText}>56</Text>
                            
                            <Text style={styles.smallWhiteText}>mph</Text>
                        </Col>
                        {/* <Col size={2} style={styles.alignCenter}>
                            <TouchableWithoutFeedback
                                onPressIn={onCaptureIn}
                                onPressOut={onCaptureOut}
                                onLongPress={onLongCapture}
                                onPress={onShortCapture}>
                                <View style={[styles.captureBtn, capturing && styles.captureBtnActive]}>
                                    {capturing && <View style={styles.captureBtnInternal} />}
                                </View>
                            </TouchableWithoutFeedback>
                        </Col> */}
                        <Col style={styles.alignCenter}>
                            {/* <TouchableOpacity onPress={() => this.handleCamSwitch()}>
                                <Ionicons
                                    name="md-reverse-camera"
                                    color="white"
                                    size={30}
                                />
                            </TouchableOpacity> */}
                            <Image
                                style={styles.tinyLogo}
                                source={require('../assets/ryde_active.png')}
                            />
                        </Col>
                    </Row>
                </Grid>
            </React.Fragment>
        );
    };
};

