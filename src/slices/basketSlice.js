import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items,action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id)
      console.log("ind",index)
      let itemsCopy = [...state.items]
      if(index >= 0) {
        itemsCopy.splice(index,1)
        console.log("after splice copy is",itemsCopy)
        console.log("after splice state items", state.items)
      }else {
        console.warn("item id don't exist")
      }
      state.items = itemsCopy
      console.log("state items final",state.items)
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total,item) => total + item.price,0);

export default basketSlice.reducer;
