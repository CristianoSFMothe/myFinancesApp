import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../pages/Home';

const AppDrawer = createDrawerNavigator();

const AppRoutes = () => {
  <AppDrawer.Navigator>
    <AppDrawer.Screen name="Home" component={Home} />
  </AppDrawer.Navigator>;
};

export default AppRoutes;
