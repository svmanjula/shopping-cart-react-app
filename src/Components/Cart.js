import React, { useEffect, useState } from "react";
import { CartState } from "../Context/Context";
import {AiFillDelete } from "react-icons/ai"
import Rating from "./Rating";


import { ListGroup, Button, Row, Col, Image , Form} from "react-bootstrap";

const Cart = () => {
  const {
    state: { cart, },dispatch 
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr)=>{
return acc + Number( curr.price)*(curr.qty)
    }, 0 ))
  }, [cart]);

  return (
//     <div className="home">
//       <div className="productsContainer">
//         <ListGroup>
//           {cart.map((prod) => {
          
//             <ListGroup.Item>
//               <Row>
//                 <Col md={2} >
//                 <span>{prod.name} </span>
//                 </Col>
//               </Row>

//               </ListGroup.Item>
//           })}
//         </ListGroup>
//       </div>

//       <div className="filters summary">
//         <span className="title">subtotal {cart.length} items</span>
//         <span style={{ fontWeight: 700, fontSize: 20 }}>
//           {" "}
//           Total : $ {total}{" "}
//         </span>
//         <Button type="button" disabled={cart.lenghth === 0}>
//           Proceed checkout
//         </Button>
//       </div>
//     </div>
//   );
// };

<div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>₹ {prod.price}</Col>
                <Col md={2}>
                  <Rating rating={prod.ratings} />
                </Col>
                <Col md={2}>
                  {/* <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control> */}
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};


export default Cart;