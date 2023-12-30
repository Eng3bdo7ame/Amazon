import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// import Product from "../product/Product";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "../Redux_Files/StateProvider";
import { auth } from "../../firebase/firebase";

export default function Header() {
  const [{ card, user }, dispatch] = useStateValue();
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Assuming the products list is stored in the `Products` state variable

  // const filteredProducts = Products.filter((product) =>
  //   product.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const handelAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="logo-div col-xl-2 col-lg-2 col-md-2 col-3">
              <Link to="/">
                <img
                  className="logo"
                  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="Amazon_logo"
                />
              </Link>
            </div>
            <div className="search_input col-xl-7 col-lg-6 col-md-6 col-6">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  placeholder=""
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-3 col-7">
              <div className="nav_links">
                <ul>
                  <li>
                    <Link to={!user ? "/login" : ""}>
                      <div onClick={handelAuth} className="options_nav_link">
                        <span>Hello {user ? user.username : "Guest"} </span>
                        <span>{user ? "Sign Out" : "Sign In"}</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <div className="options_nav_link">
                        <span>Return</span>
                        <span>&Orders</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <div className="options_nav_link">
                        <span>You</span>
                        <span>Prime</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-2">
              <div className="shopping_icon">
                <Link to="/card">
                  <ShoppingCartIcon />
                </Link>
                <span className="shopping_count">{card?.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
