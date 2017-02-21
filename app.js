/**
 * Created by Sniazhana_Matskevich on 2/21/2017.
 */

const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street',
    json: true
}, (error, response, body) => {
    console.log(body);
});