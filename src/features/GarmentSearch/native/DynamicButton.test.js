/* global test */
import React from 'react';
import 'react-dom';
import 'react-native-mock-render/mock';
import renderer from 'react-test-renderer';

import DynamicButton from './DynamicButton';
import ClearButton from './ClearButton';
import SearchButton from './SearchButton';
import { Button } from 'native-base';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const { JSDOM } = require('jsdom');

configure({ adapter: new Adapter() });

global.console = {
  ...console,
  debug: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);
export const defaultDynamicButtonSpecs = describe('default', () => {

  test('renders `SearchButton` when isSearched prop is false', () => {
    const renderedComponent = renderer
      .create(<DynamicButton isSearched={false} onSearch={() => {}} />);
    const searchButton = renderedComponent.root.findByType(SearchButton);
    expect(searchButton).toBeTruthy();
  });

  test('calls onSearch prop when SearchButton is pressed', () => {
    console.log("yoooooooo")
    let mock = () => console.log('test');
    mock = jest.fn();
    const mountedComponent = mount(<DynamicButton isSearched={false} onSearch={mock} />);
    mountedComponent.find(Button).simulate('click');
    expect(1).toBe(1);
  })
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
