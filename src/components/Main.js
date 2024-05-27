import {addToCart, emptyToCart, removeToCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  let data =useSelector((state)=>state.productData);
  console.warn("Data in main Component",data);
  const product = {
    name: "I phone",
    category: "mobile",
    price: 100000,
    color: "red",
  };

  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      <div>
        <button onClick={() => dispatch(removeToCart(product.name))}>
          Remove From Cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyToCart())}>
          Empty Cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(productList())}>
         Call Product List
        </button>
      </div>
    </div>
  );
}

export default Main;
