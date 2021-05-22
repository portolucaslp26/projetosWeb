document.getElementById('form').addEventListener('submit', searchMovie);

function searchMovie(e){
    var research = document.getElementById('search').value
    researchMovie(research)
    e.preventDefault();
}

function researchMovie(research){

    axios.get('http://www.omdbapi.com/?apikey=20545d0a&s=' + research)
    .then(function (response) {
        console.log(response);
        var movies = response.data.Search;
        var showMovies = '';

        for(var i = 0; i < movies.length; i++){
            showMovies += `
            <div class="col-sm-6 col-md-4">
                <div class="card thumbnail" id="card-movie">
                    <img src="${movies[i].Poster}" class="img-thumbnail">
                    <h4>${movies[i].Title}</h4>
                    <p>${movies[i].Year}</p>
                    <a href="#" class="btn btn-primary" id="detail-btn" role="button" onclick="movieDetails('${movies[i].imdbID}')">Details</a>
                </div>
            </div>
        `;
    }

    document.getElementById('movies').innerHTML = showMovies;

    })
    .catch(function (error) {
        console.log(error);
    });
}

function movieDetails(id){
    sessionStorage.setItem('movieID', id);
    location = 'detail.html';
    return false;
}
function showMovie(){
    var movieID = sessionStorage.getItem('movieID');

    axios.get('http://www.omdbapi.com/?apikey=20545d0a&i=' + movieID)
    .then(function (response) {
        var movie = response.data;
        console.log(movie);
        var showMovie = `
        <div class="card col-md-4 col-md-12 col-sm-12" id="card-detail">
            <img id="img-detail" src="${movie.Poster} class="img-responsive">
            <h3 id="title-detail"><strong>${movie.Title}</strong></h3>
        </div>
        <div class=" col-md-6">
            <div class="well clearfix" id="form-group">
                <ul class="list-group">
                    <li class="list-group-item"><b>Genre: </b>${movie.Genre}</li>
                    <li class="list-group-item"><b>Released: </b>${movie.Released}</li>
                    <li class="list-group-item"><b>Time: </b>${movie.Runtime}</li>
                    <li class="list-group-item"><b>Language: </b>${movie.Language}</li>
                    <li class="list-group-item"><b>Actors: </b>${movie.Actors}</li>
                    <li class="list-group-item"><h3>Description: </h3><p>${movie.Plot}</p> 
                    </li>
                </ul>
                <hr>
                <a href="#" type="button" class="btn btn-success">Watch</a>
                <input class="btn btn-secondary" type="button" value="Return" onClick="history.go(-1)">
            </div>
        `
    document.getElementById('movies').innerHTML = showMovie;
    })
    .catch(function (error) {
        console.log(error);
    });
}
