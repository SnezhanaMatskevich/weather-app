/*jshint esversion: 6 */
/**
 * Created by Sniazhana_Matskevich on 2/21/2017.
 */

const yargs = require('yargs');
var geocode = require('./geocode/geocode');

const argv = yargs
    .options({
        address: {
            demand: true,
            alias: 'a',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) =>{
  if (errorMessage){
    console.log(errorMessage);
  }
  else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});
