import { createSlice } from "@reduxjs/toolkit";

//This defines the data for the inventory
export const inventorySlice = createSlice({
  //pass in the initial data -- this is an object that contains initial data as well as the name of the slice and the reducers
  name: "inventory",
  initialState: [
    {
      id: 1,
      name: "Everything Bagel",
      quantity: 6,
      quantityType: "dozen",
      price: 12,
      details: "Amazing bagels, need to find cheaper ones",
    },
  ],
  reducers: {
    addItem: (state, action) => {
      state = [...state, action.payload];
    },
  },
});

export const { addItem } = inventorySlice.actions;

export default inventorySlice.reducer;
