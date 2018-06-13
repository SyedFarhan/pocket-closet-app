import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Card, CardItem, Body, Text, Button, DeckSwiper, Left, Thumbnail, Icon } from 'native-base';
import Spacer from './Spacer';



const OutfitMaker = ({
  shirts,
  pants,
  onItemSelect,
  selectedShirt,
  selectedPant
}) => {
  // Loading
  // if (loading) return <Loading />;

  // Error
  // if (error) return <Error content={error} />;

  // const keyExtractor = item => item.id;

  // const onPress = item => Actions.garment({ match: { params: { id: String(item.id) } } });
  let alignItems = 'flex-start';
  if (selectedShirt != null) alignItems = 'center';


  return (
        <KeyboardAwareScrollView>
          <View style={{ height: 250 }}>
            <Text h1 style={{ fontSize: 18, textAlign: 'center' }}>Shirt</Text>
            {selectedShirt ?
              (<Image style={{ height: 225, width: 225, flex: 1, alignItems: 'center' }} source={{ uri: selectedShirt.imageUrl }} />)
              :
              (<DeckSwiper
                dataSource={shirts}
                renderItem={item =>
                  <TouchableHighlight onPress={() => onItemSelect(item)}>
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
                }
              />)
            }
          </View>
          <Spacer size={90} />
          <View style={{ height: 250 }} >
            <Text h1 style={{ fontSize: 18, textAlign: 'center' }}>Pants</Text>
            {selectedPant ?
              (<Image style={{ height: 225, width: 180, flex: 1 }} source={{ uri: selectedPant.imageUrl }} />)
              :
              (<DeckSwiper
                dataSource={pants}
                renderItem={item =>
                  <TouchableHighlight onPress={() => onItemSelect(item)}>
                    <Card style={{ elevation: 2 }}>
                      <CardItem>
                        <Left>
                          <Thumbnail source={{ uri: 'http://www.hm.com/entrance/entrance-assets/static/site/img/choosecountry/HM-Share-Image.jpg' }} />
                          <Body>
                          <Text>{item.title}</Text>
                          <Text note>{item.brand}</Text>
                          </Body>
                        </Left>
                      </CardItem>
                      <CardItem style={{ justifyContent: 'center' }} cardBody>
                        <Image style={{ height: 150, flex: 0.30 }} source={{ uri: item.imageUrl }} />
                      </CardItem>
                      <CardItem>
                        <Icon name="heart" style={{ color: '#ED4A6A' }} />
                        <Text>{item.description}</Text>
                      </CardItem>
                    </Card>
                  </TouchableHighlight>

                }
              />)
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
};

export default OutfitMaker;
