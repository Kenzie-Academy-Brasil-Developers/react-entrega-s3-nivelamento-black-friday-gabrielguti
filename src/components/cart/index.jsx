const Cart = ({ cart }) => {
  const cartValue = cart.reduce((value1, value2) => {
    return Math.round(value1 + value2.price);
  }, 0);

  return (
    <div className = 'cartItems'>
      <h2>Carrinho:</h2>
      <p>Valor total: <span>{`R$ ${cartValue}`}</span></p>
      <div className="cart">
        {cart.map((item) => (
          <div className = 'cartItem' key={item.id}>
            <p>{`${item.name} R$ ${item.price}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
