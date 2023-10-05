import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

const Products = () => {

    const [details, setDetails] = useState([]); // Initialize 'details' as a state variable

    useEffect(() => {
        // Perform data fetching or other side effects here
        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/"); // Replace 'your-api-endpoint' with the actual API URL
                setDetails(response.data.item_data);
                console.log(response.data); // Update the 'details' state with the fetched data
            } catch (error) {
                console.error(error);
            }
        };

        fetchData(); // Call the fetchData function when the component mounts
    }, []); // The empty dependency array ensures that this effect runs once when the component mounts

    return (
        <div className="products">
            {/* <div className="div"> */}
            <div className="tooltip">
                <div className="overlap-group">
                    <img className="image" alt="Image" src="/img/image.png" />
                    <p className="p">
                        <span className="text-wrapper">
                            Corporate Info
                            <br />
                        </span>

                        <span className="span">
                            Career
                            <br />
                        </span>
                        <span className="text-wrapper">
                            Press
                            <br />
                            Investor relations
                            <br />
                            Corporate governance
                        </span>
                    </p>
                    <p className="div-2">
                        <span className="text-wrapper">
                            Help
                            <br />
                        </span>
                        <ul className="span">
                            <li>Customer Service</li>
                            <li>Legal &amp; Privacy</li>
                            <li>Contact</li>
                            <li>Report a scam</li>
                            <li>Cookie Settings</li>
                        </ul>
                    </p>
                    <p className="text-wrapper-2">
                        Stay Connected with Us! Discover the best omiyage from Japan and be
                        in the know about exclusive offers and cultural insights
                        <br />
                        <br /> [Explore More]
                    </p>
                </div>
            </div>
            <div className="hero">
                <div className="overlap">
                    <img className="img" alt="Image" src="/img/image-1.png" />
                    <img className="image-2" alt="Image" src="/img/Yatsuhashi.png" />
                    <div className="overlap-2">
                        <img className="image-3" alt="Image" src="/img/image-4.png" />
                        <img className="image-4" alt="Image" src="/img/image-4.png" />
                        <p className="text-wrapper-3">
                            Elevate Gifting with a Touch of Japan
                        </p>
                    </div>
                    <div className="overlap-group-2">
                        <div className="text-wrapper-4">
                            With love.
                            <ul>
                                {/* {details.map((item) => (
                                    <li key={item.name}>
                                        {item.name}: {item.price}
                                    </li>
                                ))} */}
                            </ul>
                        </div>
                        <img className="image-5" alt="Image" src="/img/image-5.png" />
                    </div>
                </div>
            </div>
            <div className="vertical-container">
                <div className="overlap-3">
                    <img className="image-6" alt="Image" src="/img/image-6.png" />
                    <div className="checkbox">
                        <div className="overlap-group-3">
                            <img className="image-7" alt="Image" src="/img/image-7.png" />
                            <div className="text-input" />
                            <div className="text-input-2" />
                            <div className="cargotrousers">Flannel shirt</div>
                            <div className="cargotrousers-2">Buy Now</div>
                            <div className="rs">Rs 2,299.00</div>
                        </div>
                    </div>
                    <div className="overlap-wrapper">
                        <div className="overlap-group-3">
                            <img className="image-7" alt="Image" src="/img/image-8.png" />
                            <div className="text-input" />
                            <div className="text-input-2" />
                            <div className="cargotrousers">Flannel shirt</div>
                            <div className="cargotrousers-2">Buy Now</div>
                            <div className="rs">Rs 2,299.00</div>
                        </div>
                    </div>
                    <div className="overlap-group-wrapper">
                        <div className="overlap-group-3">
                            <img className="image-7" alt="Image" src="/img/image-9.png" />
                            <div className="text-input" />
                            <div className="text-input-2" />
                            <div className="cargotrousers">Flannel shirt</div>
                            <div className="cargotrousers-2">Buy Now</div>
                            <div className="rs">Rs 2,299.00</div>
                        </div>
                    </div>
                    <div className="button">
                        <div className="overlap-group-3">
                            <img className="image-7" alt="Image" src="/img/image-10.png" />
                            <div className="text-input" />
                            <div className="text-input-2" />
                            <div className="cargotrousers">Cargo Joggers</div>
                            <div className="cargotrousers-2">Buy Now</div>
                            <div className="rs">Rs 1,899.00</div>
                        </div>
                    </div>
                    <div className="div-wrapper">
                        <div className="overlap-group-3">
                            <img className="image-7" alt="Image" src="/img/image-11.png" />
                            <div className="text-input" />
                            <div className="text-input-2" />
                            <div className="cargotrousers">Cargo Joggers</div>
                            <div className="cargotrousers-2">Buy Now</div>
                            <div className="rs">Rs 1,899.00</div>
                        </div>
                    </div>
                    <div className="button-2">
                        <div className="overlap-group-3">
                            <img className="image-7" alt="Image" src="/img/image-12.png" />
                            <div className="text-input" />
                            <div className="text-input-2" />
                            <div className="cargotrousers">Cargo Joggers</div>
                            <div className="cargotrousers-2">Buy Now</div>
                            <div className="rs">Rs 1,899.00</div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="overlap-group-3">
                            <img className="image-7" alt="Image" src="/img/image-13.png" />
                            <div className="text-input" />
                            <div className="text-input-2" />
                            <div className="cargotrousers">Checked shirt</div>
                            <div className="cargotrousers-2">Buy Now</div>
                            <div className="rs">Rs 2,299.00</div>
                        </div>
                    </div>
                    <div className="container-2">
                        <div className="overlap-group-3">
                            <img className="image-7" alt="Image" src="/img/image-14.png" />
                            <div className="text-input" />
                            <div className="text-input-2" />
                            <div className="cargotrousers">Checked shirt</div>
                            <div className="cargotrousers-2">Buy Now</div>
                            <div className="rs">Rs 2,299.00</div>
                        </div>
                    </div>
                    <div className="container-3">
                        <div className="overlap-group-3">
                            <img className="image-7" alt="Image" src="/img/image-15.png" />
                            <div className="text-input" />
                            <div className="text-input-2" />
                            <div className="cargotrousers">Checked shirt</div>
                            <div className="cargotrousers-2">Buy Now</div>
                            <div className="rs">Rs 2,299.00</div>
                        </div>
                    </div>
                    <div className="container-4">
                        <div className="overlap-group-3">
                            <img className="image-7" alt="Image" src="/img/image-16.png" />
                            <div className="text-input" />
                            <div className="text-input-2" />
                            <div className="cargotrousers">Sweatshirt</div>
                            <div className="cargotrousers-2">Buy Now</div>
                            <div className="rs">Rs 799.00</div>
                        </div>
                    </div>
                    <div className="container-5">
                        <div className="overlap-group-3">
                            <img className="image-7" alt="Image" src="/img/image-17.png" />
                            <div className="text-input" />
                            <div className="text-input-2" />
                            <div className="cargotrousers">Sweatshirt</div>
                            <div className="cargotrousers-2">Buy Now</div>
                            <div className="rs">Rs 799.00</div>
                        </div>
                    </div>
                    <div className="container-6">
                        <div className="overlap-group-3">
                            <img className="image-7" alt="Image" src="/img/image-18.png" />
                            <div className="text-input" />
                            <div className="text-input-2" />
                            <div className="cargotrousers">Sweatshirt</div>
                            <div className="cargotrousers-2">Buy Now</div>
                            <div className="rs">Rs 799.00</div>
                        </div>
                    </div>
                    <div className="text-input-3" />
                    <div className="text-input-4" />
                    <div className="text-wrapper-5">SORT</div>
                    <div className="text-wrapper-6">28 Items</div>
                    <div className="text-wrapper-7">Load More</div>
                    <div className="text-wrapper-8">OmiyageOdyssey Collection</div>
                    <img className="arrow" alt="Arrow" src="/img/arrow-2.svg" />
                </div>
            </div>
            <div className="text-input-container">
                <div className="home-menu">Home</div>
                <div className="findastore-menu">Customer Service</div>
            </div>
            {/* </div> */}
        </div>
    );
};


export default Products;