import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { specs } from 'storybook-addon-specifications'

// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import CenterView from './CenterView';
import DynamicButton from '../../src/features/GarmentSearch/native/DynamicButton';
import buttonSpec from '../../src/features/GarmentSearch/native/DynamicButton.test';

storiesOf('DynamicButton', module)
  .add('default', () => <CenterView><DynamicButton isSearched={false} onSearch={() => {}} /></CenterView>)
  .add('after search', () => {
    const story = <CenterView><DynamicButton isSearched onClear={() => {}} /></CenterView>;

    specs(() => buttonSpec);

    return story;
  });

