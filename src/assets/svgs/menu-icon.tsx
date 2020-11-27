
import Svg, { Rect } from 'react-native-svg';
import React, { Component } from 'react';

export default class MenuIcon extends Component {
  render() {
    return (
      <Svg
        width="30"
        height="16"
        fill="none"
        viewBox="0 0 30 16"
      >
        <Rect width="30" height="4" fill="#000" rx="2" />
        <Rect width="20" height="4" y="12" fill="#000" rx="2" />
      </Svg>
    );
  }
}
