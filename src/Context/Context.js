import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, productReducer } from "./Reducers"

const Cart = createContext();
faker.seed(99);


const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: Math.random() < 0.5,
    fastDelivery: Math.random() <  0.5,
    ratings:Math.random() *(5),
  }));

  console.log(products)
  const [state, dispatch] = useReducer( cartReducer , {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock:false,
    byFastDelivery:false,
    byRating:0,
    searchQuery:""
  })

  return <Cart.Provider value={{ state, dispatch,productState,productDispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
