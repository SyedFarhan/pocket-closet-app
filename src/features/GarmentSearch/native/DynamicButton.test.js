/* global test */
import React from 'react';
import 'react-dom';
import 'react-native-mock-render/mock';
import renderer from 'react-test-renderer';

import DynamicButton from './DynamicButton';
import ClearButton from './ClearButton';
import SearchButton from './SearchButton';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export const defaultDynamicButtonSpecs = describe('default', () => {

  test('renders `SearchButton` when isSearched prop is false', () => {
    const renderedComponent = renderer
      .create(<DynamicButton isSearched={false} onSearch={() => {}} />);
    const searchButton = renderedComponent.root.findByType(SearchButton);
    expect(searchButton).toBeTruthy();
  });
});

// export const searchedDynamicButtonSpecs = describe('after search', () => {
//   let props;
//   let mountedDynamicButton;
//   const mountDynamicButtonWithProps = () => {
//     mountedDynamicButton = mountedDynamicButton
//       ? mountedDynamicButton
//       : renderer.create(<DynamicButton {...props} />);
//     return mountedDynamicButton;
//   };
//
//   const emptyFunction = () => {};
//
//   const clearComponentAndProps = () => {
//     props = {
//       isSearched: undefined,
//       onClear: undefined,
//       onSearch: undefined,
//     };
//     mountedDynamicButton = undefined;
//   };
//
//
//   beforeEach(() => {
//     clearComponentAndProps();
//   });
//
//   test('renders `ClearButton` when isSearched prop is true', () => {
//     props.isSearched = true;
//     props.onClear = emptyFunction;
//     mountDynamicButtonWithProps();
//
//     const clearButton = mountedDynamicButton.root.findByType(ClearButton);
//
//     expect(clearButton).toBeTruthy();
//   });
// });
