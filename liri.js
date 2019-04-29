require("dotenv").config();

const keys = require('./keys.js');
const axios = require('axios');

const command = process.argv[2];
const search = process.argv.slice(3).join(" ");
let bandsURL = 'https://rest.bandsintown.com/artists/' + search + '/events?app_id=codingbootcamp';
var spotifyURL = 'https://api.spotify.com/v1/?query=' + search + '\u0026offset=0\u0026limit=20\u0026type=track';
var movieURL = 'http://www.omdbapi.com/?t=' + search + '&y=&plot=short&apikey=trilogy'

if (command === 'concert-this') {
    axios
        .get(bandsURL)
        .then(function (response) {
            let jsonData = response.data;
            
            for(let i = 0; i < jsonData.length; i++) {
            let showData = [
                console.log('////////////////////////////'),
                'Venue: ' + jsonData[i].venue.name,
                'Location: ' + jsonData[i].venue.city,
                'Date: ' + jsonData[i].datetime,
                console.log('////////////////////////////'),
            ].join('\n\n');
            
            console.log(showData);
        }
        })
} else if (command === 'movie-this') {
    axios
        .get(movieURL)
        .then(function (response) {
            let jsonData = response.data;
                
            let movieData = [
                console.log('////////////////////////////'),
                'Title: ' + jsonData.Title,
                'Released: ' + jsonData.Released,
                'IMDB Rating: ' + jsonData.imdbRating,
                'Country: ' + jsonData.Country,
                'Language: ' + jsonData.Language,
                'Plot Summary ' + jsonData.Plot,
                'Cast: ' + jsonData.Actors,
                console.log('////////////////////////////'),
            ].join('\n\n');
            console.log(movieData);
        })

}



/* else if (command === 'spotify-this-song') {
    axios
        .get(spotifyURL)
        .then(function (response) {
            let jsonData = response.data;
            console.log(jsonData);
            for (let i = 0; i < jsonData.length; i++) {
                let artistData = [

                ]
            }
        })
}; */



console.log('Command: ' + command);
console.log('Search: ' + search);
