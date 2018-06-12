import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, TouchableOpacity, RefreshControl, Image, ScrollView, Dimensions } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Button, DeckSwiper, Left, Thumbnail, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';
import Error from './Error';
import Header from './Header';
import Spacer from './Spacer';


const OutfitMaker = ({
  error,
  loading,
  garments,
  reFetch,
  deleteGarment,
}) => {
  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  const keyExtractor = item => item.id;

  const onPress = item => Actions.garment({ match: { params: { id: String(item.id) } } });

  return (
    <Container>
      <Content padder>
        <Text>Hello</Text>
        <Spacer size={50} />
      </Content>
    </Container>
  );
};

OutfitMaker.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  garments: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  reFetch: PropTypes.func,
};

OutfitMaker.defaultProps = {
  error: null,
  reFetch: null,
};

export default OutfitMaker;

/*
<Container style={{ flex: 1, height: (2 * (Dimensions.get('window').height)) }}>
  <Content padder contentContainerStyle={{ flex: 1, justifyContent: 'space-between' }} >
    <DeckSwiper
      key={1}
      dataSource={garments}
      renderItem={item => (
        <Card style={{ elevation: 3, flex: 1 }}>
          <CardItem>
            <Left>
              <Body>
              <Text>{item.title}</Text>
              <Text note>{item.brand}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image style={{ height: 300, flex: 1 }} source={{ uri: item.imageUrl }} />
          </CardItem>
          <CardItem>
            <Icon name="heart" style={{ color: '#ED4A6A' }} />
            <Text>{item.name}</Text>
          </CardItem>
        </Card>)
      }
    />
    <Spacer size={100} />
    <DeckSwiper
      key={2}
      dataSource={garments}
      renderItem={item => (
        <Card style={{ elevation: 2 }}>
          <CardItem>
            <Left>
              <Body>
              <Text>{item.title}</Text>
              <Text note>{item.brand}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image style={{ height: 300 }} source={{ uri: item.imageUrl }} />
          </CardItem>
          <CardItem>
            <Icon name="heart" style={{ color: '#ED4A6A' }} />
            <Text>{item.name}</Text>
          </CardItem>
        </Card>)
      }
    />
  </Content>
</Container> */
