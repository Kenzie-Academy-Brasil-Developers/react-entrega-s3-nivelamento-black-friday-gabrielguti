const Cart = ({ cart }) => {
  const cartValue = cart.reduce((value1, value2) => {
    return value1 + value2.price;
  }, 0);

  return (
    <div>
      <h2>Carrinho:</h2>
      <span>{`valor total: R$ ${cartValue}`}</span>
      <ul>
        {cart.map((item) => (
          <li key = {item.id}>{`${item.name} R$ ${item.price}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
