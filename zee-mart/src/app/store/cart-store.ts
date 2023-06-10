import { createSlice } from "@reduxjs/toolkit";
import { Item, AllQuantity } from "../types/common";

const itemsArray: Item[] = [];
//const quantityArray: AllQuantity[] = [];
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: itemsArray,
    totalQuantity: 0,
    subTotalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem: Item = action.payload;
      const existingItem = state.items.find(
        (item) =>
          item.id === newItem.id && item.quantity.size === newItem.quantity.size
      );
      state.subTotalPrice += newItem.price * newItem.quantity.value;
      state.totalQuantity += newItem.quantity.value;
      if (!existingItem) {
        // state.totalQuantity.push({
        //   id: newItem.id,
        //   size: newItem.quantity.size,
        //   value: newItem.quantity.value,
        // });
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

        // const existingQuantity = state.totalQuantity.find(
        //   (item) => item.size === newItem.quantity.size
        // );
        // if (existingQuantity) {
        //   existingQuantity.value += newItem.quantity.value;
        // } else {
        //   state.totalQuantity.push({
        //     id: newItem.id,
        //     size: newItem.quantity.size,
        //     value: newItem.quantity.value,
        //   });
        // }
      }
    },
    removeItemFromCart(state, action) {
      const data = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === data.id && item.quantity.size === data.size
      );
      console.log(existingItem);
      if (existingItem) {
        
        // const existingQuantity = state.totalQuantity.find(
        //   (item) => item.size === existingItem.quantity.size
        // );
        // if (existingQuantity) {
        //   existingQuantity.value -= existingItem.quantity.value - 1;
        //   if (existingQuantity.value === 0) {
        //     state.totalQuantity = state.totalQuantity.filter(
        //       (item) => item.size !== existingItem.quantity.size
        //     );
        //   }
        // }
        state.totalQuantity -= 1;
        state.subTotalPrice -= existingItem.price * 1;

        if (existingItem.quantity.value === 0) {
          state.items = state.items.filter(
            (item) => item.id !== data.id && item.quantity.size !== data.size
          );
        } else {
          existingItem.quantity.value--;
          existingItem.totalPrice =
            existingItem.totalPrice - existingItem.price;
        }
      }
    },
    DeleteItemFromCart(state, action) {
      const data = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === data.id && item.quantity.size === data.size
      );

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity.value;
        state.subTotalPrice -= existingItem.price * existingItem.quantity.value;
        state.items = state.items.filter(
          (item) => item.quantity.size !== data.size
        );
      }
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
