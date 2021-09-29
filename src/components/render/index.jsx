const Render = ({ products, addToCart }) => {
  return (
    <div>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{`R$ ${item.price}`}</span>
            <button onClick={() => addToCart(item)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Render;
