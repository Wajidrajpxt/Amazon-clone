import React, { useState } from "react";
import Data from "./Data";
import { Link, useParams } from "react-router-dom";
import Product from "./Product";

function Main() {
  const { id } = useParams();

  console.log(id);

  const [data, setdata] = useState(Data);

  console.log(data, "dtttt");

  const FilteredData = (indx) => {
    let FilteredArray = data.filter((item, idx) => idx === indx);
    console.log(FilteredArray, "elements");
    setdata(FilteredArray);
  };

  return (
    <>
      <div class="navbar">
        <div class="navlogo">
          <div class="logo border"></div>
        </div>
        <div class="navadd border">
          <p class="addfirst icon">Deliver to</p>
          <div class="addicon">
            <i class="fa-solid fa-location-dot icon"></i>
            <p class="addsecond icon">India</p>
          </div>
        </div>

        <div class="nav-search">
          <select class="search-option1">
            <option value="All" class="search-option2">
              All
            </option>
          </select>
          <input type="text" placeholder="Search Amazon" class="search-input" />
          <div class="search-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div class="languageoption border">
          <div class="american"></div>
          <select class="lanoption">
            <option value="lan">EN</option>
          </select>
        </div>
        <div class="sign border">
          <p class="hello">Hello, sign in</p>
          <div class="account">
            <select class="account-sign">
              <option value="Account">Account & Lists</option>
            </select>
          </div>
          <div></div>
        </div>
        <div class="box6 border">
          <p class="return">Returns</p>
          <p class="order">& Orders</p>
        </div>
        <div class="cart border">
          <i class="fa-solid fa-cart-shopping"></i>
          cart
        </div>
      </div>
      <div class="second-nav">
        <div class="allicon border">
          <i class="fa-solid fa-bars"></i>
          <p class="list">All</p>
        </div>
        <div class="panel-ops">
          <p class="ptag border">Today's Deals</p>
          <p class="ptag border">Customer Service</p>
          <p class="ptag border">Registry</p>
          <p class="ptag border">Gift Cards</p>
          <p class="ptag border"> Sell</p>
        </div>
        <div class="deals">
          <p>Shop deals in Electronics</p>
        </div>
      </div>

      <main>
        <div class="main">
          <div class="msg">
            <p>
              You are on amazon.com. You can also shop on Amazon India for
              millions of products with fast local delivery.{" "}
              <a href="#">Click here to go to amazon.in</a>
            </p>
          </div>
        </div>

        <div class="bg-[white] w-[100%] border-lg   h-[auto] flex justify-around flex-wrap items-center">
          {/* {data[id].releventProduct.map((item, idx) => {
            // console.log(item, "item");
            return (
              <div onClick={() => FilteredData(idx)} className="w-[250px] bg-[white] ">
                <Link to={`/product/${id}`}>
                  <h5 className="text-lg text-[black]">{item.price}</h5>
                  <h5 className="text-lg text-[black]">{item.proname}</h5>
                  <div className="  transition-all w-[100%] hover:translate-y-1  ">
                    <img style={{height:'100%' ,width:"100%"}} src={item.img} alt="" />
                <p className="text-lg text-[blue]"  >Shop Now</p>
                  </div>
                </Link>
              </div>
              );
            })} */}

          {data[id].releventProduct.map((e, idx) => {
            console.log(e, "Productssss");
            return (
              <div
                key={idx}
                onClick={() => FilteredData(idx)}
                className="w-[250px] h-[60vh] bg-[white]  border border-silver-s300"
              >
                <Link to={`/product/${id}`}>
                 
                  <h5 className="text-lg text-[blue]">{e.price}</h5>
                  <h5 className="text-lg text-[blue]">{e.proname}</h5>
                  <div className="  transition-all w-[100%] hover:translate-y-1">
                    <img
                      style={{ height: "100%", width: "100%" }}
                      src={e.img}
                      alt=""
                    />
                    <p className="text-sm text-[black]">Shop Now</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
      <footer>
        <div class="firstpanel">Back to top</div>
        <div class="secondpanel">
          <ul>
            <p>Get to Know Us</p>
            <a>Careers</a>
            <a>Blog</a>
            <a>About Amazon</a>
            <a>Investor Relations</a>
            <a>Amazon Devices</a>
            <a>Amazon Science</a>
          </ul>
          <ul>
            <p>Make Money with Us</p>
            <a>Sell products on Amazon</a>
            <a>Sell on Amazon Business</a>
            <a>Sell apps on Amazon</a>
            <a>Become an Affiliate</a>
            <a>Self-Publish with Us</a>
            <a>Host an Amazon Hub</a>
            <a>›See More Make Money with Us</a>
          </ul>
          <ul>
            <p>Amazon Payment Products</p>
            <a>Amazon Business Card</a>
            <a>Shop with Points</a>
            <a>Reload Your Balance</a>
            <a>Amazon Currency Converter</a>
          </ul>
          <ul>
            <p>Let Us Help You</p>
            <a>Amazon and COVID-19</a>
            <a>Your Account</a>
            <a>Your Orders</a>
            <a>Shipping Rates & Policies</a>
            <a>Returns & Replacements</a>
            <a>Manage Your Content and Devices</a>
            <a>Amazon Assistant</a>
            <a>Help</a>
          </ul>
        </div>
        <div class="thirdpanel">
          <div class="logo"></div>
          <div class="select-op">
            <select name="" id="" class="sele">
              <option value="En">English</option>
            </select>
            <select name="" id="" class="sele">
              <option value="1">$ USD - U.S. Dollar</option>
            </select>

            <select name="" id="" class="sele">
              <option value="4"> United states</option>
            </select>
          </div>
        </div>
        <div class="panel4">
          <div class="page">
            <a href="">Conditions of Use</a>
            <a href="">Privacy Notice</a>
            <a href="">Your Ads Privacy Choices</a>
          </div>
          <div class="copyright">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </footer>
      <Product dt={data} />
    </>
  );
}

export default Main;
