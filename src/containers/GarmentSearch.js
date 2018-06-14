import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { replaceBrand, replaceBarcode, initiateSearch, resetSearchForm } from '../actions/productSearch';

import { addGarment } from '../actions/garments';


class GarmentSearch extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    productSearch: PropTypes.shape().isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({}),
    }),
    addGarment: PropTypes.func.isRequired,
    replaceBrand: PropTypes.func.isRequired,
    replaceBarcode: PropTypes.func.isRequired,
    initiateSearch: PropTypes.func.isRequired,
    resetSearchForm: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  constructor(props) {
    super(props);

    this.props.resetSearchForm();
  }

  render = () => {
    const { Layout, match } = this.props;
    const id = (match && match.params && match.params.id) ? match.params.id : null;

    return (
      <Layout
        addGarment={this.props.addGarment}
        garment={this.props.productSearch.searchResult}
        onValueChange={this.props.replaceBrand}
        pickerSelection={this.props.productSearch.brand}
        onTextChange={this.props.replaceBarcode}
        inputText={this.props.productSearch.barcode}
        onSearch={this.props.initiateSearch}
        searched={this.props.productSearch.searched}
        resetForm={this.props.resetSearchForm}
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
  replaceBarcode,
  initiateSearch,
  resetSearchForm,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(GarmentSearch);
