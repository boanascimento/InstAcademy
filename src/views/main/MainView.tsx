
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react';
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { globalStyles } from '../../styles';
import * as S from './styles';
import { ModuleCard } from '../../components/module-card/ModuleCardComponent';
import Carousel from 'react-native-snap-carousel';
import { Module } from '../../models/Module';
import { ViewNames } from '../../routes/StackNavigation';
import MenuIcon from '../../assets/svgs/menu-icon';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';

Icon.loadFont();

type MainViewNavigationProp = StackNavigationProp<any> | DrawerNavigationProp<any>;

interface IMainViewProps {
  navigation: MainViewNavigationProp
}

interface IRenderItem {
  index: number;
  item: Module;
}

const Modules = require('../../assets/mocks/modules.json') as Array<Module>;
const SLIDER_WIDTH = Dimensions.get('window').width;
const WINDOWS_HEIGHT = Dimensions.get('window').height;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6);
const VIEW_CAROUSEL_MARGIN_TOP = Math.round(WINDOWS_HEIGHT / 6);

const styles = StyleSheet.create({
  viewCarousel: {
    marginTop: VIEW_CAROUSEL_MARGIN_TOP,
  },
});

export class MainView extends Component<IMainViewProps> {

  private modules = Modules;
  private navigation: MainViewNavigationProp;

  constructor(props: IMainViewProps) {
    super(props);
    this.state = {
      modules: this.modules,
    };
    this.navigation = this.props.navigation;
  }

  _renderItem = (item: IRenderItem) => {
    return (
      <>
        <TouchableHighlight
          onPress={this.goToModuleDetailView.bind(this, item.item)}
          underlayColor="transparent">
          <ModuleCard module={item.item} />
        </TouchableHighlight>
      </>
    );
  }

  goToModuleDetailView(selectedModule: Module) {
    this.navigation.navigate(ViewNames.moduleDetail, { module: selectedModule });
  }

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <S.ScrollView contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={globalStyles.scrollView}>
            <S.View>
              <S.Header>
                <S.BtnMenu
                  icon={<MenuIcon />}
                  type="clear"
                  onPress={() => this.props.navigation.openDrawer()}
                />
              </S.Header>
              <S.Title>InstAcademy</S.Title>
              <S.ViewCarousel style={styles.viewCarousel}>
                <Carousel
                  style={S.subStyles.carousel}
                  layout={'default'}
                  layoutCardOffset={18}
                  horizontal={true}
                  sliderWidth={SLIDER_WIDTH}
                  itemWidth={ITEM_WIDTH}
                  renderItem={this._renderItem}
                  data={this.modules}
                  onSnapToItem={(index) => this.setState({ activeSlide: index })}
                  activeSlideAlignment={'start'}
                  inactiveSlideScale={0.9}
                />
              </S.ViewCarousel>
            </S.View>
          </S.ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
