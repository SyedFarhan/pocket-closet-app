import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import SearchButton from './SearchButton';
import ClearButton from './ClearButton'

const DynamicButton = ({ onSearch, onClear, isSearched }) => {
  return (
    isSearched ? <ClearButton onClear={onClear} /> : <SearchButton onSearch={onSearch} />
  );
};

// DynamicButton.propTypes = {
//   isSearched: PropTypes.bool.isRequired,
// };

export default DynamicButton;
