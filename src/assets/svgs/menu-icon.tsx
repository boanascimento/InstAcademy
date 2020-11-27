
import Svg, { Rect } from 'react-native-svg';
import React, { Component } from 'react';

interface IMenuIcon {
  change: boolean
}

export default class MenuIcon extends Component<IMenuIcon> {

  constructor(props: IMenuIcon) {
    super(props);
  }

  render() {
    return (
      <>
        <Svg
          width="40"
          height="20"
          fill="none"
          viewBox="0 0 40 20"
        >
          <Rect width="30" height="4" fill="#000" rx="2" x="3" />
          <Rect width="20" height="4" y="12" fill="#000" rx="2" x="3" />
        </Svg>
        {/* <Svg width="31" height="30" viewBox="0 0 31 30" fill="none">
          <Rect x="-6" y="5" width="30" height="4" rx="2" transform={this.props.change ? 'rotate(45 6 21)' : 'rotate(0 6 21)'} fill="black" />
          <Rect x="5" y="21" width="30" height="4" rx="2" transform="rotate(-45 6 21)" fill="black" />
        </Svg> */}
      </>
    );
  }
}
