(function() {


    movieApp.factory('MovieService', MovieService);
    MovieService.$inject = ['$http','$log'];

    function MovieService($http, $log) {
       var service = {
            GetMovieList:GetMovieList,
            SaveMovie: SaveMovie,
            CancelMovie: CancelMovie,
        };

        service.Movies = [];
        
        return service;

        /////////
        //Private functions
        /////////
        function GetMovieList() {
            return $http({method: 'GET', url: 'http://localhost:10380/Movie/Index'})
                .success(function(data){
                    service.Movies = data;  
                    $log.warn(data);                  
                })
                .error(function(data){
                    $log.warn(data);
                });
         }

         function SaveMovie(movie, form){
             return "Movie " + movie.Title + ' saved';
         }

         function CancelMovie(movie){
              return "Movie " + movie + ' cancelled';
         }
    }
})();
