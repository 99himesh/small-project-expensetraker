import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartslice";

 import uislice from "./uislice";
  const store= configureStore({
    reducer:{ui:uislice.reducer,
        cart:cartSlice.reducer
      }
  })

export default store;