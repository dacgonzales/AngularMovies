movieApp.controller('MovieController',
    function MovieController($scope, MovieService){
        
        //Get List of movie
        MovieService.GetMovieList()
            .then(function(){
                 $scope.movies = MovieService.Movies;
            });

        
     

    });
