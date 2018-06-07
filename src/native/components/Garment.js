import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Body, H3, List, ListItem, Text } from 'native-base';
import ErrorMessages from '../../constants/errors';
import Error from './Error';
import Spacer from './Spacer';

const GarmentView = ({
  error,
  recipes,
  recipeId,
}) => {
  // Error
  if (error) return <Error content={error} />;

  // Get this Garment from all garments
  let garment = null;
  if (recipeId && recipes) {
    garment = recipes.find(item => parseInt(item.id, 10) === parseInt(recipeId, 10));
  }

  // Garment not found
  if (!garment) return <Error content={ErrorMessages.recipe404} />;

  // Build Ingredients listingx
  const ingredients = garment.ingredients.map(item => (
    <ListItem key={item} rightIcon={{ style: { opacity: 0 } }}>
      <Text>{item}</Text>
    </ListItem>
  ));

  // Build Method listing
  const method = garment.method.map(item => (
    <ListItem key={item} rightIcon={{ style: { opacity: 0 } }}>
      <Text>{item}</Text>t
    </ListItem>
  ));

  return (
    <Container>
      <Content padder>
        <Image source={{ uri: garment.image }} style={{ height: 250, width: 250, flex: 1 }} />

        <Spacer size={25} />
        <H3>{garment.title}</H3>
        <Text>from H&M</Text>
        <Spacer size={15} />

        <Card>
          <CardItem header bordered>
            <Text>Item descriptions</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{garment.body}</Text>
            </Body>
          </CardItem>
        </Card>

        <Card>
          <CardItem header bordered>
            <Text>Details</Text>
          </CardItem>
          <CardItem>
            <Content>
              <List>
                {ingredients}
              </List>
            </Content>
          </CardItem>
        </Card>

        <Card>
          <CardItem header bordered>
            <Text>Laundry Instructions</Text>
          </CardItem>
          <CardItem>
            <List>
              {method}
            </List>
          </CardItem>
        </Card>

        <Spacer size={20} />
      </Content>
    </Container>
  );
};

GarmentView.propTypes = {
  error: PropTypes.string,
  recipeId: PropTypes.string.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

GarmentView.defaultProps = {
  error: null,
};

export default GarmentView;
