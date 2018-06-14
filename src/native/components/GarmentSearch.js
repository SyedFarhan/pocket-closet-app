import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Content, Text, H1, Button, Form, Picker, Item, Input, Left, Right } from 'native-base';
import Spacer from './Spacer';
import StyledCard from './StyledCard';

class GarmentSearch extends React.Component {
  static propTypes = {
    addGarment: PropTypes.func.isRequired,
    garment: PropTypes.shape().isRequired,
    onValueChange: PropTypes.func.isRequired,
    pickerSelection: PropTypes.string.isRequired,
    onTextChange: PropTypes.func.isRequired,
    inputText: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      searched: false,
    };
  }

  render() {
    let showImage;
    if (this.state.searched) {
      showImage = (
        <StyledCard
          addGarment={this.props.addGarment}
          garment={this.props.garment}
        />
      );
    } else {
      showImage = <View />;
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
              mode="dropdown"
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
                <Left>
                  <Item rounded>
                    <Input style={{ flex: 1 }} placeholder="Enter the Barcode #" value={this.props.inputText} onChangeText={e => this.props.onTextChange(e)} />
                  </Item>
                </Left>
                <Right>
                  <Item rounded>
                    <Button
                      containerStyle={{ flex: 1 }}
                      onPress={() => this.setState({ searched: true })}
                    >
                      <Text>
                        Search
                      </Text>
                    </Button>
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
