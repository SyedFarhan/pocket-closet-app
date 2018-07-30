import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { specs } from 'storybook-addon-specifications';

// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import CenterView from './CenterView';
import DynamicButton from '../../src/features/GarmentSearch/native/DynamicButton';
import { defaultDynamicButtonSpecs, searchedDynamicButtonSpecs} from '../../src/features/GarmentSearch/native/DynamicButton.test';

storiesOf('DynamicButton', module)
  .add('default', () => {
    const story = <CenterView><DynamicButton isSearched={false} onSearch={() => {}} /></CenterView>;
    specs(() => defaultDynamicButtonSpecs);
    return story;
  })
  .add('after search', () => {
    const story = <CenterView><DynamicButton isSearched onClear={() => {}} /></CenterView>;
    specs(() => searchedDynamicButtonSpecs);
    return story;
  });

