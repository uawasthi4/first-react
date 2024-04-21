import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-6 p-6">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length !== 0 && (
          <button
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
        {cartItems.length === 0 && (
          <h1>
            Your cart is empty. Please{" "}
            {
              <Link to="/">
                <span className="font-bold underline">add</span>
              </Link>
            }{" "}
            some!
          </h1>
        )}
        <ItemList items={cartItems}></ItemList>
      </div>
    </div>
  );
};

export default Cart;
