import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text, H1 } from 'native-base';
import Spacer from './Spacer';

const Header = ({ title, description }) => {
  const renderIfDescription = () => (
    description
    && (
      <View>
        <Spacer size={10}/>
        <Text>{description}</Text>
      </View>
    )
  );

  return (
    <View>
      <Spacer size={25} />
      <H1>{title}</H1>
      {renderIfDescription()}
      <Spacer size={25} />
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Header.defaultProps = {
  title: 'Missing title',
  description: '',
};

export default Header;
