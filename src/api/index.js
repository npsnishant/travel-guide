import axios from 'axios'


export const getPlaceData = async (type, sw, ne) => {

  console.log(type)



  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`

      , {
        params: {
          // method: 'GET',
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
        }
      });
    // console.log(data);
    return data;

  } catch (error) {
    console.log(error)

  }
}





// import axios from "axios";
// const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

// const options = {
//   method: 'GET',
//   url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
//   params: {
//     bl_latitude: '11.847676',
//     tr_latitude: '12.838442',
//     bl_longitude: '109.095887',
//     tr_longitude: '109.149359',
//     restaurant_tagcategory_standalone: '10591',
//     restaurant_tagcategory: '10591',
//     limit: '30',
//     currency: 'USD',
//     open_now: 'false',
//     lunit: 'km',
//     lang: 'en_US'
//   },
//   headers: {
//     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//     'x-rapidapi-key': '34af5cf515mshe6bb4c09b41e1f2p1b0e39jsn888a11642546'
//   }
// };

// export const getPlaceData = async (sw, ne) => {
//   try {
//     const { data: { data } } = await axios.get(URL, options);
//     // console.log("hijcsjbdbcsbcbjh")
//     // console.log(data);
//     return data;

//   } catch (error) {
//     // console.log("err")
//     console.log(error)

//   }
// }


