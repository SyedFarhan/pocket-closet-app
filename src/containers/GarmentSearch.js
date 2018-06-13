import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addGarment } from '../actions/garments';

class GarmentSearch extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({}),
    }),
    addGarment: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  render = () => {
    const { Layout, match } = this.props;
    const id = (match && match.params && match.params.id) ? match.params.id : null;

    return (
      <Layout
        addGarment={this.props.addGarment}
      />
    );
  }
}

const mapStateToProps = state => ({
});


const mapDispatchToProps = dispatch => bindActionCreators({
  addGarment,
}, dispatch);


export default connect(mapDispatchToProps)(GarmentSearch);
