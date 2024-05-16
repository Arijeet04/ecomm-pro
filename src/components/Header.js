import { useSelector } from "react-redux";

const Header = () => {
  const result = useSelector((state) => state.cartData); //Used to Return the Complete REDUX STORE DATA
  console.warn("Data in header", result);

  return (
    <div className="header">
      <div className="cart-div">
        <span>{result.length}</span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
