import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableHighlight } from 'react-native';
import { Card, CardItem, Body, Text, DeckSwiper, Left, Thumbnail, Icon } from 'native-base';

const GarmentDeckSwiper = ({ data, onCardSelect }) => {
  return (
    <DeckSwiper
      dataSource={data}
      renderItem={item => (
        <TouchableHighlight onPress={() => onCardSelect(item)}>
          <Card style={{ elevation: 2 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/082016/untitled-1_11.jpg?itok=mzt0yUwz' }} />
                <Body>
                  <Text>{item.title}</Text>
                  <Text note>{item.brand}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{ justifyContent: 'center' }} cardBody>
              <Image style={{ height: 150, flex: 0.35 }} source={{ uri: item.imageUrl }} />
            </CardItem>
            <CardItem>
              <Icon name="heart" style={{ color: '#ED4A6A' }} />
              <Text>{item.description}</Text>
            </CardItem>
          </Card>
        </TouchableHighlight>
      )
      }
    />
  );
};

GarmentDeckSwiper.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onCardSelect: PropTypes.func.isRequired,
};

export default GarmentDeckSwiper;
