import React from 'react';
import PropTypes from 'prop-types';

import { View, TouchableHighlight } from 'react-native';

import { Actions } from 'react-native-router-flux';

import {
  Container,
  Content,
  Form,
  Picker,
  Item,
  Input,
  Left,
  Right,
  Icon,
} from 'native-base';

import Header from '../../../native/components/Header';
import Spacer from '../../../native/components/Spacer';


import SearchResult from './SearchResult';
import DynamicButton from './DynamicButton';

class GarmentSearch extends React.Component {
  static propTypes = {
    addGarment: PropTypes.func.isRequired,
    garment: PropTypes.shape().isRequired,
    inputText: PropTypes.string.isRequired,
    onTextChange: PropTypes.func.isRequired,
    onValueChange: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    pickerSelection: PropTypes.string.isRequired,
    resetForm: PropTypes.func.isRequired,
    searched: PropTypes.bool.isRequired,
  };

  onGarmentSearch = () => this.props.onSearch(this.props.pickerSelection, this.props.inputText);

  isValidSearch = () => (
    this.props.inputText !== ''
    && this.props.pickerSelection !== ''
    && this.props.searched
  )

  renderSearchForm = () => (
    <Form>
      {this.renderPicker()}
      <View>
        {this.renderSearchBar()}
      </View>
    </Form>
  )

  renderHeader = () => (
    <Header
      title="Product Search"
      content="Select a store to search for you clothing items image and details."
    />
  )

  renderPicker = () => (
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
  )

  renderSearchResult = () => (
    <React.Fragment>
      <Spacer size={10} />
      <SearchResult
        isDisplayed={this.isValidSearch()}
        searchResult={this.props.garment}
        onAdd={this.props.addGarment}
      />
    </React.Fragment>
  )

  renderSearchBar = () => (
    <Item>
      <Left style={{ flex: 2 }}>
        {this.renderSearchInput()}
      </Left>
      <Right style={{ flex: 1 }}>
        {this.renderSearchButton()}
      </Right>
    </Item>
  )

  renderSearchInput = () => (
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
  )

  renderSearchButton = () => (
    <Item rounded>
      <DynamicButton
        isSearched={this.isValidSearch()}
        onSearch={this.onGarmentSearch}
        onClear={this.props.resetForm}
      />
    </Item>
  )

  render() {
    return (
      <Container>
        <Content padder>
          {this.renderHeader()}
          {this.renderSearchForm()}
          {this.renderSearchResult()}
        </Content>
      </Container>
    );
  }
}

export default GarmentSearch;
