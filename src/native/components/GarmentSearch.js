import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Content, Text, H1, Button, Form, Picker, Item, Input, Card, CardItem, Left, Right, Body, Icon } from 'native-base';
import Spacer from './Spacer';
import Error from './Error';
import StyledCard from './StyledCard';


// MOCK DATA
var mockGarment = {
  slug: '1mx-shirt',
  title: '1MX Shirt',
  brand: 'Express',
  size: 'Large',
  description: 'Classic Express FIttedDress Shirt',
  category: 'Jeans',
  id: '40',
  imageUrl: 'https://images.express.com/is/image/expressfashion/0020_00302144_0098?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon',
  laundryInstructions: {},
  tags: [],
}

class GarmentSearch extends React.Component {
  static propTypes = {
    Layout: PropTypes.func,
    deleteGarment: PropTypes.func,
    getGarments: PropTypes.func,
    getMeals: PropTypes.func,
    setError: PropTypes.func,
    addGarment: PropTypes.func,
  }

  constructor(props) {
    super(props);
    console.log(this.props);
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
        <StyledCard
          addGarment={this.props.addGarment}
          garment={mockGarment}
        />
      );
    else
      showImage = <Error />;
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

export default GarmentSearch;
