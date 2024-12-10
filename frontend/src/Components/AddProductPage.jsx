import { useState } from "react";
import "../Styles/AddProductPage.css";
import {ReactComponent as ProductIcon} from  "../assets/ProductImage.svg";
export default function AddProductPage({vendorName, vendorAddress}) {

    const [productID, setproductID] = useState("");
    const [productName, setproductName] = useState("");
    const [productMRP, setproductMRP] = useState("");
    const [productCurrentPrice, setproductCurrentPrice] = useState("");
    const [productImage, setproductImage] = useState("");
    const [productDescription, setproductDescription] = useState("");

    const addProductFunction = (e) => {
        e.preventDefault();
        console.log("works");
        console.log(productID);
        console.log(productName);
        console.log(productMRP);
        console.log(productCurrentPrice);
        console.log(productImage);
        console.log(productDescription);
        setproductID("");
        setproductName("");
        setproductMRP("");
        setproductCurrentPrice("");
        setproductImage("");
        setproductDescription("");
    }

    return(
        <div className="AddProductPageDiv">
            <div className="LeftContainer">
                <div className="VendorInfoContainer">
                    <h1>{vendorName}- {vendorAddress}</h1>
                </div>
                <div className="ProductEntryContainer">
                    <div className="ProductEntry">
                        <div className="ProductEntryTitle">
                            <h2>Product Entry Form</h2>
                        </div>
                        <div className="ProductEntryInnerContainer">
                            <form onSubmit={addProductFunction} method="post">
                                <label htmlFor="">Product ID: </label>
                                <input type="text" placeholder="Please fill the column"  
                                    value={productID}
                                    onChange={(e) => {
                                        setproductID(e.target.value);
                                    }}
                                required autoFocus/> <br/>
                                <label htmlFor="">Product Name: </label>
                                <input type="text" placeholder="Please fill the column" 
                                    value={productName}
                                    onChange={(e) => {
                                        setproductName(e.target.value);
                                    }}
                                required/><br/>
                                <label htmlFor="">Product MRP: ₹</label>
                                <input type="text" placeholder="Please fill the column" 
                                    value={productMRP}
                                    onChange={(e) => {
                                        setproductMRP(e.target.value);
                                    }}
                                required/><br/>
                                <label htmlFor="">Product Current Price: ₹</label>
                                <input type="text" placeholder="Please fill the column" 
                                    value={productCurrentPrice}
                                    onChange={(e) => {
                                        setproductCurrentPrice(e.target.value);
                                    }}
                                required/><br/>
                                <label htmlFor="">Product Image (optional): </label>
                                <input type="" placeholder="Upload Image Files" 
                                    value={productImage}
                                    onChange={(e) => {
                                        setproductImage(e.target.value);
                                    }}
                                /><br/>
                                <label htmlFor="">Product Description(optional): </label><br/>
                                <textarea placeholder="Please fill the column"  
                                    value={productDescription}
                                    onChange={(e) => {
                                        setproductDescription(e.target.value);
                                    }}
                                /><br/>
                                <input type="submit" value="Add Product" />
                            </form>
                            <div className="ProductEntryImage">
                                {/* <img src="https://i.postimg.cc/NMDV7wPB/logo.png" alt="" srcset="" /> */}
                                <ProductIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="LinkToContactUs">
                    <p>Something’s not right? We are here to help- <a href="https://docs.python.org/3/library/venv.html">Contact Us</a></p>
                    
                </div>
            </div>
            <div className="RightContainer">
                <div className="BrandingContainer">
                    <div className="ImageContainer">
                        <img src="https://i.postimg.cc/NMDV7wPB/logo.png" alt="" srcset="" />
                    </div>
                    <div className="BrandNameContainer">
                        <h1>Raw-IT</h1>
                        <p>Crafting dream space</p>
                    </div>
                </div>
                <div className="TitleContainer">
                <p>We love to see new products on our page.<br/>
                This can’t happen without your support.<br/>
                We appreciate your time.
                </p>
                </div>
                <div className="LinkToHelperPage">
                    <p>Looking for a job? We got you! Click here.</p>
                </div>
            </div>
        </div>
    )
}