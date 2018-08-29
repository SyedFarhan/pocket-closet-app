import React from 'react';
import PropTypes from 'prop-types';

import SearchButton from '../search-button/SearchButton';
import ClearButton from '../clear-button/ClearButton';

const DynamicButton = ({ isSearched, onSearch, onClear }) => {
  return (
    isSearched ? <ClearButton onClear={onClear} /> : <SearchButton onSearch={onSearch} />
  );
};

DynamicButton.propTypes = {
  isSearched: PropTypes.bool.isRequired,
  onSearch: PropTypes.func,
  onClear: PropTypes.func,
};

export default DynamicButton;
