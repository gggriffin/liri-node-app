# liri-node-app
<img src="/images/LiriIcon.png" width= 300px; height= 300px;>


This app is capable of taking different requests for movies, concerts and songs and sending them to the appropriate API. The responses are formatted using a couple of Node packages, including 
Moment and Chalk. 

Check out the link below to see a demo of my working LIRI app. 
https://drive.google.com/file/d/1nRhRCHEx7ZIqSD5SNlcxgtlsi8qKd4gM/view

The application includes 4 different functions: concert-this, spotify-this, movie-this and do-what-it-says.

Concert-this pulls up all upcoming concerts for a given artist and formats them into a list. This information is generated using the Bands In Town API.

<img src="/images/LiriConcert.png" width=300px; height=400px;>

Movie-this pulls uses the IMDB API to pull up several pieces of information for any movie in their database. This includes plot summary, date of release and cast.

<img src="/images/LiriMovie.png" width=500px; height=200px;>

Spotify-this takes a request for any song and uses the Spotify API to generate information regarding the artist, album and release date. It also returns a 30 second sample of the requested song. 

Do-what-it-says uses the FileRead Node package to read the random.txt file and perform the action that is listed there. You can see a demo of this and the spotify-this function in the above video.
