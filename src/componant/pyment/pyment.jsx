// import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../product/product.css";
import "./pyment.css";
import { useStateValue } from "../Redux_Files/StateProvider";
import StarIcon from "@mui/icons-material/Star";

const Payment = () => {
  const cardRemove = (id) => {
    dispatch({
      type: "Remove_CARD",
      id: id,
    });
  };

  const CalculatePrice = () => {
    let price = 0;
    card.forEach((item) => {
      price += item.price;
    });
    return price;
  };

  const [{ card, user }, dispatch] = useStateValue();
  // const navigate = useNavigate();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{card.length} items</Link>)
        </h1>

        {/* Payment section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>

          <div className="Order_item">
            <div className="container">
              <div className="row">
                {card.map((item) => (
                  <div
                    key={item.id}
                    className="col-xl-3 col-lg-4 col-md-6 col-12">
                    <div className="card">
                      <img
                        src={item.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="title">
                          <h5 className="card-title"> {item.title}</h5>
                        </div>

                        <div className="rating">
                          {Array(item.rating)
                            .fill()
                            .map((_, index) => (
                              <p key={index}>
                                <StarIcon />
                              </p>
                            ))}
                        </div>
                        <button onClick={() => cardRemove(item.id)}>
                          Remove from items
                        </button>
                      </div>
                      <div className="product_price">
                        <h3 className="del_price">
                          Price : {item.price + 30.9} $
                        </h3>
                        <h3>Offer : {item.price} $ </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pyment_form">
            <form>
              <h3>Order Total: {CalculatePrice()} $</h3>
              <button
                onClick={() => window.open("https://www.paypal.com", "_blank")}>
                Buy Now
                <img
                  src="https://img.icons8.com/color/48/000000/paypal.png"
                  alt=""
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
