
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainView from '../views/main/MainView';

const Stack = createStackNavigator();

export default props => {
  <Stack.Navigator>
    <Stack.Screen name="Tela inicial" component={MainView}/>
  </Stack.Navigator>;
}