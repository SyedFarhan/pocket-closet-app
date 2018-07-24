import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Content, Text, H1, Button, Form, Picker, Item, Input, Left, Right, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Spacer from '../../native/components/Spacer';
import StyledCard from '../../native/components/StyledCard';
import ClearButton from '../../native/components/ClearButton';
import SearchButton from '../../native/components/SearchButton';


class GarmentSearch extends React.Component {
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

  onGarmentSearch = () => {
    this.props.onSearch(this.props.pickerSelection, this.props.inputText);
  };

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
      button = <ClearButton onClear={this.props.resetForm} />;
    } else {
      showImage = null;
      button = <SearchButton onSearch={this.onGarmentSearch} />;
    }

    return (
      <Container>
        <Content padder>
          <Spacer size={30} />
          <H1>Product Search</H1>
          <Spacer size={10} />
          <Text>
            Select a store to search for you clothing items image and details.
          </Text>
          <Spacer size={20} />
          <Form>
            <Picker
              mode="dialog"
              prompt="Select a brand"
              placeholder="Select Store"
              placeholderStyle={{ color: '#2874F0' }}
              note={false}
              style={{ width: undefined }}
              selectedValue={this.props.pickerSelection}
              onValueChange={this.props.onValueChange}
            >
              <Picker.Item label="H&M" value="key0" />
              <Picker.Item label="Express" value="key1" />
              <Picker.Item label="Gap" value="key2" />
              <Picker.Item label="Old Navy" value="key3" />
              <Picker.Item label="Macys" value="key4" />
            </Picker>
            <View>
              <Item>
                <Left style={{ flex: 2 }}>
                  <Item rounded>
                    <Input style={{ flex: 1 }} placeholder="Enter the Barcode #" value={this.props.inputText} onChangeText={e => this.props.onTextChange(e)} />
                    <TouchableHighlight
                      onPress={() => Actions.barcodeScanner()}
                    >
                      <Icon
                        name="barcode"
                        style={{ color: 'red' }}
                      />
                    </TouchableHighlight>
                  </Item>
                </Left>
                <Right style={{ flex: 1 }}>
                  <Item rounded>
                    {button}
                  </Item>
                </Right>
              </Item>
            </View>
          </Form>
          <Spacer size={10} />
          {showImage}
        </Content>
      </Container>
    );
  }
}

export default GarmentSearch;
