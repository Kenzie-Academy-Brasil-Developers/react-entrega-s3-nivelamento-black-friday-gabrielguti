import './styles.css';

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
    
      <div className = 'PromoItem'>
        {randomProduct.map((item) => (
          <div className = 'promoItemDefined' key={item.id}>
            <p>{item.name}</p>
            <p>{`R$ ${item.price}`}</p>
            <p>{`${randomPromo}% de desconto`}</p>
            <p>{`R$ ${Math.round(
              valuePromo * item.price
            )} a menos na compra`}</p>
            <p>{`total a pagar:R$ ${Math.round(
              item.price - Math.round(valuePromo * item.price)
            )}`}</p>
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

  );
};
export default PromoProduct;
