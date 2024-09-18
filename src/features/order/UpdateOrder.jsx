import React from 'react';
import Button from '../../ui/Button';
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant';

const UpdateOrder = ({ order }) => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form className="text-right" method="PATCH">
      <Button type="primary">Make Priority</Button>;
    </fetcher.Form>
  );
};

export default UpdateOrder;

// action
export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

// this component is repsonsible for marking an order as priority even after
// placing the order.We are using useFetcher.
