import { ShoppingCart } from "react-feather";

const CartIcon = () => {
  return (
    <div className="cart-div">
      <ShoppingCart size={30} className="cart-icon" />
      <span className="cart-badge">
        <span className="badge-qty">2</span>
      </span>
    </div>
  );
};
export default CartIcon;
