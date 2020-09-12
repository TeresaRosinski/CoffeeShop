import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import inventoryReducer from "../features/inventory/inventorySlice";

// store = what configureStore returns - it's what the state is -- it keeps track of the different slices
export default configureStore({
  reducer: {
    counter: counterReducer, //slice 1
    inventory: inventoryReducer, // slice 2
  },
});
