const Promo = ({
  products,
  randomProduct,
  setRandomProduct,
  setRandomPromo,
}) => {
  function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const handleRandom = () => {
    const idProduct = random(1, 6);
    const promoValue = random(40, 90);

    const randomId = products.filter((item) => {
      return item.id === idProduct;
    });

    setRandomProduct(randomId);
    setRandomPromo(promoValue);
  };
  console.log(randomProduct);

  return (
    <div className = 'PromoButton'>
      <button onClick={handleRandom}>Gerar promoção</button>
    </div>
  );
};

export default Promo;
