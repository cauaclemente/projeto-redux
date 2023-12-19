import {createSlice} from "@reduxjs/toolkit";

const inicialState = {
    products: []
}

const cartSlice = createSlice ({
    name: "cart",
    inicialState,
    reducers: {
        addProduct: ( state, action ) => {
            //verificar se o produto ja esta no carrinho;
        const productsIsAlredyInCart = state.products.some (
            (product) => product.id === action.payload.id   
        );
        // se ele tiver aumenta a quantidade em 1
        if(productsIsAlredyInCart){
            state.products = state.products.map((product) => 
                    product.id === action.payload.id
                    ? {...product, quantity: product.quantity + 1 }
                    : product
                );
            return; //para sair do if
        }
        //se ele não estiver, adiciona-lo
        state.products = [...state.products, { ...action.payload, quantity:  1}];
        },

        increaseProductQuantity: ( state, action ) => {
            state.products = state.products.map((product) => 
                product.id === action.payload 
                ? {...product, quantity: product.quantity + 1 }
                : product
            );
        },

        decreaseProductQuantity: ( state, action ) => {
            state.products = state.products.map((product) => 
                product.id === action.payload 
                ? {...product, quantity: product.quantity - 1 }
                : product 
                ).filter(product => product.quantity > 0);
            },
        
        removeProduct: ( state,action ) =>  {
            state.products = state.products.filter(product => product.id !== action.payload);
            },
    },
})

export const {
    addProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProduct,
} = cartSlice.actions 

export default cartSlice.reducer;