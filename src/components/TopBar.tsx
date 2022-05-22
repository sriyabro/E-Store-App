import { Navbar } from "react-bootstrap";
import { Phone, Truck, User } from "react-feather";

const TopBar = () => {
  return (
      <div className="top-bar border-bottom">
        <Navbar collapseOnSelect expand="lg" className="w-100 p-0 d-flex justify-content-end">
          <div className="top-bar-item">
            <Phone size={15} className="icon" />
            <span><a href="tel:+94771234567">+94 77 123 45 67</a></span>
          </div>
          <Navbar.Toggle />
          <Navbar.Collapse className="flex-grow-0">
            <div className="top-bar-item">
              <Truck size={15} className="icon" />
              <span>Delivery Areas</span>
            </div>
            <div className="top-bar-item">
              <User size={15} className="icon" />
              <span>My Account</span>
            </div>
            <div className="top-bar-item">
              <span className="top-bar-btn border-btn px-3 py-1">Register</span>
            </div>
            <div className="top-bar-item">
              <span className="top-bar-btn px-3 py-1">Login</span>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
  );
};
export default TopBar;
