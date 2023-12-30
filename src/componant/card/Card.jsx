// import React, { useState } from "react";
import "./Card.css";
// import { Link } from "react-router-dom";
import "../product/product.css";
import { useStateValue } from "../Redux_Files/StateProvider";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

export default function Card() {
  const [{ card, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const cardRemove = (id) => {
    dispatch({
      type: "Remove_CARD",
      id: id,
    });
  };

  const cardClear = () => {
    dispatch({
      type: "clear_CARD",
    });
  };

  const CalculatePrice = () => {
    let price = 0;
    card.forEach((item) => {
      price += item.price;
    });
    return price;
  };

  let cardContent;
  if (card.length > 0) {
    cardContent = (
      <div className="products">
        <div className="container">
          <div className="row">
            <div className="card_title">
              <h1>Your Shopping Card </h1>
            </div>
            {card.map((item) => {
              return (
                <div
                  key={item.id}
                  className="col-xl-3 col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title"> {item.title}</h5>
                      <div className="discription">
                        <p className="card-text">{item.description}</p>
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
                      <div className="quantity_item">
                        <button onClick={() => cardRemove(item.id)}>
                          Remove from Card{" "}
                        </button>
                      </div>
                    </div>
                    <div className="product_price">
                      <h3 className="del_price">
                        Price : {item.price + 50.1} $
                      </h3>
                      <h3>Offer : {item.price} $ </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="Pricetotal">
          <h5> Hello {user ? user.email : "Guest"}</h5>
          <h6>
            {" "}
            Subtotal ( {`${card.length}  items`} )
            <span> Total : {CalculatePrice()} $</span>
          </h6>
          <button onClick={() => navigate("/Pyment")}>
            Proceed to Checkout
          </button>
          <button onClick={cardClear}>Clear All</button>
        </div>
      </div>
    );
  } else {
    cardContent = (
      <div className="cardpage container">
        <div className="row">
          <div className="emptycard">
            <h1>Your Card is empty !</h1>
          </div>
        </div>
      </div>
    );
  }
  return <div className="all_card">{cardContent}</div>;
}
