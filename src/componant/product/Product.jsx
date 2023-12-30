import React from "react";
import "./product.css";
import StarIcon from "@mui/icons-material/Star";
//Hocks
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useStateValue } from "../Redux_Files/StateProvider";
export default function Product(product) {
  // starting code for search bar
  // const [searchInput, setSearchInput] = useState("");
  // const searchBar = () => {};

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setSearchInput(e.target.value);
  // };

  // if (searchInput.length > 0) {
  //     countries.filter((country) => {
  //     return country.name.match(searchInput);
  // });
  // }

  //ending code for search bar

  //starting code for fetching data from api and displaying it
  const [Products, setProducts] = useState([]);
  const fetchData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  //ending code for fetching data from api and displaying it
  const [{}, dispatch] = useStateValue();

  return (
    <>
      <div className="products">
        <div className="home_image">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            {Products.map((product) => {
              console.log(product.rating.rate);
              const addToCart = () => {
                // dispatch item to Add data to card
                dispatch({
                  type: "ADD_TO_CARD",
                  item: {
                    id: product.id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    rating: product.rating,
                    description: product.description,
                  },
                });
              };
              return (
                <div
                  key={product.id}
                  className=" col-xl-3 col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <div className="title">
                        <h5 className="card-title"> {product.title}</h5>
                      </div>
                      <div className="discription">
                        <p className="card-text">{product.description}</p>
                      </div>
                      <div className="product__rating">
                        {Array(product.rating)
                          .fill()
                          .map((_, i) => (
                            <p>
                              <StarIcon />
                            </p>
                          ))}
                      </div>
                      <button onClick={addToCart}>Add to Cart</button>
                    </div>
                    <div className="product_price">
                      <h3 className="del_price">
                        Price : {product.price + 30.9} $
                      </h3>
                      <h3>Offer : {product.price} $ </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
