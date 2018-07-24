import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Text } from 'native-base';
import Spacer from '../../../native/components/Spacer';

import GarmentDeckSwiper from '../../../native/components/GarmentDeckSwiper';
import SelectedGarment from '../../../native/components/SelectedGarment';


const OutfitMaker = ({
  shirts,
  pants,
  onItemSelect,
  selectedShirt,
  selectedPant,
}) => {
  // Loading
  // if (loading) return <Loading />;

  // Error
  // if (error) return <Error content={error} />;

  // const keyExtractor = item => item.id;

  // const onPress = item => Actions.garment({ match: { params: { id: String(item.id) } } });
  return (
    <KeyboardAwareScrollView>
      <View style={{ height: 250 }}>
        <Text h1 style={{ fontSize: 18, textAlign: 'center' }}>Shirt</Text>
        {selectedShirt ?
          <SelectedGarment selection={selectedShirt} />
          :
          <GarmentDeckSwiper data={shirts} onCardSelect={onItemSelect} />
        }
      </View>
      <Spacer size={90} />
      <View style={{ height: 250 }} >
        <Text h1 style={{ fontSize: 18, textAlign: 'center' }}>Pants</Text>
        {selectedPant ?
          <SelectedGarment selection={selectedPant} />
          :
          <GarmentDeckSwiper data={pants} onCardSelect={onItemSelect} />
        }
      </View>
      <Spacer size={50} />
      <View style={{ height: 500 }} />
    </KeyboardAwareScrollView>
  );
};

OutfitMaker.propTypes = {
  shirts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  pants: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onItemSelect: PropTypes.func.isRequired,
  selectedShirt: PropTypes.shape(),
  selectedPant: PropTypes.shape(),
};

export default OutfitMaker;
