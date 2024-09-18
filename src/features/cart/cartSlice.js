import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  //   cart: [
  //     {
  //       pizzaId: 12,
  //       name: 'Mediterranean',
  //       quantity: 2,
  //       unitPrice: 16,
  //       totalPrice: 32,
  //     },
  //   ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload=new pizza item
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload=pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload=pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++; // increase quantity by 1
      item.totalPrice = item.quantity * item.unitPrice; // update total price
    },
    decreaseItemQuantity(state, action) {
      // payload=pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--; // decrease quantity by 1
      item.totalPrice = item.quantity * item.unitPrice; // update total price

      // prevent quantity from exceeding below 0 method 1
      // if (item.quantity < 1) {
      //   state.cart = state.cart.filter(
      //     (item) => item.pizzaId !== action.payload
      //   );
      // }
      // prevent quantity from exceeding below 0 method 2
      if (item.quantity === 0) {
        return cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

// export the cart slice actions
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

// export the cart slice reducer
export default cartSlice.reducer;

// selector function for  cart items
export const getCart = (state) => state.cart.cart;

// selectors function creator for calculating total cart quantity
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

// selector function creator for calculating total cart price
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

// selector function creator for getting individual current quantity of a pizza in the cart
export const getCurrentCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

// selector function for clearing cart items
// export const getClearCart = (state) => (state.cart = []);

// steps for creating cart slice(add to cart, remove from cart, clear cart)
// 1.Add a reducer for adding a pizza to the cart
//    1a).since we can mutate date we basically push the new pizza to the cart array(payload)
// 2.Add a reducer for removing(delete) a pizza from the cart
//    2a).we need to find the index/id of the pizza in the cart array and remove it.We can use splice method but instead we will use filter method.When pizzaId is not equal to the payload we passed in/keep it in the cart array
//    2b).We also need to display a delete button which is only visible if the pizzas are in the cart and when clicked it will dispatch the deleteItem action with the pizzaId as the payload also returning the add to cart button.
//    2c).We reuse delete item component in the menu component to,to allow users to delete accidentally added pizza items.
// 3.Add a reducer for increasing the quantity of a pizza in the cart
//    3a).we need to find the index/id of the pizza in the cart array  that we want to increase quantity and increase the quantity by 1
// 4.Add a reducer for reducing the quantity of a pizza in the cart
//    4a).we need to find the index/id of the pizza in the cart array  that we want to decrease quantity and decrease the quantity by 1
//    4b).We also need to prevent the quantity from going below 0 where we basically add a guard clause that deletes the pizza from the cart if the quantity is less than 1(using casereducers)
// 5.Add a reducer for clearing the cart.
// 6.After placing an order we need to clear the cart by dispatching the clearCart action.
//    6b).We use a hack for this  functionality since useDispatch isnt accessible to regular function but components only which should not be overuse
