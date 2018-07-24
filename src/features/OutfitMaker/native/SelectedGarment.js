import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableHighlight } from 'react-native';


const SelectedGarment = ({ selection }) => {
  console.log('selection', selection);
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Image
        style={{ height: 225, width: 225, flex: 1, alignItems: 'center' }}
        source={{ uri: selection.imageUrl }}
      />
    </View>
  );
};

SelectedGarment.propTypes = {
  selection: PropTypes.shape().isRequired,
};

export default SelectedGarment;
