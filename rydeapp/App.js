import React from 'react';

import CameraPage from './src/camerapage';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
      return (
          <CameraPage />
      );
  };
};