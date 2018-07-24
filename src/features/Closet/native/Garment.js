import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Body, H3, List, Text } from 'native-base';
import ErrorMessages from '../../../constants/errors';
import Error from '../../../native/components/Error';
import Spacer from '../../../native/components/Spacer';

const GarmentView = ({
  error,
  garments,
  garmentId,
}) => {
  // Error
  if (error) return <Error content={error} />;

  // Get this Garment from all garments
  let garment = null;
  if (garmentId && garments) {
    garment = garments.find(item => parseInt(item.id, 10) === parseInt(garmentId, 10));
  }

  // Garment not found
  if (!garment) return <Error content={ErrorMessages.garment404} />;
  return (
    <Container>
      <Content padder>
        <Image source={{ uri: garment.imageUrl }} style={{ height: 250, width: 250, flex: 1 }} />

        <Spacer size={25} />
        <H3>{garment.title}</H3>
        <Text>{garment.brand}</Text>
        <Spacer size={15} />

        <Card>
          <CardItem header bordered>
            <Text>Description</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{garment.description}</Text>
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
  garmentId: PropTypes.string.isRequired,
  garments: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

GarmentView.defaultProps = {
  error: null,
};

export default GarmentView;

