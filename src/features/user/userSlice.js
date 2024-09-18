import { getAddress } from '../../services/apiGeocoding';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// async function fetchAddress() {
//   // 1) We get the user's geolocation position
//   const positionObj = await getPosition();
//   const position = {
//     latitude: positionObj.coords.latitude,
//     longitude: positionObj.coords.longitude,
//   };

//   // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
//   const addressObj = await getAddress(position);
//   const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

//   // 3) Then we return an object with the data that we are interested in
//   return { position, address };
// }

// thunk for getting user address

// becomes the action  creator function to be called
export const fetchAddress = createAsyncThunk('user/fetchAddress', async () => {
  // 1) We get the user's geolocation position
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  return { position, address }; //payload of FULLFILLED state
});

// initial state object of the user slice
const initialState = {
  username: '',
  status: 'idle',
  position: {},
  address: '',
  error: '',
};

// create a slice for the user
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) =>
    // pending state
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = 'loading';
      })
      // fullfiled state
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = 'idle';
      })
      // error state
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = 'error';
        state.error =
          'There was a problem getting your address.Make sure to fill this field';
      }),
});

// exprort the user slice actions
export const { updateName } = userSlice.actions;
// export the user slice reducer
export default userSlice.reducer;
