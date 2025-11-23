import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://img.freepik.com/premium-vector/fast-food-logo_721155-1887.jpg" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About-us</li>
          <li>contact-us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const resObj={
    "info": {
                      "id": "188457",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/888af431-0a27-4688-b9af-18fcf2e2b13e_188457.JPG",
                      "locality": "Egattur",
                      "areaName": "Egattur",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.2,
                      "parentId": "547",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "9.2K+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 2.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-11-23 22:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹589"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "1.3K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9ff7d01a-66f2-4379-9e78-644a744d5804"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chennai/kfc-egattur-rest188457",
                      "type": "WEBLINK"
                    }
                  };


const RestaurrentCard = (props) => {
    const {resData}=props;
  return (
    <div className="res-card">
      <img
        className="res-img"
        src="https://images.unsplash.com/photo-1550547660-d9450f859349"
        alt="burger"
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.sla.deliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search For Food" />
      </div>

      <div className="res-container">
        <RestaurrentCard resData={resObj}/>
        
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
