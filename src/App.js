import {Fragment, useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {
    const [cartShow, setCartShow] = useState(false)
    const showCartHandler = () => setCartShow(true)
    const closeCartHandler = () => setCartShow(false)
  return (
    <Fragment>
        {cartShow && <Cart closeClick={closeCartHandler}/>}
      <Header onClick={showCartHandler} />
        <main>
            <Meals />
        </main>
    </Fragment>
  );
}

export default App;
