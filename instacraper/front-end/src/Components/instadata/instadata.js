import React, { Component } from 'react';
import axios from 'axios';

import MainInfo from '../views/mainInfo';
import Posts from '../views/posts';

import './instadata.css'

export default class Instadata extends Component {

  state = {
    userName: this.props.name,

    mainInfo:{},

    posts: {}
  }

  componentWillMount(){
    axios.get(`http://localhost:3500/?search_name=${this.state.userName}`)
    .then((response)=>{
      let postsData = response.data.posts;
      this.setState({
        mainInfo: {
          profilePicture: response.data.picture_url,
          fullname: response.data.full_name,
          followers: response.data.followers,
          following: response.data.following,
          uploads: response.data.uploads
        },

        posts: {
          post0: {
            image: postsData[0].image_url,
            caption: postsData[0].caption,
            likes: postsData[0].likes
          },
          post1: {
            image: postsData[1].image_url,
            caption: postsData[1].caption,
            likes: postsData[1].likes
          },
          post2: {
            image: postsData[2].image_url,
            caption: postsData[2].caption,
            likes: postsData[2].likes
          },
          post3: {
            image: postsData[3].image_url,
            caption: postsData[3].caption,
            likes: postsData[3].likes
          },
          post4: {
            image: postsData[4].image_url,
            caption: postsData[4].caption,
            likes: postsData[4].likes
          },
          post5: {
            image: postsData[5].image_url,
            caption: postsData[5].caption,
            likes: postsData[5].likes
          },
          post6: {
            image: postsData[6].image_url,
            caption: postsData[6].caption,
            likes: postsData[6].likes
          },
          post7: {
            image: postsData[7].image_url,
            caption: postsData[7].caption,
            likes: postsData[7].likes
          },
          post8: {
            image: postsData[8].image_url,
            caption: postsData[8].caption,
            likes: postsData[8].likes
          },
          post9: {
            image: postsData[9].image_url,
            caption: postsData[9].caption,
            likes: postsData[9].likes
          },
          post10: {
            image: postsData[10].image_url,
            caption: postsData[10].caption,
            likes: postsData[10].likes
          },
          post11: {
            image: postsData[11].image_url,
            caption: postsData[11].caption,
            likes: postsData[11].likes
          },
        }
      })
    })
    .catch((e)=>{
      console.log(e);
    })
  }

  render() {
    return (
      <div className="views">
        <MainInfo mainInfo = {this.state.mainInfo} className="main-info"/>
        <Posts posts={this.state.posts} className="posts"/>
      </div>
    )
  }
}
