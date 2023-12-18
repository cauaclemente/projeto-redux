import cartActionType from "./action-types";

const initialState = {
    products: [],
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case cartActionType.ADD_PRODUCT:
            //verificar se o produto ja esta no carrinho;
        const productsIsAlredyInCart = state.products.some (
            (product) => product.id === action.payload.id   
        );
        // se ele tiver aumenta a quantidade em 1
        if(productsIsAlredyInCart){
            return {
                ...state,
                products: state.products.map((product) => 
                    product.id === action.payload.id
                    ? {...product, quantity: product.quantity + 1 }
                    : product
                ),
            };
        }
        //se ele não estiver, adiciona-lo
        return {
            ...state,
            products: [...state.products, {...action.payload, quantity: + 1}],

        };

        case cartActionType.REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }
        
        case cartActionType.INCREASE_PRODUCT_QUANTITY:
            return {
                ...state,
                products: state.products.map((product) => 
                product.id === action.payload 
                ? {...product, quantity: product.quantity + 1 }
                : product 
                ),
            }

        case cartActionType.DECREASE_PRODUCT_QUANTITY:
            return {
                ...state,
                products: state.products.map((product) => 
                product.id === action.payload 
                ? {...product, quantity: product.quantity - 1 }
                : product 
                ).filter(product => product.quantity > 0),
            };

        default:
            return state;
    }

}

export default cartReducer