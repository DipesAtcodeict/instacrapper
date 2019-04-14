import React, { Component } from 'react';
import './searchbox.css';
import Slide from 'react-reveal/Slide';

export default class SearchBox extends Component {

    state= {
        searchKey : ''
    }

    handleInput = (e) => {
        this.setState({
            searchKey: e.target.value
        })
    }

    sendData = (e)=>{
        e.preventDefault();
        this.props.getData(this.state.searchKey);
    }

  render() {
    return (
        <Slide left delay={1000}>
        <div className="searchbox">
            <form onSubmit={this.sendData}>
                <input type="text" placeholder="Enter the instagram name" className="INP" onChange={this.handleInput}/>
                <button type="submit">SCRAP</button>
            </form>

            <div className="search-desc">
                The power of webscrapping.....!!
            </div>
        </div>
        </Slide>
    )
  }
}
