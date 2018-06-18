import React from 'react';
import { Actions } from 'react-native-router-flux';
import { BarCodeScanner, Permissions } from 'expo';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


class GarmentBarcodeScanner extends React.Component {
  static propTypes = {
    onTextChange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
    };
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    console.log('permission: ', this.state.hasCameraPermission);
  }

  _handleBarCodeRead = ({ type, data }) => {
    console.log(`Barcode read - Type: ${type} | Data: ${data}`);
    this.props.onTextChange(data);
    Actions.pop();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <BarCodeScanner
          onBarCodeRead={this._handleBarCodeRead}
          style={StyleSheet.absoluteFill}
        />
      </View>
    );
  }
}

export default GarmentBarcodeScanner;
