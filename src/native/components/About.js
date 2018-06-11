import React from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Text, H1, Button, Form, Picker, Item, Input, Card, CardItem, Left, Right, Body, Icon } from 'native-base';
import Spacer from './Spacer';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
      barcode: '',
      searched: false,
    };
  }

  onValueChange = (value) => {
    this.setState({
      selected: value,
    });
  }

  onTextChange = (e) => {
    this.setState({
      barcode: e,
    });
  }

  render() {
    let showImage;
    if (this.state.searched)
      showImage = (
        <Card>
          <CardItem>
            <Left>
              <Body>
              <Text>NativeBase</Text>
              <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} style={{ height: 200, width: 200, flex: 1 }} />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="star" />
                <Text>H&M</Text>
              </Button>
            </Left>
            <Body>
            <Button transparent>
              <Icon active name="add" />
              <Text onPress={() => this.setState({ searched: false })}>Add to Closet</Text>
            </Button>
            </Body>
            <Right>
              <Text>1</Text>
            </Right>
          </CardItem>
        </Card>);
    else
      showImage = <View></View>;
    return (
      <Container>
        <Content padder>
          <Spacer size={30} />
          <H1>Product Search</H1>
          <Spacer size={10} />
          <Text>
            Select a store to search for you clothing items image and details.
          </Text>
          <Spacer size={20} />
          <Form>
            <Picker
              mode="dropdown"
              placeholder="Select Store"
              placeholderStyle={{ color: '#2874F0' }}
              note={false}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange}
            >
              <Picker.Item label="H&M" value="key0" />
              <Picker.Item label="Express" value="key1" />
              <Picker.Item label="Gap" value="key2" />
              <Picker.Item label="Old Navy" value="key3" />
              <Picker.Item label="Macys" value="key4" />
            </Picker>
            <Item rounded>
              <Input placeholder='Enter the Barcode #' value={this.state.barcode} onChangeText={e => this.onTextChange(e)} />
            </Item>
          </Form>
          <Spacer size={10} />
          <Button onPress={() => this.setState({ searched: true })}>
            <Text>
              Search
            </Text>
          </Button>
          {showImage}
        </Content>
      </Container>
    );
  }
}

export default About;
