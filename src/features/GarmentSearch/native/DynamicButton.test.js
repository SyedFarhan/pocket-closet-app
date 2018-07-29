/* global test */
import React from 'react';
import renderer from 'react-test-renderer';

import DynamicButton from './DynamicButton';
import ClearButton from './ClearButton';
import SearchButton from './SearchButton';

export default buttonSpec = describe('DynamicButton', () => {
  let props;
  let mountedDynamicButton;
  const mountDynamicButtonWithProps = () => {
    mountedDynamicButton = mountedDynamicButton
      ? mountedDynamicButton
      : renderer.create(<DynamicButton {...props} />);
    return mountedDynamicButton;
  };

  const emptyFunction = () => {};

  const clearComponentAndProps = () => {
    props = {
      isSearched: undefined,
      onClear: undefined,
      onSearch: undefined,
    };
    mountedDynamicButton = undefined;
  };


  beforeEach(() => {
    clearComponentAndProps();
  });

  test('renders `SearchButton` when isSearched prop is false', () => {
    props.isSearched = false;
    props.onSearch = emptyFunction;
    mountDynamicButtonWithProps();

    const searchButton = mountedDynamicButton.root.findByType(SearchButton);
    expect(searchButton).toBeTruthy();
  });

  test('renders `ClearButton` when isSearched prop is true', () => {
    props.isSearched = true;
    props.onClear = emptyFunction;
    mountDynamicButtonWithProps();

    const clearButton = mountedDynamicButton.root.findByType(ClearButton);

    expect(clearButton).toBeTruthy();
  });
});
