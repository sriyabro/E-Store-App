import CartIcon from "./cart-preview/CartIcon";

const LogoNavBar = () => {
  return (
    <div className="logo-nav-bar shadow">
      <div>
        <span className="logo">LOGO</span>
      </div>
      <div>
        <div className="d-flex align-items-center">
          <CartIcon></CartIcon>
          <span className="checkout-btn d-none d-md-flex px-4 py-2 ms-4">
            Checkout
          </span>
        </div>
      </div>
    </div>
  );
};
export default LogoNavBar;
