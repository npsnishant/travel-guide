import React, {useEffect, useState} from 'react'
import './App.css'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import PlaceDetails from './components/PlaceDetails/PlaceDetails'
import { getPlaceData } from './api'
import './api'
import Ratings from './Ratings/Ratings'



const App = () => {
  
  const [places, setPlaces] = useState([]);
  const [type, setType] = useState('restaurant');
  const [childClicked, setChildClicked] = useState(null);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({sw:0, ne:0});


  //this is used to show user current location by default in the map;
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

// console.log(bounds);
  useEffect(() => {
    // console.log({coordinates, bounds})
    getPlaceData(type, bounds.sw, bounds.ne)
    // getPlaceData(12, 12)

    .then((data) => {
      // console.log(data);
      setPlaces(data);
    })
  }, [coordinates, bounds])

  return (
    <div>
      <Header/>
      <div className="container">
        <div className="left-container"><List places={places} type={type} setType={setType} childClicked={childClicked}/></div>
        <div className="right-container"> <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} places={places} setChildClicked={setChildClicked}/></div>
      </div>
      
     
      {/* <PlaceDetails/> */}
    </div>
  )
}

export default App
