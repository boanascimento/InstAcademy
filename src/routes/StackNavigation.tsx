import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainView } from '../views/main/MainView';
import { ModuleDetailView } from '../views/module-detail/ModuleDetailView';
import { SideMenuView } from '../views/side-menu/SideMenuView';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export enum ViewNames {
  mainView = 'Main View',
  moduleDetail = 'Module Detail',
  menu = 'Menu',
  sideMenu = 'sideMenu'
}

export class StackNavigation extends Component {

  root() {
    return (
      <>
        <Stack.Navigator
          initialRouteName={ViewNames.mainView}
        >
          <Stack.Screen
            name={ViewNames.mainView}
            component={MainView}
            options={{ headerShown: false }}

          />
          <Stack.Screen
            name={ViewNames.moduleDetail}
            component={ModuleDetailView}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </>
    );
  }

  drawerContent() {
    return (
      <SideMenuView />
    );
  }

  render() {
    return (
      <>
        <NavigationContainer >
          <Drawer.Navigator drawerContent={this.drawerContent} >
            <Drawer.Screen
              name={ViewNames.mainView}
              component={this.root}
              options={{ headerShown: false }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </>
    );
  }
}