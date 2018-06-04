import React from 'react'
import { Container, Content, Text, H1, H2, H3, Button, Form, Picker, Item, Input } from 'native-base'
import Spacer from './Spacer'

class About extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: undefined
    }
  }

  onValueChange (value) {
    this.setState({
      selected: value
    })
  }

  render () {
    return (
      <Container>
        <Content padder>
          <Spacer size={30}/>
          <H1>Product Search</H1>
          <Spacer size={10}/>
          <Text>
            Select a store to search for you clothing items image and details.
          </Text>
          <Spacer size={20}/>
          <Form>
            <Picker
              mode="dropdown"
              placeholder="Select Store"
              placeholderStyle={{color: '#2874F0'}}
              note={false}
              style={{width: undefined}}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="H&M" value="key0"/>
              <Picker.Item label="Express" value="key1"/>
              <Picker.Item label="Gap" value="key2"/>
              <Picker.Item label="Old Navy" value="key3"/>
              <Picker.Item label="Macys" value="key4"/>
            </Picker>
            <Item rounded>
              <Input placeholder='Enter the Barcode #'/>
            </Item>
          </Form>
          <Spacer size={10}/>
          <Button>
            <Text>
              Search
            </Text>
          </Button>
        </Content>
      </Container>
    )
  }

}

export default About
