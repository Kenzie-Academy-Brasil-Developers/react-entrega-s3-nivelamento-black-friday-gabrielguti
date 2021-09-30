import { useState } from "react";
import Promo from "./components/promo";
import Render from "./components/render";
import Cart from "./components/cart";
import PromoProduct from "./components/promoProduct";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Smart TV LED 50", price: 1999.0 },
    { id: 2, name: "PlayStation 5", price: 1200.0 },
    { id: 3, name: "Notebook Acer Nitro 5", price: 5109.72 },
    { id: 4, name: "Headset s fio Logitech G935", price: 1359.0 },
    { id: 5, name: "Tablet Samsung Galaxy Tab S7", price: 4844.05 },
    { id: 6, name: "Cadeira Gamer Cruiser Preta FORTREK", price: 1215.16 },
  ]);
  const [randomPromo, setRandomPromo] = useState(0);
  const [randomProduct, setRandomProduct] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  return (
    <div className="App">
      <div className="App-header">
        <div className = 'headerPromo'>
        <PromoProduct
          addToCart={addToCart}
          randomPromo={randomPromo}
          randomProduct={randomProduct}
        />
        <Promo
          products={products}
          randomProduct={randomProduct}
          setRandomProduct={setRandomProduct}
          setRandomPromo={setRandomPromo}
        />
        </div>
        <Render products={products} addToCart={addToCart} />
        <Cart cart={cart} />
      </div>
    </div>
  );
}

export default App;
