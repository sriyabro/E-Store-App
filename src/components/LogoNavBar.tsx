import { ShoppingCart } from "react-feather";

const LogoNavBar = () => {
  return (
    <div className="logo-nav-bar shadow">
      <div>
        <span className="logo">LOGO</span>
      </div>
      <div>
        <div className="d-flex align-items-center">
          <div className="cart-div">
            <ShoppingCart size={30} className="cart-icon" />
            <span className="cart-badge">
              <span className="badge-qty">2</span>
            </span>
          </div>
          <span className="checkout-btn d-none d-md-flex px-4 py-2 ms-4">
            Checkout
          </span>
        </div>
      </div>
    </div>
  );
};
export default LogoNavBar;
