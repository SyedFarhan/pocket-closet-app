import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Content, Text, H1, Form, Picker, Item, Input, Left, Right, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Spacer from './Spacer';
import StyledCard from './StyledCard';
import ClearButton from './ClearButton';
import SearchButton from './SearchButton';


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
    const searchCondition = (this.props.inputText !== '' && this.props.pickerSelection !== '' && this.props.searched);

    return (
      <Container>
        <Content padder>

          <Spacer size={30} />
          <H1>Product Search</H1>
          <Spacer size={10} />
          <Text>
            Select a store to search for you clothing items image and details.
          </Text>
          <Button
            style={{ width: 150, flex: 1 }}
            onPress={() => Actions.barcodeScanner()}
          >
            <View>
              <Text>
                Scan Barcode
              </Text>
            </View>
          </Button>
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
                <Left>
                  <Item rounded>
                    <Input style={{ flex: 1 }} placeholder="Enter the Barcode #" value={this.props.inputText} onChangeText={e => this.props.onTextChange(e)} />
                  </Item>
                </Left>
                <Right>
                  <Item rounded>
                    <View style={{ flex: 1 }}>
                      <Choose>
                        <When condition={searchCondition}>
                          button = <ClearButton onClear={this.props.resetForm} />;
                        </When>
                        <Otherwise>
                          <SearchButton onSearch={this.onGarmentSearch} />;
                        </Otherwise>
                      </Choose>
                    </View>
                  </Item>
                </Right>
              </Item>
            </View>
          </Form>

          <Spacer size={10} />
          <If condition={searchCondition} >
            <StyledCard
              addGarment={this.props.addGarment}
              garment={this.props.garment}
            />
          </If>

        </Content>
      </Container>
    );
  }
}

export default GarmentSearch;
