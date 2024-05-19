import { useDispatch } from "react-redux";
import { addToCart, removeToCart } from "../redux/action";
export function Main() {
  const dispatch = useDispatch();
  const product = {
    name: "I phone",
    category: "Smartphone",
    price: 1099,
  };
  return (
    <div>
      <button
        onClick={() => {
          dispatch(addToCart(product));
        }}
      >
        Add to cart
      </button>
      <button
        onClick={() => {
          dispatch(removeToCart(product));
        }}
      >
        Remove to cart
      </button>
    </div>
  );
}
