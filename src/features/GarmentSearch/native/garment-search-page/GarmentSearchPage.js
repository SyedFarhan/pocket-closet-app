import React, { Component } from 'react';
import StyledHeader from '../../../../native/components/Header';

export default class GarmentSearchPage extends Component {
  render() {
    return (
      <StyledHeader
        description="Search for your garment by barcode"
        title="Garment Search"
      />
    );
  }
}
