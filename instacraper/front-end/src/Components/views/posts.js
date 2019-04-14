import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./posts.css";

const Posts = props => {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={false}
    >
      <div>
        <img
          src={props.posts.post0 ? props.posts.post0.image : ""}
          alt="pic1"
        />
        <p className="legend">
          <span className="caption">
            {`${props.posts.post0 ? props.posts.post0.caption : ""}`}{" "}
          </span>
          <span className="likes">{`LIKES: ${
            props.posts.post0 ? props.posts.post0.likes : " "
          }`}</span>
        </p>
      </div>
      <div>
        <img
          src={props.posts.post1 ? props.posts.post1.image : ""}
          alt="pic2"
        />
        <p className="legend">
          <span className="caption">
            {`${props.posts.post1 ? props.posts.post1.caption : ""}`}{" "}
          </span>
          <span className="likes">{`LIKES: ${
            props.posts.post1 ? props.posts.post1.likes : ""
          }`}</span>
        </p>
      </div>
      <div>
        <img
          src={props.posts.post2 ? props.posts.post2.image : ""}
          alt="pic3"
        />
        <p className="legend">
          <span className="caption">
            {`${props.posts.post2 ? props.posts.post2.caption : ""}`}{" "}
          </span>
          <span className="likes">{`LIKES: ${
            props.posts.post2 ? props.posts.post2.likes : ""
          }`}</span>
        </p>
      </div>
      <div>
        <img
          src={props.posts.post3 ? props.posts.post3.image : ""}
          alt="pic4"
        />
        <p className="legend">
          <span className="caption">
            {`${props.posts.post3 ? props.posts.post3.caption : ""}`}{" "}
          </span>
          <span className="likes">{`LIKES: ${
            props.posts.post3 ? props.posts.post3.likes : ""
          }`}</span>
        </p>
      </div>
      <div>
        <img
          src={props.posts.post4 ? props.posts.post4.image : ""}
          alt="pic5"
        />
        <p className="legend">
          <span className="caption">
            {`${props.posts.post4 ? props.posts.post4.caption : ""}`}{" "}
          </span>
          <span className="likes">{`LIKES: ${
            props.posts.post4 ? props.posts.post4.likes : ""
          }`}</span>
        </p>
      </div>
      <div>
        <img
          src={props.posts.post5 ? props.posts.post5.image : ""}
          alt="pic6"
        />
        <p className="legend">
          <span className="caption">
            {`${props.posts.post5 ? props.posts.post5.caption : ""}`}{" "}
          </span>
          <span className="likes">{`LIKES: ${
            props.posts.post5 ? props.posts.post5.likes : ""
          }`}</span>
        </p>
      </div>
      <div>
        <img
          src={props.posts.post6 ? props.posts.post6.image : ""}
          alt="pic7"
        />
        <p className="legend">
          <span className="caption">
            {`${props.posts.post6 ? props.posts.post6.caption : ""}`}{" "}
          </span>
          <span className="likes">{`LIKES: ${
            props.posts.post6 ? props.posts.post6.likes : ""
          }`}</span>
        </p>
      </div>
      <div>
        <img
          src={props.posts.post7 ? props.posts.post7.image : ""}
          alt="pic8"
        />
        <p className="legend">
          <span className="caption">
            {`${props.posts.post7 ? props.posts.post7.caption : ""}`}{" "}
          </span>
          <span className="likes">{`LIKES: ${
            props.posts.post7 ? props.posts.post7.likes : ""
          }`}</span>
        </p>
      </div>
      <div>
        <img
          src={props.posts.post8 ? props.posts.post8.image : ""}
          alt="pic9"
        />
        <p className="legend">
          <span className="caption">
            {`${props.posts.post8 ? props.posts.post8.caption : ""}`}{" "}
          </span>
          <span className="likes">{`LIKES: ${
            props.posts.post8 ? props.posts.post8.likes : ""
          }`}</span>
        </p>
      </div>
      <div>
        <img
          src={props.posts.post9 ? props.posts.post9.image : ""}
          alt="pic10"
        />
        <p className="legend">
          <span className="caption">
            {`${props.posts.post9 ? props.posts.post9.caption : ""}`}{" "}
          </span>
          <span className="likes">{`LIKES: ${
            props.posts.post9 ? props.posts.post9.likes : ""
          }`}</span>
        </p>
      </div>
      <div>
        <img
          src={props.posts.post10 ? props.posts.post10.image : ""}
          alt="pic11"
        />
        <p className="legend">
          <span className="caption">
            {`${props.posts.post10 ? props.posts.post10.caption : ""}`}{" "}
          </span>
          <span className="likes">{`LIKES: ${
            props.posts.post10 ? props.posts.post10.likes : ""
          }`}</span>
        </p>
      </div>
      <div>
        <img
          src={props.posts.post11 ? props.posts.post11.image : ""}
          alt="pic12"
        />
        <p className="legend">
          <span className="caption">
            {`${props.posts.post11 ? props.posts.post11.caption : ""}`}{" "}
          </span>
          <span className="likes">{`LIKES: ${
            props.posts.post11 ? props.posts.post11.likes : ""
          }`}</span>
        </p>
      </div>
    </Carousel>
  );
};

export default Posts;
