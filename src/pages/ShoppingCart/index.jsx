import {
  faCartArrowDown,
  faMinus,
  faPlus,
  faTrash,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";

const ShoppingCart = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    try {
      fetch("https://api01.f8team.dev/api/products")
        .then((res) => res.json())
        .then((response) => {
          setProduct(response.data.items);
        });
    } catch (error) {
      console.error("Error fetching :", error);
    }
  }, []);
  const {
    items,
    addToCart,
    totalPrice,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();
  return (
    <>
      <div className="flex justify-between items-center p-4 border-b-2">
        <h1 className="text-blue-400 text-3xl">Shopping Cart</h1>

        {items.length > 0 ? (
          <div className="group relative">
            <span className="cursor-pointer">
              <FontAwesomeIcon icon={faCartArrowDown} />
            </span>
            <div className=" invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute right-0 top-full w-xl bg-blue-400 p-4 transition-all duration-300 ">
              <h3 className="border-b-2">Giỏ hàng</h3>
              {items.map((item) => (
                <div key={item.id} className="border-b-2 pb-1">
                  <div className="mt-2">
                    <p className="text-green-400">
                      {item.title} - {item.category}
                    </p>
                    <p>Giá : {item.price}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-1">
                      <button
                        className="border-2 p-0.5 w-8 h-8 cursor-pointer"
                        onClick={() => {
                          console.log(item.id);
                          updateQuantity(item.id, 1);
                        }}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                      <span className="p-2">Số Lượng : {item.quantity}</span>
                      <button
                        className="border-2 p-0.5 w-8 h-8 cursor-pointer"
                        onClick={() => {
                          if (item.quantity === 0) {
                            removeFromCart(item.id);
                          } else {
                            updateQuantity(item.id, -1);
                          }
                        }}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        removeFromCart(item.id);
                      }}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </div>
                  </div>
                </div>
              ))}
              <div className=" mt-2">
                <p className="text-green-400">Tổng tiền : {totalPrice}</p>
                <div
                  className="border-2 inline-block text-red-500"
                  onClick={() => {
                    clearCart();
                  }}
                >
                  Xoá tất cả sản phẩm
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          "Your cart is empty."
        )}
      </div>

      {/* danh sách sản phẩm  */}
      <div>
        {products.map((product) => (
          <div className="border-b-2 p-1" key={product.id}>
            <p className="text-green-500 text-xl underline">{product.title}</p>
            <p>{product.createdAt}</p>
            <p>{product.description}</p>
            <p className="text-red-500">{product.price}</p>
            <button
              className="border-2 p-1 rounded-xl bg-gray-500 mt-2 cursor-pointer"
              onClick={() => {
                addToCart(product);
                console.log(items);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export default ShoppingCart;
