import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { specs, describe, it, beforeEach } from 'storybook-addon-specifications';
import renderer from 'react-test-renderer';
import expect from 'expect';


import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';
import DynamicButton from '../../src/features/GarmentSearch/native/DynamicButton';
import SearchButton from '../../src/features/GarmentSearch/native/SearchButton'
storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);


storiesOf('DynamicButton', module)
  .add('default', () => <DynamicButton isSearched={false} onSearch={() => {}} />)
  .add('after search', () => {
    const story = <CenterView><DynamicButton isSearched onClear={() => {}} /></CenterView>;

    specs(() => describe('after search', () => {
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

      it('renders `SearchButton` when isSearched prop is false', () => {
        props.isSearched = false;
        props.onSearch = emptyFunction;
        mountDynamicButtonWithProps();

        const searchButton = mountedDynamicButton.root.findByType(SearchButton);
        expect(searchButton).toBeTruthy();
      });
    }));
    return story;
  });

