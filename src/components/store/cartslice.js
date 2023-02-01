import { createSlice } from "@reduxjs/toolkit";


  const cartSlice= createSlice({
    name: 'cart',
    initialState: {
        item: [],
        totalQuantity: 0,
    },
    reducers: {
        additemTocart(state, action) {
            const newItem = action.payload;
            const existingItem = state.item.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.item.push({
                    itemId: newItem.id,
                    price: newItem.price, 
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            }else{
                existingItem.quantity++;
          
            existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }

        },
        removeItemFromcart(state,action){

            const id=action.payload.id;
            console.log(id);
           const existingItem=state.item.find(item=>item.id===id);
           debugger
            console.log( existingItem);
           state.totalQuantity--;
           if(existingItem){
            if(existingItem.quantity===1){
                state.item=state.item.filter(item=>item.id!==id)
              }else{
                
              existingItem--;
              existingItem.totalPrice=existingItem.totalPrice-existingItem.price;
              }
           }
        
        }







    }
})

 export const cartAction=cartSlice.actions
export default cartSlice;