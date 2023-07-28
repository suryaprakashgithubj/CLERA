
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userDetails: null,
  token:null,
  Emails:null,
  loggedInUser: null,
  // services: [
  //   {
  //     id: 1,
  //     name: "Haircut",
  //     price: 100,
  //   },
  //   {
  //     id: 2,
  //     name: "Shave",
  //     price: 50,
  //   },
  //   {
  //     id: 3,
  //     name: "Massage",
  //     price: 200,
  //   },
  // ],
  cart: [],
};

const masterSlice = createSlice({
  name: "Master",
  initialState,
  reducers: {
    switchUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
    addUser: (state, action) => {
      state.user = action.payload;
    },
    addUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    deleteUser: (state, action) => {
      state.user = [];
    },
    deleteUserDetails: (state, action) => {
      state.userDetails = null;
    },
    addService: (state, action) => {
      state.services.push(action.payload);
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    addToken: (state, action) => {
      state.token=action.payload;
    },
    deleteToken: (state, action) => {
      state.token=null;
    },
 
    emptyService: (state, action) => {
      return {
        ...state,
        cart: null,
      };
    },
  },
});

export const {
  switchUser,
  addUser,
  deleteUser,
  addToCart,
  addService,
  emptyService,
  addUserDetails,
  deleteUserDetails,
  addToken,
  deleteToken,
} = masterSlice.actions;

export default masterSlice.reducer;