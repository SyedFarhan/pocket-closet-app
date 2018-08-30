/* global beforeEach, describe, expect, it */
import React from 'react';

import renderer from 'react-test-renderer';

import GarmentSearchPage from './GarmentSearchPage';
import StyledHeader from '../../../../native/components/Header';
import Picker from '../../../../../native-base-theme/components/Picker';

const render = (Component, props) => renderer.create(<Component {...props} />);

describe('GarmentSearchPage', () => {
  let renderedComponent;
  let root;
  let findByType;

  beforeEach(() => {
    renderedComponent = render(GarmentSearchPage);
    ({ root } = renderedComponent);
    findByType = type => root.findByType(type);
  });

  it('should render without errors', () => {
    expect(renderedComponent).toBeTruthy();
  });

  describe('basic structure', () => {
    it('should render a header with title `Garment Search`', () => {
      const headerComponent = findByType(StyledHeader);
      const actualProps = headerComponent.props;

      expect(actualProps).toEqual({ description: 'Search for your garment by barcode', title: 'Garment Search'});
      expect(headerComponent).toBeTruthy();
    });
  });
});
