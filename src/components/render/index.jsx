const Render = ({ products, addToCart }) => {
  return (
    <div className = 'products'>
      
        {products.map((item) => (
          <div className = 'product' key={item.id}>
            <span>{item.name}</span>
            <span>{`R$ ${item.price}`}</span>
            <button onClick={() => addToCart(item)}>Add</button>
          </div>
        ))}
    
    </div>
  );
};

export default Render;
