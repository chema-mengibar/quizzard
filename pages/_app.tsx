import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'mobx-react';
import AppStore from '../store/AppStore';

import styled, { css } from 'styled-components';
import MainCSS from '../style/main.style';
import theme from '../style/theme.shared';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const stores = {
  AppStore
};

export default class MyApp extends App {

  render () {
    const { Component } = this.props
    return (
      <Provider {...stores}>
        <MainCSS/>
        <Container>
          <Header/>
          <Component />
          <Footer  store={stores}/>
        </Container>
      </Provider>
    )
  }
}

