import { createSlice } from "@reduxjs/toolkit";
import { Item, AllQuantity } from "../types/common";

const itemsArray: Item[] = [];
const quantityArray: AllQuantity[] = [];
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: itemsArray,
    totalQuantity: quantityArray,
    subTotalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem: Item = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
   
      state.subTotalPrice += newItem.price * newItem.quantity.value;
      if (!existingItem) {
        state.totalQuantity.push({
          id: newItem.id,
          size: newItem.quantity.size,
          value: newItem.quantity.value,
        });
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          category: newItem.category,
          image: newItem.image,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.totalPrice,
        });
      } else {
        
        existingItem.quantity.value += newItem.quantity.value;
        existingItem.totalPrice += newItem.totalPrice;
     
        const existingQuantity = state.totalQuantity.find(
          (item) => item.size === newItem.quantity.size
        );
        if (existingQuantity) {
          existingQuantity.value += newItem.quantity.value;
        } else {
          state.totalQuantity.push({
            id: newItem.id,
            size: newItem.quantity.size,
            value: newItem.quantity.value,
          });
        }
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        const existingQuantity = state.totalQuantity.find(
          (item) => item.size === existingItem.quantity.size
        );
        if (existingQuantity) {
          existingQuantity.value -= existingItem.quantity.value - 1;
          if (existingQuantity.value === 0) {
            state.totalQuantity = state.totalQuantity.filter(
              (item) => item.size !== existingItem.quantity.size
            );
          }
        }
        state.subTotalPrice -= existingItem.price * existingItem.quantity.value;

        if (state.totalQuantity.length === 0) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity.value--;
          existingItem.totalPrice =
            existingItem.totalPrice - existingItem.price;
        }
      }
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
