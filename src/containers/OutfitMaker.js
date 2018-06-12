import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addGarment, deleteGarment, getGarments, getMeals, setError, getShirts } from '../actions/garments';

class OutfitMaker extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    garments: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      error: PropTypes.string,
      garments: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({}),
    }),
    deleteGarment: PropTypes.func.isRequired,
    getGarments: PropTypes.func.isRequired,
    getMeals: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
    addGarment: PropTypes.func.isRequired,
    getShirts: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  componentDidMount = () => {
    this.fetchShirts();
    console.log(this.props.shirts);
  };

  /**
   * Fetch Data from API, saving to Redux
   */
  fetchGarments = () => {
    console.log('fetching garments');
    return this.props.getGarments()
      .then(() => this.props.getMeals())
      .catch((err) => {
        console.log(`Error: ${err}`);
        return this.props.setError(err);
      });
  }

  fetchShirts = () => {
    console.log('fetching shirts');
    return this.props.getShirts();
  }

  createArrayFromObjectProperties(object) {
    const objectArray = [];
    Object.entries(object).forEach(keyValue => objectArray.push(keyValue[1]));
    return objectArray;
  }

  render = () => {
    const { Layout, garments, match, shirts } = this.props;
    const id = (match && match.params && match.params.id) ? match.params.id : null;

    return (
      <Layout
        error={garments.error}
        loading={garments.loading}
        garments={garments.garments}
        shirts={this.createArrayFromObjectProperties(shirts.shirts.byId)}
        deleteGarment={this.props.deleteGarment}
        addGarment={this.props.addGarment}
      />
    );
  }
}

const mapStateToProps = state => ({
  garments: state.garments || {},
  shirts: state.shirts || {},
});


const mapDispatchToProps = dispatch => bindActionCreators({
  addGarment,
  getGarments,
  deleteGarment,
  getMeals,
  setError,
  getShirts,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(OutfitMaker);
