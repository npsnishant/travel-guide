import React from 'react'
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import './List.css'

const List = ({ places, type, setType, childClicked }) => {
    // console.log("click ho jaa", childClicked);
    console.log(type);
    return (
        <>
            <div className="main-list">
                <p className="left-tagline">
                    Stop, eat and go!
                </p>

                <div className="wrapper">
                    <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="restaurants">Restaurants</option>
                        <option value="hotels">Hotels</option>
                        <option value="attractions">Attractions</option>
                    </select>
                </div>
            </div>
            <div className="placedetails">
                {
                    places?.map((place) => (
                        // <h2>{place.name}</h2>
                        <PlaceDetails place={place} />
                    ))
                }
            </div>
        </>
    )
}

export default List

