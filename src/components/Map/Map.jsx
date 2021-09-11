import React from 'react'
import GoogleMapReact from 'google-map-react';
import './MapStyle.css'
import image from './tea.jpg'
import './Map.css'

const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked }) => {

    // coordinates = {lat: 0, lng:0}

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    // console.log(e);
                    // console.log("clicked")
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
                }}
                onChildClick={(child) => setChildClicked(child)}

            >

                {
                    places?.map((place, i) => (
                        <div
                            lat={Number(place.latitude)}
                            lng={Number(place.longitude)}
                            key={i}
                            className="map-box"
                        >
                            <span className="name">{place.name}</span>
                            <img className="map-img" src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt="" />
                            {/* {image} */}
                        </div>
                    ))
                }
            </GoogleMapReact>
        </div>
    )
}

export default Map
