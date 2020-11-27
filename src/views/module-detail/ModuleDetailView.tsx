
import React, { Component } from 'react';
import * as S from './styles';
import { SafeAreaView, StatusBar } from 'react-native';
import { Module } from '../../models/Module';
import { ViewNames } from '../../routes/StackNavigation';

interface IModuleDetailProps {
  route: {
    params: {
      module: Module
    }
  };
  navigation: Object
}

export class ModuleDetailView extends Component<IModuleDetailProps> {

  private module: Module;
  private navigation: any;
  constructor(props: IModuleDetailProps) {
    super(props);

    this.module = new Module(props.route.params.module);
  }

  componentDidMount() {
    this.navigation = this.props.navigation;
  }

  goBack() {
    this.navigation.navigate(ViewNames.mainView);
  }

  render() {
    return (
      <>
        <StatusBar barStyle={'light-content'} />
        <SafeAreaView>
          <S.ScrollView>
            <S.View>
              {/* <Button onPress={this.goBack} title="Back" /> */}
              <S.ModuleName>{this.module.name}</S.ModuleName>
            </S.View>
          </S.ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
