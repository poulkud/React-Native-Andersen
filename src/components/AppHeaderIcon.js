import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {HeaderButton} from 'react-navigation-header-buttons';

export const AppHeaderIcon = (props) => (
  <HeaderButton
    {...props}
    iconSize={24}
    IconComponent={MaterialIcons}
    color="#fff"
  />
);
