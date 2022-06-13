import { Dropdown } from "react-bootstrap";

const CategoriesNavBar = () => {
  return (
    <div className="categories-nav-bar px-0 px-md-5 py-3 d-flex align-items-center justify-content-around justify-content-md-start">
        <Dropdown className="cat-nav-item ms-0 ms-md-5 px-0 px-md-4">
          <Dropdown.Toggle className="cat-drop-down">
            Categories
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Grocery</Dropdown.Item>
            <Dropdown.Item href="#">Pharmacy</Dropdown.Item>
            <Dropdown.Item href="#">Food</Dropdown.Item>
            <Dropdown.Item href="#">Electronics</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <span className="cat-nav-item px-0 px-md-4">Home</span>
        <span className="cat-nav-item px-0 px-md-4">About Us</span>
        <span className="cat-nav-item px-0 px-md-4">FAQ</span>
        <span className="cat-nav-item px-0 px-md-4">Contact Us</span>
    </div>
  );
};
export default CategoriesNavBar;
