const request = require('request')

const geocode = (address, callback) => {
    // const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'
// const url1 = 'https://api.geoapify.com/v1/geocode/search?text=11%20Av.%20de%20la%20Bourdonnais%2C%2075007%20Paris%2C%20France&format=json&apiKey=d548c5ed24604be6a9dd0d989631f783'
  const url = 'https://api.geoapify.com/v1/geocode/search?text=Main%20St.%2C%20Berlin&filter=countrycode:' + address + '&apiKey=d548c5ed24604be6a9dd0d989631f783' 

request({ url, json: true }, (error, { body }) => {
    // console.log(body)
    // console.log(body.features[4].properties.lat)


        if (error) {
           console.log('Unable to connect to location services!', undefined)
        } else if (body.length === 0) {
            console.log('Unable to find location. Try another search.', undefined)
        } 
        else {
            callback(undefined, {
                latitude: body.features[4].properties.lat,
                longitude: body.features[4].properties.lon,
                location: body.features[4].properties.country
            })
        }
    })
}

module.exports = geocode