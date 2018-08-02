/* global jest, it, expect, describe */
import React from 'react';
import 'react-dom';
import 'react-native-mock-render/mock';
import renderer from 'react-test-renderer';

import DynamicButton from './DynamicButton';
import ClearButton from './ClearButton';
import SearchButton from './SearchButton';

export const defaultDynamicButtonSpecs = describe('DynamicButton default', () => {
  it('renders `SearchButton` when isSearched prop is false', () => {
    const renderedComponent = renderer
      .create(<DynamicButton isSearched={false} onSearch={() => {}} />);
    const searchButton = renderedComponent.root.findByType(SearchButton);
    expect(searchButton).toBeTruthy();
  });

  it('calls onSearch prop when SearchButton is pressed', () => {
    const onSearchMock = jest.fn();
    const renderedComponent = renderer
      .create(<DynamicButton isSearched={false} onSearch={onSearchMock} />);
    const searchButton = renderedComponent.root.findByType(SearchButton);
    searchButton.props.onSearch();
    expect(onSearchMock.mock.calls.length).toBe(1);
  });
});


export const searchedDynamicButtonSpecs = describe('Dynamic Button after search', () => {
  it('renders `ClearButton` when isSearched prop is true', () => {
    const onClearMock = () => {};
    const renderedDynamicButton = renderer
      .create(<DynamicButton isSearched onClear={onClearMock} />);
    const clearButton = renderedDynamicButton.root.findByType(ClearButton);

    expect(clearButton).toBeTruthy();
  });

  it('calls "onClear" prop on press', () => {
    const onClearMock = jest.fn();
    const renderedDynamicButton = renderer
      .create(<DynamicButton isSearched onClear={onClearMock} />);
    const clearButton = renderedDynamicButton.root.findByType(ClearButton);

    clearButton.props.onClear();

    expect(onClearMock.mock.calls.length).toBe(1);
  });
});
