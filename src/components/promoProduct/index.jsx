const PromoProduct = ({ addToCart, randomPromo, randomProduct }) => {
  const valuePromo = randomPromo / 100;

  const handleAddNewProduct = (id, name, price) => {
    const newProduct = {
      id: id,
      name: name,
      price: Math.round(price - Math.round(valuePromo * price)),
    };
    addToCart(newProduct);
  };

  return (
    <div>
      <div>
        {randomProduct.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{`R$ ${item.price}`}</p>
            <p>{`${randomPromo}% de desconto`}</p>
            <p>{`R$ ${Math.round(
              valuePromo * item.price
            )} a menos na compra`}</p>
            <button
              onClick={() =>
                handleAddNewProduct(item.id, item.name, item.price)
              }
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PromoProduct;
