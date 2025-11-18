import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ShoppingCart = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    try {
      fetch("https://api01.f8team.dev/api/products")
        .then((res) => res.json())
        .then((response) => {
          console.log(response.data.items);
          setProduct(response.data.items);
        });
    } catch (error) {
      console.error("Error fetching :", error);
    }
  }, []);
  return (
    <>
      <div className="flex justify-between items-center p-4 border-b-2">
        <h1 className="text-blue-400 text-3xl">Shopping Cart</h1>
        <FontAwesomeIcon icon={faCartArrowDown} />
      </div>
      <div>
        {products.map((product) => (
          <div className="border-b-2 p-1" key={product.id}>
            <p className="text-green-500 text-xl underline">{product.title}</p>
            <p>{product.createdAt}</p>
            <p>{product.description}</p>
            <p className="text-red-500">{product.price}</p>
            <button className="border-2 p-1 rounded-xl bg-gray-500 mt-2">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export default ShoppingCart;
