import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const HomePage = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showTrendingContent, setShowTrendingContent] = useState(false); // Add state for trending content
    const regions = ["Kanto", "Kansai", "Tohoku", "Hokkaido", "Shikoku", "Chugoku", "Okinawa"];
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const toggleTrendingContent = () => {
        setShowTrendingContent(!showTrendingContent);
    };

    // const [csrftoken, setCsrfToken] = useState(null);

    // useEffect(() => {
    //     // Fetch CSRF token when the component mounts
    //     const fetchCsrfToken = async () => {
    //         try {
    //             const response = await axios.get("http://127.0.0.1:8000/myapp/csrf-token/");
    //             setCsrfToken(response.data.csrftoken);
    //         } catch (error) {
    //             console.error("Error fetching CSRF token:", error);
    //         }
    //     };

    //     fetchCsrfToken();
    // }, []);

    function handleDropdownItemClick(selectedRegion) {
        // Perform any necessary actions (e.g., sending data to Django)
        // ...
        console.log(selectedRegion)

        axios.post("http://127.0.0.1:8000/", {
            region: selectedRegion,
        })
            .then(response => {
                // Handle the response if needed
                console.log("Region selection successful:", response.data);
            })
            .catch(error => {
                // Handle errors if any
                console.error("Error selecting region:", error);
            });
        // Navigate to the "Products" page with the selected region
        navigate(`/products`);
    };

    return (
        <div className="home-page">
            <div className="div">
                <div className="overlap">
                    <div className="text-input" />
                    <div className="text-input-container">
                        <div className="overlap-group">
                            <div className="overlap-2">
                                <div className="BEYOURBEST-strip">Discover Japan&#39;s Treasures</div>
                                <div className="text-input-2" />
                            </div>
                            <div className="overlap-3">
                                <div className="BEYOURBEST-strip">Discover Japan&#39;s Treasures</div>
                                <div className="text-input-3" />
                            </div>
                            <div className="text-wrapper">Discover Japan&#39;s Treasures</div>
                            <div className="BEYOURBEST-strip-2">Discover Japan&#39;s Treasures</div>
                            <div className="BEYOURBEST-strip-3">Discover Japan&#39;s Treasures</div>
                            <div className="BEYOURBEST-strip-4">Discover Japan&#39;s Treasures</div>
                            <div className="overlap-group-2">
                                <div className="test">Discover Japan&#39;s Treasures</div>
                                <div className="text-input-4" />
                            </div>
                            <div className="text-input-5" />
                            <div className="text-input-6" />
                            <div className="text-input-7" />
                            <div className="text-input-8" />
                        </div>
                    </div>
                    <img className="image" alt="Image" src="/img/image-4.png" usemap="#workmap" />
                    <map name="workmap">
                        <area shape="rect" coords="350,400,450,500" id="Kanto" href="https://en.wikipedia.org/wiki/Kant%C5%8D_region" />
                        <area shape="rect" coords="350,40,600,150" id="Hokkaido" href="https://en.wikipedia.org/wiki/Hokkaido" />
                        <area shape="rect" coords="200,450,300,600" id="Kansai" href="https://en.wikipedia.org/wiki/Kansai_region" />
                        <area shape="rect" coords="0,600,120,750" id="Kyushu" href="https://en.wikipedia.org/wiki/Kyushu" />
                        <area shape="rect" coords="350,200,450,390" id="Hokkaido" href="https://en.wikipedia.org/wiki/T%C5%8Dhoku_region" />
                        <area shape="rect" coords="250,350,349,520" id="Chubu" href="https://en.wikipedia.org/wiki/Ch%C5%ABbu_region" />
                        <area shape="rect" coords="400,550,600,750" id="Okinawa" href="https://en.wikipedia.org/wiki/Okinawa_Prefecture" />
                        <area shape="rect" coords="121,550,199,750" id="Shikoku" href="https://en.wikipedia.org/wiki/Shikoku" />
                        <area shape="rect" coords="50,450,199,549" id="Chugoku" href="https://en.wikipedia.org/wiki/Ch%C5%ABgoku_region" />
                    </map>
                    <div className="text-input-9">
                        <button className="button">
                            <div className="text-wrapper-2">New Arrival</div>
                        </button>
                        <button className="div-wrapper">
                            <div className="text-wrapper-2">Trending Now</div>
                        </button>

                        <button className="button-2" onClick={toggleDropdown}>
                            <div className="text-wrapper-2">Regions</div>
                            <img className="vector" alt="Vector" src="/img/vector.svg" />
                        </button>
                        {showDropdown && (
                            <div className="dropdown-menu">
                                <ul>
                                    {regions.map((region, index) => (
                                        <li key={index} onClick={() => handleDropdownItemClick(region)}>{region}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <button className="enabled-wrapper">
                            <div className="text-wrapper-2">Essentials</div>
                        </button>
                    </div>
                    <img className="img" id="Kyoto" alt="Image" src="/img/kyoto1.png" />
                    <img className="image-2" id="Tokyo " alt="Image" src="/img/image-8.png" />
                    <img className="image-3" id="Nagoya" alt="Image" src="/img/nagoya.png" />
                    <img className="image-hiro" id="Hiroshima" alt="Image" src="/img/hirodome.png" />
                    <div className="text-wrapper-4">Tokyo</div>
                    <div className="text-wrapper-5">Kyoto</div>
                    <div className="text-wrapper-6">Nagoya</div>
                    <div className="text-wrapper-hiro">Hiroshima</div>
                </div>
                <div className="overlap-4">
                    <div className="text-input-10" />
                    <div className="tooltip">
                        <div className="overlap-group-3">
                            <img className="image-4" alt="Image" src="/img/image.png" />
                            <p className="p">
                                <span className="span">
                                    Corporate Info
                                    <br />
                                </span>
                                <span className="text-wrapper-7">
                                    Career
                                    <br />
                                </span>
                                <span className="span">
                                    Press
                                    <br />
                                    Investor relations
                                    <br />
                                    Corporate governance
                                </span>
                            </p>
                            <p className="div-2">
                                <span className="span">
                                    Help
                                    <br />
                                </span>
                                <span className="text-wrapper-7">
                                    Customer Service
                                    <br />
                                </span>
                                <span className="span">
                                    Legal &amp; Privacy
                                    <br />
                                    Contact
                                    <br />
                                    Report a scam
                                    <br />
                                    Cookie Settings
                                </span>
                            </p>
                            <p className="text-wrapper-8">
                                Stay Connected with Us! Discover the best omiyage from Japan and be in the know about exclusive offers
                                and cultural insights
                                <br />
                                <br /> [Explore More]
                            </p>
                        </div>
                    </div>
                </div>
                <div className="overlap-5">
                    <div className="overlap-wrapper">
                        <div className="overlap-6">
                            <div className="FORMALS-styles-wrapper">
                                <div className="text-wrapper-9">洋菓子</div>
                            </div>
                            <div className="CASUALS-styles-wrapper">
                                <div className="text-wrapper-9">その他</div>
                            </div>
                        </div>
                    </div>
                    <div className="streetstyle">Food</div>
                    <div className="rectangle" />
                    <img className="image-5" alt="Image" src="/img/image-5.png" />
                    <div className="text-wrapper-10">和菓子</div>
                </div>
                <div className="horizontal-container">
                    <div className="overlap-7">
                        <div className="frame">
                            <div className="overlap-group-4">
                                <p className="text-wrapper-11">Super Fast and Free Delivery</p>
                                <img className="image-6" alt="Image" src="/img/image-14.png" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="text-wrapper-12">Super Secure Payment System</div>
                            <img className="image-7" alt="Image" src="/img/image-13.png" />
                        </div>
                        <div className="text-input-container-2">
                            <div className="non-contactshipping">Non- Contact Shipping</div>
                            <img className="image-8" alt="Image" src="/img/image-12.png" />
                        </div>
                        <div className="button-3">
                            <div className="moneybackguranteed">Money Back Guranteed</div>
                            <img className="image-9" alt="Image" src="/img/image-11.png" />
                        </div>
                    </div>
                </div>
                <div className="container-2">
                    <div className="container-3">
                        <div className="container-4">
                            <img className="image-10" alt="Image" src="/img/image-10.png" />
                            <div className="overlap-group-5">
                                <div className="cargotrousers">Tokyo Banana</div>
                                <div className="rs">Rs 2,299.00</div>
                            </div>
                        </div>
                        <div className="switch">
                            <img className="image-11" alt="Image" src="/img/image-6.png" />
                            <div className="overlap-8">
                                <div className="text-wrapper-13">Hagi no Tsuki</div>
                                <div className="rs-2">Rs 2,299.00</div>
                            </div>
                        </div>
                        <div className="container-5">
                            <img className="image-10" alt="Image" src="/img/image-3.png" />
                            <div className="overlap-group-5">
                                <div className="cargotrousers">Akafuku Mochi</div>
                                <div className="rs">Rs 2,299.00</div>
                            </div>
                        </div>
                        <div className="container-6">
                            <img className="image-11" alt="Image" src="/img/image-2.png" />
                            <div className="overlap-8">
                                <div className="text-wrapper-13">Rokkatei Marusei</div>
                                <div className="rs-2">Rs 2,299.00</div>
                            </div>
                        </div>
                        <div className="card">
                            <img className="image-12" alt="Image" src="/img/shiroi.jpeg" />
                            <div className="overlap-9">
                                <div className="cargotrousers">Shiroi Koibito</div>
                                <div className="rs">Rs 2,299.00</div>
                            </div>
                        </div>

                    </div>
                    <div className="newarrivals">Best Sellers</div>
                </div>
                <div className="text-input-container-4">
                    <div className="home-menu">Home</div>
                    <div className="customerservice">Customer Service</div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;