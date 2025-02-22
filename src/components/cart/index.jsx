import { useSelector } from "react-redux";

import CartItem from "../cart-item/index";
// Styles
import * as Styles from "./styles";

import { SelectProductsTotalPrice } from "./cart.selector";



const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products }  = useSelector((rootReducer) => rootReducer.cartReducer);

  const ProductsTotalPrice = useSelector(SelectProductsTotalPrice)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

        {products.map((product) => (
          <CartItem product={product} /> 
        ))}
      <Styles.CartTotal>Total: R${ProductsTotalPrice}</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
