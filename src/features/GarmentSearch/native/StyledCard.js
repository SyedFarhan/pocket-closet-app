import React from 'react';
import { Image, View } from 'react-native';
import { Text, Button, Card, CardItem, Left, Right, Body, Icon } from 'native-base';


// Todo: Refactor to decouple from GarmentSearch and make it a more generic reusable component,
// Todo: Add proptypes/default

const StyledCard = ({ garment, addGarment }) => {
  console.log(garment.body);
  return (
      <Card>
        <CardItem>
          <Left>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
              <Body>
                <Text>{garment.title}</Text>
                <Text note>{garment.brand}</Text>
              </Body>
            </View>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Image
              source={{ uri: garment.imageUrl }}
              style={{ height: 175, width: 160, flex: 0.5 }}
            />
          </View>
        </CardItem>
        <CardItem>
          <Left>
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

/*
StyledCard.propTypes = {
};

StyledCard.defaultProps = {

};
*/

export default StyledCard;
