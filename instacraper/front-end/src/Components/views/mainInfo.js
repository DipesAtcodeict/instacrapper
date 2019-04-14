import React from 'react';
import Fade from 'react-reveal/Fade'; 
import './maininfo.css';

const MainInfo = (props) => {
    return (
      <Fade top delay={3000}>
        <div className="maininfo">
          <div className="name">Full Name: {props.mainInfo.fullname}</div> 
          <div className="followers">Followers: {props.mainInfo.followers}</div> 
          <div className="following">Following: {props.mainInfo.following}</div> 
          <div>Total Posts: {props.mainInfo.uploads}</div>
          <img src={props.mainInfo.profilePicture} alt="img" className="profilepic"/>
        </div>
      </Fade>
    );
};

export default MainInfo;
