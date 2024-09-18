import React from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity } from './cartSlice';

const UpdateItemQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();

  //   //dispatch an action to increase the quantity of the pizza in the cart
  const handleIncreaseQuantity = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };
  //   //dispatch an action to decrease the quantity of the pizza in the cart
  const handleDecreaseQuantity = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={handleDecreaseQuantity}>
        -
      </Button>
      <span className="text-sm font-semibold">{currentQuantity}</span>
      <Button type="round" onClick={handleIncreaseQuantity}>
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
