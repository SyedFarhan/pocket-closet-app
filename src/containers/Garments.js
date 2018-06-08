import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getGarments, getMeals, setError } from '../actions/garments';

class GarmentListing extends Component {
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
    getGarments: PropTypes.func.isRequired,
    getMeals: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  componentDidMount = () => {
    this.fetchGarments();
  };

  /**
    * Fetch Data from API, saving to Redux
    */
  fetchGarments = () => {
    console.log('fetching');
    return this.props.getGarments()
      .then(() => this.props.getMeals())
      .catch((err) => {
        console.log(`Error: ${err}`);
        return this.props.setError(err);
      });
  }

  render = () => {
    const { Layout, garments, match } = this.props;
    const id = (match && match.params && match.params.id) ? match.params.id : null;

    return (
      <Layout
        garmentId={id}
        error={garments.error}
        loading={garments.loading}
        garments={garments.garments}
        reFetch={() => this.fetchGarments()}
      />
    );
  }
}

const mapStateToProps = state => ({
  garments: state.garments || {},
});

const mapDispatchToProps = {
  getGarments,
  getMeals,
  setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(GarmentListing);
