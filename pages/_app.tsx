import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'mobx-react';
import AppStore from '../src/store/AppStore';
import MainCSS from '../src/style/main.style';
import Footer from '../src/components/organisms/Footer/Footer';

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
          <Component />
          <Footer  store={stores}/>
        </Container>
      </Provider>
    )
  }
}

