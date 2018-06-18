import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

import OutfitMakerContainer from '../../containers/OutfitMaker';
import OutfitMakerComponent from '../components/OutfitMaker';

import GarmentsContainer from '../../containers/Garments';
import GarmentsComponent from '../components/Garments';
import GarmentViewComponent from '../components/Garment';

import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/Login';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordComponent from '../components/ForgotPassword';

import LocaleContainer from '../../containers/Locale';
import LocaleComponent from '../components/Locale';

import UpdateProfileContainer from '../../containers/UpdateProfile';
import UpdateProfileComponent from '../components/UpdateProfile';

import MemberContainer from '../../containers/Member';
import ProfileComponent from '../components/Profile';

import GarmentSearchContainer from '../../containers/GarmentSearch';
import GarmentSearchComponent from '../components/GarmentSearch';
import GarmentBarcodeScanner from '../components/GarmentBarcodeScanner';

const Index = (
  <Stack>
    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel={false}
        {...DefaultProps.tabProps}
      >
        <Stack
          key="search"
          title="Pocket Closet"
          icon={() => <Icon name="search" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="search" component={GarmentSearchContainer} Layout={GarmentSearchComponent} />
          <Scene key="barcodeScanner" component={GarmentSearchContainer} Layout={GarmentBarcodeScanner} />
        </Stack>

        <Stack
          key="outfit"
          title="Create an Outfit"
          icon={() => <Icon name="shirt" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="outfit" component={OutfitMakerContainer} Layout={OutfitMakerComponent} />
        </Stack>

        <Stack
          key="garments"
          title="CLOSET"
          icon={() => <Icon name="md-pricetags" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="garments" component={GarmentsContainer} Layout={GarmentsComponent} />
        </Stack>

        <Stack
          key="profile"
          title="PROFILE"
          icon={() => <Icon name="contact" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="profileHome" component={MemberContainer} Layout={ProfileComponent} />
          <Scene
            back
            key="signUp"
            title="SIGN UP"
            {...DefaultProps.navbarProps}
            component={SignUpContainer}
            Layout={SignUpComponent}
          />
          <Scene
            back
            key="login"
            title="LOGIN"
            {...DefaultProps.navbarProps}
            component={LoginContainer}
            Layout={LoginComponent}
          />
          <Scene
            back
            key="forgotPassword"
            title="FORGOT PASSWORD"
            {...DefaultProps.navbarProps}
            component={ForgotPasswordContainer}
            Layout={ForgotPasswordComponent}
          />
          <Scene
            back
            key="locale"
            title="CHANGE LANGUAGE"
            {...DefaultProps.navbarProps}
            component={LocaleContainer}
            Layout={LocaleComponent}
          />
          <Scene
            back
            key="updateProfile"
            title="UPDATE PROFILE"
            {...DefaultProps.navbarProps}
            component={UpdateProfileContainer}
            Layout={UpdateProfileComponent}
          />
        </Stack>
      </Tabs>
    </Scene>

    <Scene
      back
      clone
      key="garment"
      title="GARMENT"
      {...DefaultProps.navbarProps}
      component={GarmentsContainer}
      Layout={GarmentViewComponent}
    />
  </Stack>
);

export default Index;
