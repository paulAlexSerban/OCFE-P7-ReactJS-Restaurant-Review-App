import React, { Component } from 'react';
import Main from '../../structure/main/Main';
import Header from '../../structure/header/Header';
import Footer from '../../structure/footer/Footer';

export class Basepage extends Component {
  render() {
    return (
      <div className="basepage">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default Basepage
