import React from 'react';
import { Image } from 'react-native';
import { Text, Button, Card, CardItem, Left, Right, Body, Icon } from 'native-base';
import GarmentView from './Garment'


// Todo: Refactor to decouple from GarmentSearch and make it a more generic reusable component,
// Todo: Add proptypes/default

const StyledCard = ({ garment, addGarment }) => {
  console.log(garment.body);
  return (
    <Card>
      <CardItem>
        <Left>
          <Body>
            <Text>{garment.title}</Text>
            <Text note>{garment.brand}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image source={{ uri: garment.imageUrl }} style={{ height: 175, width: 160, flex: 0.5 }} />
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent>
            <Icon active name="star" />
            <Text>Add to WishList</Text>
          </Button>
        </Left>
        <Body>
          <Button
            transparent
            onPress={() => addGarment(garment)}
          >
            <Icon active name="add" />
            <Text>Add to Closet</Text>
          </Button>
        </Body>
        <Right>
          <Text>1</Text>
        </Right>
      </CardItem>
    </Card>
  );
};

StyledCard.propTypes = {
};

StyledCard.defaultProps = {

};

export default StyledCard;
