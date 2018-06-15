import React from 'react';
import { View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { Container, Content, Text, H1, Button, Form, Picker, Item, Input, Left, Right } from 'native-base';
import Spacer from './Spacer';
import StyledCard from './StyledCard';
import { BarCodeScanner, Permissions } from 'expo';


class GarmentBarcodeScanner extends React.Component {
  static propTypes = {
    addGarment: PropTypes.func.isRequired,
    garment: PropTypes.shape().isRequired,
    onValueChange: PropTypes.func.isRequired,
    pickerSelection: PropTypes.string.isRequired,
    onTextChange: PropTypes.func.isRequired,
    inputText: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
    searched: PropTypes.bool.isRequired,
    resetForm: PropTypes.func.isRequired,
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
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  }

  render() {

    let showImage;
    let button;
    if (this.props.inputText !== '' && this.props.pickerSelection !== '' && this.props.searched) {
      showImage = (
        <StyledCard
          addGarment={this.props.addGarment}
          garment={this.props.garment}
        />
      );
      button = (
        <Button
          danger
          containerStyle={{ flex: 1 }}
          style={{ flex: 1, width: '100%' }}
          onPress={() => this.props.resetForm()}
        >
          <Text>
            Clear
          </Text>
        </Button>
      );
    } else {
      showImage = <View />;
      button = (
        <Button
          containerStyle={{ flex: 1 }}
          style={{ flex: 1, width: '100%' }}
          onPress={() => {
            if (this.props.pickerSelection && this.props.inputText) {
              this.props.onSearch(this.props.pickerSelection, this.props.inputText);
            }
          }
          }
        >
          <Text>
            Search
          </Text>
        </Button>
      );
    }
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
