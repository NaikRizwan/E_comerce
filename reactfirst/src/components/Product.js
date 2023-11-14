// import React from "react";
// import { NavLink } from "react-router-dom";

// const Product = () => {
// //   const { id, name, image, price, category } = curElem;
// //   return (
// //     <NavLink to={`/singleproduct/${id}`}>
// //       <div className="card">
// //         <figure>
// //           <img src={image} alt={name} />
// //           <figcaption className="caption">{category}</figcaption>
// //         </figure>

// //         <div className="card-data">
// //           <div className="card-data-flex">
// //             <h3>{name}</h3>
// //             <p className="card-data--price">{price}</p>
// //           </div>
// //         </div>
// //       </div>
// //     </NavLink>
// // const courses = [

// //   {
// //     id: 0,
// //     name: 'pen',
// //     price: '89,999',
// //     image:"images/logo.png"
// //   },

// //   {

// //     id: 1,
// //     name: 'Python ',
// //     price: '64,999',
// //     image:"images/logo.png"
// //   },

// //   {
// //     id: 2,
// //     name: 'UI/UX Program',
// //     price: '89,999',
// //     image:"images/logo.png"
// //   }

// // ]
// const id=1;
//   return (
//     <NavLink to={`/singleproduct/${id}`}>
//       <div className="card">
//         <figure>
//           <img src="images/logo.png" alt="name" />
//           <figcaption className="caption">Pen</figcaption>
//         </figure>

//         <div className="card-data">
//           <div className="card-data-flex">
//             <h3>Montex</h3>
//             <p className="card-data--price">25</p>
//           </div>
//         </div>
//       </div>
//     </NavLink>
//   );
// };

// export default Product;
import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">
              <FormatPrice price={price} />
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
