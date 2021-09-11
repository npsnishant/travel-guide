
import React from 'react';
import './PlaceDetails.css';
import images from './tea.jpg';
import Ratings from '../../Ratings/Ratings';





const PlaceDetails = ({ place }) => {
  const rating_num = parseInt(place.rating);

  // console.log(rating_num)
  // console.log(place)
  return (
    <div className="cards">
      <div className="image">

        <img src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt="" />
      </div>
      <div className="title">
        <h3>{place.name}</h3>
      </div>
      <div className="stars">
        <span className="rating-stars"><Ratings /></span>


        <span className="rating-right" style={{ color: "#3a383a" }}>Rating- </span> {place.rating ? place.rating : "N/A"}
      </div>

      <div className="award-align">
        <div className="award"><span class="fa fa-trophy"></span></div>
        <div className="ranking" >{place.ranking}</div>

      </div>

      <div className="price">Price
        <span className="price-right" style={{ color: "#3a383a" }}>{place.price ? place.price : "N/A"} </span>
      </div>

      {/* <span> */}
      <div className="address-field">
        <i class="fa fa-map-marker-alt"></i>
        <div className="address">{place.address ? place.address : ""}</div>
      </div>
      {/* </span> */}



      <div className="des">
        <span><i class="fad fa-cutlery" style={{ fontSize: "24px" }} ></i></span>
        {/* <span><i class="fa fa-utensils-alt" style={{fontSize:"24px"}}></i></span> */}
        {place?.cuisine?.map(({ name }) => (
          <h2 key={name}>{name}</h2>
        ))}
      </div>

      <div className="phone">
        <span><i class="fa fa-phone"></i></span>
        <div className="phone_det">{place.phone ? place.phone : "N/A"}</div>
      </div>

      <div className="links">
        <span class="right"><button target="_blank" onClick={() => {
          window.open(place.web_url);
        }} href="url">Trip Advisor</button></span>
        <span><button target="_blank" onClick={() => {
          window.open(place.website);
        }} href="url">Website</button></span>
      </div>
    </div>

  );

}
export default PlaceDetails;