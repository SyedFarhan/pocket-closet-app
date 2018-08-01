import initStoryshots from '@storybook/addon-storyshots';
import { defaultDynamicButtonSpecs, searchedDynamicButtonSpecs } from '../src/features/GarmentSearch/native/DynamicButton.test';

jest.mock('global', () => global);

global.describe = describe;
global.beforeEach = beforeEach;
global.it = it;
global.test = it;
global.expect = expect;

initStoryshots();
