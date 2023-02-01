import { createSlice } from "@reduxjs/toolkit"; 


//  const initialstate={cartIsVisible:false}

 const uislice=  createSlice({
    name:'ui',
    initialState:{cartIsVisible:false,test:0},
    reducers:{
        toggle(state){
            state.cartIsVisible=!state.cartIsVisible;
        },
        
    }
});

 export const uiActions=uislice.actions;

export default uislice;

