/* global describe, it, expect */
import React from 'react';
import renderer from 'react-test-renderer';

import DynamicButton from './DynamicButton';

test('renders SearchButton when isSearched prop is false', () => {
  const renderedComponentType = renderer.create(<DynamicButton isSearched={false} />).toTree();
  expect(renderedComponentType).toBe('SearchButton');
});
