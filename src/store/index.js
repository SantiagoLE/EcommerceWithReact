import { configureStore } from "@reduxjs/toolkit";
import productsGlobal from "./slices/products.slice"

export default configureStore({  //tambien se puede guardar en una variable y exportar la variable
    reducer:{
productsGlobal
    }
})