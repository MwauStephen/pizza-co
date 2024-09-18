import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTotalCartQuantity, getTotalCartPrice } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  // best practice of deriving state from store
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);

  // gaurd to add component if no items in cart
  if (!totalCartQuantity) return;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
