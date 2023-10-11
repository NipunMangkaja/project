import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProductCards from "./ProductCards";

const HomePage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showTrendingContent, setShowTrendingContent] = useState(false); // Add state
  const [bestsellerList, setBestsellerList] = useState([]);
  const regions = [
    "Kanto",
    "Kansai",
    "Tohoku",
    "Hokkaido",
    "Shikoku",
    "Chugoku",
    "Okinawa",
  ];

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/test3", {
        region: "Tokyo", // You can define selectedRegion if needed
      })
      .then((response) => {
        // Handle the response and update the state with the product list
        console.log("Region selection successful:", response.data);
        setBestsellerList(response.data.item_data);
      })
      .catch((error) => {
        // Handle errors if any
        console.error("Error selecting region:", error);
      });
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleTrendingContent = () => {
    setShowTrendingContent(!showTrendingContent);
  };

  function handleDropdownItemClick(selectedRegion) {
    // Perform any necessary actions (e.g., sending data to Django)
    // ...
    console.log(selectedRegion);

    axios
      .post("http://127.0.0.1:8000/test3", {
        region: selectedRegion,
      })
      .then((response) => {
        // Handle the response if needed
        console.log("Region selection successful:", response.data);
        const productList = response.data;
        navigate(`/products`, { state: { productList } });
        console.log("navigated!");
      })
      .catch((error) => {
        // Handle errors if any
        console.error("Error selecting region:", error);
      });
    // Navigate to the "Products" page with the selected region
  }

  return (
    <div className="home-page">
      <div className="text-input-container-4">
        <div className="home-menu">Home</div>
        <div className="customerservice">Customer Service</div>
      </div>
      <div className="overlap">
        <div className="hero">
          <div className="text-input-9">
            {/* <button className="button">
              <div className="text-wrapper-2">New Arrival</div>
            </button>
            <button className="div-wrapper">
              <div className="text-wrapper-2">Trending Now</div>
            </button> */}
            <div className="button-2">
              <input
                type="button"
                className="text-wrapper-3"
                // onClick={toggleDropdown}
                value="Regions"
              />
            </div>

            <div className="dropdown-menu">
              <div className="regions">
                {regions.map((region, index) => (
                  <input
                    key={index}
                    onClick={() => handleDropdownItemClick(region)}
                    className="region"
                    value={region}
                  />
                ))}
              </div>
            </div>

            {/* <div className="text-wrapper-4">Tokyo</div>
            <div className="text-wrapper-5">Kyoto</div>
            <div className="text-wrapper-6">Nagoya</div>
            <div className="text-wrapper-hiro">Hiroshima</div> */}
            {/* <button className="enabled-wrapper">
              <div className="text-wrapper-2">Essentials</div>
            </button> */}
          </div>
          <img
            className="image"
            alt="Image"
            src={require(".//japanmap.png")}
            usemap="#workmap"
          />
          <div className="places">
            {/* <map name="workmap">
          <area
            shape="rect"
            coords="350,400,450,500"
            id="Kanto"
            href="https://en.wikipedia.org/wiki/Kant%C5%8D_region"
          />
          <area
            shape="rect"
            coords="350,40,600,150"
            id="Hokkaido"
            href="https://en.wikipedia.org/wiki/Hokkaido"
          />
          <area
            shape="rect"
            coords="200,450,300,600"
            id="Kansai"
            href="https://en.wikipedia.org/wiki/Kansai_region"
          />
          <area
            shape="rect"
            coords="0,600,120,750"
            id="Kyushu"
            href="https://en.wikipedia.org/wiki/Kyushu"
          />
          <area
            shape="rect"
            coords="350,200,450,390"
            id="Hokkaido"
            href="https://en.wikipedia.org/wiki/T%C5%8Dhoku_region"
          />
          <area
            shape="rect"
            coords="250,350,349,520"
            id="Chubu"
            href="https://en.wikipedia.org/wiki/Ch%C5%ABbu_region"
          />
          <area
            shape="rect"
            coords="400,550,600,750"
            id="Okinawa"
            href="https://en.wikipedia.org/wiki/Okinawa_Prefecture"
          />
          <area
            shape="rect"
            coords="121,550,199,750"
            id="Shikoku"
            href="https://en.wikipedia.org/wiki/Shikoku"
          />
          <area
            shape="rect"
            coords="50,450,199,549"
            id="Chugoku"
            href="https://en.wikipedia.org/wiki/Ch%C5%ABgoku_region"
          />
        </map> */}

            <img
              className="kyoto icon"
              id="Kyoto"
              alt="Image"
              src={require(".//sapporo-icon.png")}
              onClick={() => handleDropdownItemClick("札幌")}
            />
            <img
              className="tokyo icon"
              id="Tokyo"
              alt="Image"
              src={require(".//tokyo-icon.png")}
              onClick={() => handleDropdownItemClick("東京")}
            />
            <img
              className="image-3 icon"
              id="Nagoya"
              alt="Image"
              src={require(".//nagoya-icon.png")}
              onClick={() => handleDropdownItemClick("名古屋")}
            />
            <img
              className="image-hiro icon"
              id="Hiroshima"
              alt="Image"
              src={require(".//hiroshima-icon.png")}
              onClick={() => handleDropdownItemClick("広島")}
            />
          </div>
        </div>
      </div>
      <div className="overlap-group">
        <div className="overlap-2">
          <div className="BEYOURBEST-strip">Discover Japan&#39;s Treasures</div>
          <div className="text-input-2" />
        </div>
        <div className="overlap-2">
          <div className="BEYOURBEST-strip">Discover Japan&#39;s Treasures</div>
          <div className="text-input-2" />
        </div>
        <div className="overlap-2">
          <div className="BEYOURBEST-strip">Discover Japan&#39;s Treasures</div>
          <div className="text-input-2" />
        </div>
        <div className="overlap-2">
          <div className="BEYOURBEST-strip">Discover Japan&#39;s Treasures</div>
          <div className="text-input-2" />
        </div>
        <div className="overlap-2">
          <div className="BEYOURBEST-strip">Discover Japan&#39;s Treasures</div>
          <div className="text-input-2" />
        </div>
        <div className="overlap-2">
          <div className="BEYOURBEST-strip">Discover Japan&#39;s Treasures</div>
          <div className="text-input-2" />
        </div>
      </div>
      <div className="overlap-5">
        <div className="Japanese-styles-wrapper">
          <img className="Japanese-snack" src={require(".//image-55.png")} />
          <div className="Japanese-text-container">
            <p>和菓子</p>
          </div>
        </div>
        <div className="overlap-6">
          <div className="FORMALS-styles-wrapper">
            <img className="Western-snack" src={require(".//image-166.png")} />

            <div className="text-wrapper-9">
              <p>洋菓子</p>
            </div>
          </div>
          <div className="CASUALS-styles-wrapper">
            <img className="Other-snack" src={require(".//image-155.png")} />

            <div className="text-wrapper-9">
              <p>その他</p>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontal-container">
        <div className="frame">
          <div className="delivery">
            <img
              className="image-6"
              alt="Image"
              src={require(".//image-144.png")}
            />
            <div className="overlap-group-4">Super Fast and Free Delivery</div>
          </div>
        </div>
        <div className="middle">
          <div className="text-input-container-2">
            <img
              className="image-8"
              alt="Image"
              src={require(".//image-122.png")}
            />
            <div className="non-contactshipping">Non- Contact Shipping</div>
          </div>
          <div className="button-3">
            <img
              className="image-9"
              alt="Image"
              src={require(".//image-111.png")}
            />
            <div className="moneybackguranteed">Money Back Guranteed</div>
          </div>
        </div>
        <div className="container">
          <div className="payment">
            <img
              className="image-7"
              alt="Image"
              src={require(".//image-133.png")}
            />
            <div className="text-wrapper-12">Super Secure Payment System</div>
          </div>
        </div>
      </div>
      <div className="container-2">
        <div className="newarrivals">Best Sellers</div>
        <div className="container-3">
          {bestsellerList.map((product) => (
            <ProductCards key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="tooltip">
        <div className="foot-overlap-group">
          <div className="pAndText2">
            <p className="foot-p">
              <span className="foot-text-wrapper">
                Corporate Info
                <br />
              </span>
              <ul className="span">
                <li>Career</li>
                <li>Press</li>
                <li>Investor relations</li>
                <li>Corporate governance</li>
                <li>Cookie Settings</li>
              </ul>
            </p>
            <p className="foot-text-wrapper-2">
              Stay Connected with Us! Discover the best omiyage from Japan and
              be in the know about exclusive offers and cultural insights
              <br />
              <br /> [Explore More]
            </p>
          </div>
          <div className="div-2AndImage">
            <div className="div-2">
              <span className="foot-text-wrapper">Help</span>
              <ul className="span">
                <li>Customer Service</li>
                <li>Legal & Privacy</li>
                <li>Contact</li>
                <li>Report a scam</li>
                <li>Cookie Settings</li>
              </ul>
            </div>
            <img
              className="foot-image"
              alt="Image"
              src={require(".//image.png")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
