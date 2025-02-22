import { useState } from "react";
import {useSelector, useDispatch } from "react-redux"

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

import {loginUser, logoutUser} from "../../redux/user/actions";
import { SelectProductsCount } from "../cart/cart.selector";



function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const {currentUser} = useSelector((rootReducer) => rootReducer.userReducer);
  const {products} = useSelector((rootReducer) => rootReducer.cartReducer);

  const productsCount = useSelector(SelectProductsCount);
  
  const dispatch = useDispatch(); 

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(loginUser({name: "caua", email: "caua@gmail.com"}))
  }

  const handleLogoutClick = () => {
    dispatch (logoutUser())
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ?(
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
