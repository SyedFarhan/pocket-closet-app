import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button } from 'native-base';


const SearchButton = ({ onSearch }) => {
  return (
    <Button
      containerStyle={{ flex: 1 }}
      style={{ flex: 1, width: '100%' }}
      onPress={() => onSearch()}
    >
      <Text>
        Search
      </Text>
    </Button>
  );
};

SearchButton.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchButton;
