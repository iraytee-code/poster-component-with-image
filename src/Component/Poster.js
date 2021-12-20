import React from "react";

const Poster = (props) => {
  //   const { img, title, text } = props;
  return (
    <div className="poster">
      <div className="image-cnt">
        <img src={props.img} alt="" />
      </div>
      <p className="title-txt">{props.title}</p>
      <p className="sub-title-txt">{props.text}</p>
    </div>
  );
};

export default Poster;

// {dataInfo[0].title}
