/* global describe, it, expect */
import React from 'react';

import renderer from 'react-test-renderer';

import GarmentSearchPage from './GarmentSearchPage';
import StyledHeader from '../../../../native/components/Header';

const render = (Component, props) => renderer.create(<Component {...props} />);

describe('GarmentSearchPage', () => {
  it('should render without errors', () => {
    const renderedComponent = render(GarmentSearchPage).root;

    expect(renderedComponent).toBeTruthy();
  });

  describe('basic structure', () => {
    it('should render a header with title `Garment Search`', () => {
      const headerComponent = render(GarmentSearchPage).root.findByType(StyledHeader);
      const actualProps = headerComponent.props;

      expect(actualProps).toEqual({ description: 'Search for your garment by barcode', title: 'Garment Search'});
      expect(headerComponent).toBeTruthy();
    });
  });
});
