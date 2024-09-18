import React from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();

  //dispatch an action to delete the pizza from the cart
  const handleDelete = () => {
    dispatch(deleteItem(pizzaId));
  };
  return (
    <Button type="small" onClick={handleDelete}>
      Delete
    </Button>
  );
};

export default DeleteItem;
