import React from 'react';
import { View } from 'react-native';
import { Input } from 'native-base';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';

const SearchInputScanner = ({ searchPlaceholderText, inputText, onInputTextChange }) => {
  return (
    <View>
      <Input style={{ flex: 1 }} placeholder={searchPlaceholderText} value={inputText} onChangeText={e => onInputTextChange(e)} />
    </View>
  );
};

SearchInputScanner.defaultProps = {
  searchPlaceholderText: '',
};

SearchInputScanner.propTypes = {
  searchPlaceholderText: PropTypes.string,
  inputText: PropTypes.string.isRequired,
};


export default SearchInputScanner;


//
// <TouchableHighlight
//   onPress={() => Actions.barcodeScanner()}
// >
//   <Icon
//     name="barcode"
//     style={{ color: 'red' }}
//   />
// </TouchableHighlight>
// value={this.props.inputText} onChangeText={e => this.props.onTextChange(e)}


