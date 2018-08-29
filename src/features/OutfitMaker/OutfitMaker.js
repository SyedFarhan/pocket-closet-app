import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getShirts, getPants } from '../../redux/actions/garments';

class OutfitMaker extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    getShirts: PropTypes.func.isRequired,
    getPants: PropTypes.func.isRequired,
    shirts: PropTypes.shape().isRequired,
    pants: PropTypes.shape().isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      selectedShirt: null,
      selectedPant: null,
    };
  }

  componentDidMount = () => {
    this.fetchShirts();
    this.fetchPants();
    console.log(this.props.shirts);
    console.log(this.props.pants);
  };

  fetchShirts = () => {
    console.log('fetching shirts');
    return this.props.getShirts();
  }

  fetchPants = () => {
    console.log('fetching pants');
    return this.props.getPants();
  }

  createArrayFromObjectProperties(object) {
    const objectArray = [];
    Object.entries(object).forEach(keyValue => objectArray.push(keyValue[1]));
    return objectArray;
  }

  onItemSelect = (item) => {
    if (item.category == 'shirt')
      this.setState({ selectedShirt: item });
    else if (item.category == 'pants')
      this.setState({ selectedPant: item });
    else
      this.setState({ selectedShirt: null });
    console.log(this.state.selectedShirt);
  }

  render = () => {
    const { Layout, shirts, pants } = this.props;

    return (
      <Layout
        shirts={this.createArrayFromObjectProperties(shirts.shirts.byId)}
        pants={this.createArrayFromObjectProperties(pants.pants.byId)}
        onItemSelect={this.onItemSelect}
        selectedShirt={this.state.selectedShirt}
        selectedPant={this.state.selectedPant}
      />
    );
  }
}

const mapStateToProps = state => ({
  garments: state.garments || {},
  shirts: state.shirts || {},
  pants: state.pants || {},
});


const mapDispatchToProps = dispatch => bindActionCreators({
  getShirts,
  getPants,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(OutfitMaker);
