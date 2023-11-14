// // import { createContext, useContext } from "react";
// // // import axios from "axios";
// // // import reducer from "../reducer/productReducer";

// // const AppContext = createContext();

// // // const API = "https://api.pujakaitem.com/api/products";
// // // console.log(API);
// // // const API=
// // // [{"id":"thapaserialnoa","name":"iphone x","company":"apple","price":6000000,"colors":["#ff0000","#000000","#CDD0D0"],"image":"https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","description":"The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.","category":"mobile","featured":true},

// // //  {"id":"thapaserialnoa","name":"iphone x","company":"apple","price":6000000,"colors":["#ff0000","#000000","#CDD0D0"],"image":"https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","description":"The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.","category":"mobile","featured":true},
// // //  {"id":"thapaserialnoa","name":"iphone x","company":"apple","price":6000000,"colors":["#ff0000","#000000","#CDD0D0"],"image":"https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","description":"The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.","category":"mobile","featured":true}
// // // ]
// // // console.log(API);
// // // const API = [

// // //     {
// // //       id: 0,
// // //       name: 'pen',
// // //       price: '89,999',
// // //       image:"images/logo.png",
// // //       category:'pen'
// // //     },

// // //     {

// //   //     id: 1,
// //   //     name: 'Python ',
// //   //     price: '64,999',
// //   //     image:"images/logo.png",
// //   //     category:'pen'
// //   //   },

// //   //   {
// //   //     id: 2,
// //   //     name: 'UI/UX Program',
// //   //     price: '89,999',
// //   //     image:"images/logo.png",
// //   //     category:'pen'
// //   //   }

// //   // ]
// // // const initialState = {
// // //   isLoading: false,
// // //   isError: false,
// // //   products: [],
// // //   featureProducts: [],
// // //   isSingleLoading: false,
// // //   singleProduct: {},
// // // };

// // const AppProvider = ({ props }) => {
// //   const API=
// // [{"id":"thapaserialnoa","name":"iphone x","company":"apple","price":6000000,"colors":["#ff0000","#000000","#CDD0D0"],"image":"https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","description":"The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.","category":"mobile","featured":true},

// //  {"id":"thapaserialnoa","name":"iphone x","company":"apple","price":6000000,"colors":["#ff0000","#000000","#CDD0D0"],"image":"https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","description":"The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.","category":"mobile","featured":true},
// //  {"id":"thapaserialnoa","name":"iphone x","company":"apple","price":6000000,"colors":["#ff0000","#000000","#CDD0D0"],"image":"https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","description":"The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.","category":"mobile","featured":true}
// // ]
// //   // const [state, dispatch] = useReducer(reducer, initialState);

// //   // const getProducts = async (url) => {
// //   //   dispatch({ type: "SET_LOADING" });
// //   //   try {
// //   //     const res = await axios.get(url);
// //   //     const products = await res.data;
// //   //     dispatch({ type: "SET_API_DATA", payload: products });
// //   //   } catch (error) {
// //   //     dispatch({ type: "API_ERROR" });
// //   //   }
// //   // };

// //   // my 2nd api call for single product

// //   // const getSingleProduct = async (url) => {
// //   //   dispatch({ type: "SET_SINGLE_LOADING" });
// //   //   try {
// //   //     const res = await axios.get(url);
// //   //     const singleProduct = await res.data;
// //   //     dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
// //   //   } catch (error) {
// //   //     dispatch({ type: "SET_SINGLE_ERROR" });
// //   //   }
// //   // };

// //   // useEffect(() => {
// //   //   getProducts(API);
// //   // }, []);

// //   // return (
// //   //   <AppContext.Provider value={{ ...state, getSingleProduct }}>
// //   //     {children}
// //   //   </AppContext.Provider>
// //  // );
// // //};
// // return (
// //   <AppContext.Provider value={API}>
// //     {props.children}
// //   </AppContext.Provider>
// // );
// // };

// // // custom hooks
// // const useProductContext = () => {
// //   return useContext(AppContext);
// // };

// // export { AppProvider, AppContext, useProductContext };
// import { createContext, useContext, useEffect, useReducer } from "react";
//  import axios from "axios";
// import reducer from "../reducer/productReducer";
//  // import { Data } from "../Data";

// const AppContext = createContext();

//  //const API = "https://api.pujakaitem.com/api/products";
// // const API=Data;
// // console.log(API);
// const initialState = {
//   isLoading: false,
//   isError: false,
//   products: [],
//   featureProducts: [],
//   isSingleLoading: false,
//   singleProduct: {},
// };
// // const App = () => {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     fetch("data.json")
// //       .then(res => res.json())
// //       .then(data => setData(data));
//  // }, []);
// // useEffect(() => {
// //   fetch("data.json")
// //     .then(res => res.json())
// //     .then(data => setData(data));
// // }, []);
// const AppProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const getProducts = async (url) => {
//     dispatch({ type: "SET_LOADING" });
//     try {
//       const res = await axios.get(url);
//       console.log("hello",
//       res
//       );
//       const products = await res.data;
//       dispatch({ type: "SET_API_DATA", payload: products });
//     } catch (error) {
//       dispatch({ type: "API_ERROR" });
//     }
//   };

//   // my 2nd api call for single product axios.

//   const getSingleProduct = async (url) => {
//     dispatch({ type: "SET_SINGLE_LOADING" });
//     try {
//       const res = await axios.get(url);
//       const singleProduct = await res.data;
//       dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
//     } catch (error) {
//       dispatch({ type: "SET_SINGLE_ERROR" });
//     }
//   };

//   useEffect(() => {
//     getProducts("data.json");
//   }, []);

//   return (
//     <AppContext.Provider value={{ ...state, getSingleProduct }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// // custom hooks
// const useProductContext = () => {
//   return useContext(AppContext);
// };

// export { AppProvider, AppContext, useProductContext };

import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();
// const API = "https://api.pujakaitem.com/api/products";
const API = "https://jamia.onrender.com/api/data";
// const API = "http://localhost:3001/api/data";
// console.log("hello",API);
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // my 2nd api call for single product

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
