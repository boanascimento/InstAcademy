import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as S from './styles';

interface IHeaderProps {
  statusBarColor?: string;
  content: JSX.Element;
}

export class Header extends Component<IHeaderProps> {
  constructor(props: IHeaderProps) {
    super(props);
  }

  render() {
    return (
      <>
        <S.Header>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={this.props?.statusBarColor ? this.props?.statusBarColor : Colors.lighter}
          />
          {this.props.content}
        </S.Header>
      </>
    );
  }
}
