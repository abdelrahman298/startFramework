// import React, { Component } from "react";
// import "./portfolio.css";

// import Portfolio from "./Portfolio.jsx";

// export default class PortfolioLayout extends Component {
//   removeImg = (e) => {
//     const parentLayout = e.currentTarget;
//     const selectedLayout = e.target;
//     if (selectedLayout === parentLayout) {
//       // selectedLayout.classList.add("d-none");
//       selectedLayout.classList.add("d-none");
//     }

//     // layOut.classList.add("d-none");
//   };

//   // addNone = () => {
//   //   const layOut = document.getElementsByClassName("portfolio-layout");
//   //   layOut.classList.add("d-none");
//   // };
//   // removeNone = () => {
//   //   const layOut = document.getElementsByClassName("portfolio-layout");
//   //   layOut.classList.remove("d-none");
//   // };

//   render() {
//     return (
//       <>
//         {this.props.imgUrl ? (
//           <div
//             onClick={(e) => {
//               this.removeImg(e);
//             }}
//             className="portfolio-layout"
//           >
//             <div className="layout-img-container">
//               <div className="layout-img">
//                 <img src={this.props.imgUrl} alt="image" />
//               </div>
//             </div>
//           </div>
//         ) : (
//           ""
//         )}
//       </>
//     );
//   }
// }
