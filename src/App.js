import React from "react";
import Poster from "./Component/Poster";
import logo from "./assets/images/logo512.png";
function App() {
  // const dataInfo = {
  //   text: "Hello",
  //   img: logo,
  //   title: "welcome",
  // };
  return (
    <Poster
      img={logo}
      title="REACT"
      text="The best thing since jQuery, Probably."
    />
  );
}

export default App;
// [
//
//   {
//     text: "Hello",
//     img: logo,
//     title: "welcome",
//   },
//   {
//     text: "Hello",
//     img: logo,
//     title: "welcome",
//   },
// ];
