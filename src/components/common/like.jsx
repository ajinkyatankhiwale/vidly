import React from "react";
import "font-awesome/css/font-awesome.css";

const Like = props => {
  return (
    <i
      onClick={props.onLikeClick}
      className={props.movie.liked ? "fa fa-heart" : "fa fa-heart-o"}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;
