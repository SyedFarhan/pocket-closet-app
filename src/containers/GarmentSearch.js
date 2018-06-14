import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { replaceBrand } from '../actions/productSearch';

import { addGarment } from '../actions/garments';

let mockGarment = {
  slug: '1mx-shirt',
  title: '1MX Shirt',
  brand: 'Express',
  size: 'Large',
  description: 'Classic Express  FDress Shirt',
  category: 'Jeans',
  id: '40',
  imageUrl: 'https://images.express.com/is/image/expressfashion/0020_00302144_0098?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon',
  laundryInstructions: {},
  tags: [],
};

class GarmentSearch extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    productSearch: PropTypes.shape().isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({}),
    }),
    addGarment: PropTypes.func.isRequired,
    replaceBrand: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      barcode: '',
      searched: false,
    };
  }

  onBarcodeChange = (e) => {
    this.setState({
      barcode: e,
    });
  }

  render = () => {
    const { Layout, match } = this.props;
    const id = (match && match.params && match.params.id) ? match.params.id : null;

    return (
      <Layout
        addGarment={this.props.addGarment}
        garment={mockGarment}
        onValueChange={this.props.replaceBrand}
        pickerSelection={this.props.productSearch.brand}
        onTextChange={this.onBarcodeChange}
        inputText={this.state.barcode}
      />
    );
  }
}

const mapStateToProps = state => ({
  productSearch: state.productSearch || {},
});


const mapDispatchToProps = dispatch => bindActionCreators({
  addGarment,
  replaceBrand,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(GarmentSearch);
