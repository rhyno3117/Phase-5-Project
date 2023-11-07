// import React, { useEffect, useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.css';

// function SetFits({ user, setUser, clothes, setClothes, clothesData, setClothesData }) {
//   const [categoryImage, setCategoryImage] = useState([]);
//   const [fits, setFits] = useState([]);

//   function fun(index, photo) {
//     console.log(index);
//     console.log(photo);
//   }

//   const buttonStyle = {
//     height: '10vh',
//     border: 'none',
//     background: 'none',
//     cursor: 'pointer',
//     margin: '12vh'
//   };

//   return (
//     <div>
//       <div id="arrow-tops">
//         <button style={buttonStyle} onClick={() => fun('Tops', 'photoURL')}>
//           <img
//             src="https://t4.ftcdn.net/jpg/05/30/79/15/360_F_530791557_T8hNharBQQJqmw0R2FRjCrC9CgNwaeui.jpg"
//             alt="Tops Arrow"
//             style={{ height: '100%' }}
//           />
//         </button>
//       </div>

//       <div id="arrowr-bottoms">
//         <button style={buttonStyle} onClick={() => fun('Bottoms', 'photoURL')}>
//           <img
//             src="https://t4.ftcdn.net/jpg/05/30/79/15/360_F_530791557_T8hNharBQQJqmw0R2FRjCrC9CgNwaeui.jpg"
//             alt="Bottoms Arrow"
//             style={{ height: '100%' }}
//           />
//         </button>
//       </div>
//       <div id="arrow-socks">
//         <button style={buttonStyle} onClick={() => fun('Socks', 'photoURL')}>
//           <img
//             src="https://t4.ftcdn.net/jpg/05/30/79/15/360_F_530791557_T8hNharBQQJqmw0R2FRjCrC9CgNwaeui.jpg"
//             alt="Socks Arrow"
//             style={{ height: '100%' }}
//           />
//         </button>
//       </div>

//       <div id="arrow-shoes">
//         <button style={buttonStyle} onClick={() => fun('Shoes', 'photoURL')}>
//           <img
//             src="https://t4.ftcdn.net/jpg/05/30/79/15/360_F_530791557_T8hNharBQQJqmw0R2FRjCrC9CgNwaeui.jpg"
//             alt="Shoes Arrow"
//             style={{ height: '100%' }}
//           />
//         </button>
//       </div>

//       <div id="arrow-accessories">
//         <button style={buttonStyle} onClick={() => fun('Accessories', 'photoURL')}>
//           <img
//             src="https://t4.ftcdn.net/jpg/05/30/79/15/360_F_530791557_T8hNharBQQJqmw0R2FRjCrC9CgNwaeui.jpg"
//             alt="Accessories Arrow"
//             style={{ height: '100%' }}
//           />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SetFits;
