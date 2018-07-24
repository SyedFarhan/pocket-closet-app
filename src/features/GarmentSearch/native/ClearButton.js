import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button } from 'native-base';


const ClearButton = ({ onClear }) => {
  return (
    <Button
      danger
      containerStyle={{ flex: 1 }}
      style={{ flex: 1, width: '100%' }}
      onPress={() => onClear()}
    >
      <Text>
        Clear
      </Text>
    </Button>
  );
};

ClearButton.propTypes = {
  onClear: PropTypes.func.isRequired,
};

export default ClearButton;
