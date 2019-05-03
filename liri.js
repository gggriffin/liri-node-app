require("dotenv").config();
const axios = require('axios');
const moment = require('moment');
const fs = require('fs');

let command = process.argv[2];
let search = process.argv.slice(3).join(" ");
let bandsURL = 'https://rest.bandsintown.com/artists/' + search + '/events?app_id=codingbootcamp';
let movieURL = 'http://www.omdbapi.com/?t=' + search + '&y=&plot=short&apikey=trilogy';

function setBandURL(searchTerm) {
    return 'https://rest.bandsintown.com/artists/' + searchTerm + '/events?app_id=codingbootcamp';
}


function searchOptions(command, search, bandsURL) {
    if (command === 'concert-this') {
    axios
        .get(bandsURL)
        .then(function (response) {
            let jsonData = response.data;

            for (let i = 0; i < jsonData.length; i++) {
                let time = jsonData[i].datetime;
                let convertedTime = moment(time).format('MMMM Do YYYY');

                let showData = [
                    console.log('////////////////////////////'),
                    'Venue: ' + jsonData[i].venue.name,
                    'Location: ' + jsonData[i].venue.city,
                    'Date: ' + convertedTime,
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
} else if (command === 'spotify-this') {
        let spotifySearch = search.replace(" ", "%20")
        console.log(spotifySearch);
        axios({
            method:"GET",
            url: "https://api.spotify.com/v1/search?q=" + spotifySearch + "&type=track&limit=1",
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + 'BQDvNu9eraDN1GSlwWytvvaQm6INuud3i9_-YVhCytqjPBA-3TKIdyVGeeM4bP0bJbONuNcLJ_bMP082KoxctqvC1p-77jgAnfexDevETvgMBN_4naCfVojB6UI_SpilsUHVROR4Hf0S7Wq8vC1FvAYvCL1LsG0',
                'Content-Type': 'application/json'
            },
        }).then( function (response) {
            let responseData = response.data.tracks.items[0];
            console.log('////////////////////////////'),
            console.log('Album: ' + responseData.album.name);
            console.log('Artist: ' + responseData.album.artists[0].name);
            console.log('Song: ' + responseData.name);
            console.log('Preview: ' + responseData.preview_url);
            console.log('////////////////////////////')

        });
    };
}

     
function doWhatItSays() {
    fs.readFile('random.txt', 'utf8', function (error, data) {
        if (error) {
            return console.log(error);
        } else {
            dataArr = data.split(',')
            console.log(dataArr);
            let command = String(dataArr[0]);
            let search = dataArr[1];
            console.log('New command: ' + command);
            console.log('New search: ' + search);
            let bandsURL = setBandURL(search);
            searchOptions(command, search, bandsURL);
        }
    })
}

/* function Get("https://api.spotify.com/v1/tracks/3n3Ppam7vgaVa1iaRUc9Lp" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQDKIDG-ga2aO0nAle1gPMENm581MBL1R2VZI8GgmuLZ2g2GrMgx81Le2DkCd534TnCv1HxNMsm7DyMUOA0wgrg5zkD2CTsRZjZ9OJjRwml5cHCoorqHElKT8cgwKhddWBQ84bju85Mg8irgVw7Vvi-v8tS8BA8")
 */
//https://api.spotify.com/v1/tracks/3n3Ppam7vgaVa1iaRUc9Lp
switch (command) {
    case 'concert-this':
        searchOptions(command, search, bandsURL);
        break;
    case 'movie-this':
        searchOptions(command, search, movieURL);
        break;
    case 'do-what-it-says':
        doWhatItSays();
        break;
    case 'spotify-this':
        searchOptions(command, search);
        break;
    default:
        break;
}



