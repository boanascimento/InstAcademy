import React, { Component } from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Linking } from 'react-native';

export class SideMenuView extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <>
        <DrawerContentScrollView >
          <DrawerItem
            label="More Academies"
            onPress={() => Linking.openURL('https://www.instagram.com/boanergessouza/')}
          />
        </DrawerContentScrollView>
      </>
    );
  }
}
