const request = require('request')
console.log("aiman");
const forecast = (latitude, longitude, callback) => {
    // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
const url = 'http://api.weatherstack.com/current?access_key=19c7498469ff0e132d174b107e78bf69&query=' + latitude + ',' + longitude
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,  ' It is currently ' + body.current.temperature + ' degress out. But feels like ' + body.current.feelslike )
        }
    })
}

module.exports = forecast