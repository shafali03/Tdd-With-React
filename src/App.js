import React, { Component } from 'react';
import Header from './component/header/index';
import Headline from './component/headline/index';
import './component/header/styles.scss'
import './app.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline header='Posts' desc="Click the button to render post" />
        </section>
      </div>
    );
  }

}

export default App;
