
import React, { Component } from 'react';
import { Module } from '../../models/Module';
import * as S from './styles';

interface IModuleCardProps {
  module: Module;
  itemHeight?: number;
}

export class ModuleCard extends Component<IModuleCardProps> {

  private module: Module;

  constructor(props: IModuleCardProps) {
    super(props);
    this.module = props.module;
  }

  render() {
    return (
      <S.Card style={S.subStyles.cardShadow} >
        <S.Title>{this.module.name}</S.Title>
        <S.Description>{this.module.briefDescription}</S.Description>
      </S.Card>
    );
  }
}
