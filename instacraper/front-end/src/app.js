import React, { Component } from 'react';
import './app.css';

import Header from './Components/header/header';
import SearchBox from './Components/searchbox/searchbox.js';
import Instadata from './Components/instadata/instadata';

export default class App extends Component {

  state= {
    instaName: ''
  }

  getData=(data)=>{
    this.setState({
      instaName: data
    })
  }

  render() {
    return (
      <div className="app">
        <Header/>
        {
          this.state.instaName===''
          ?
          <SearchBox getData={this.getData}/>
          :
          <Instadata name={this.state.instaName}/>
        }
      </div>
    )
  }
}
