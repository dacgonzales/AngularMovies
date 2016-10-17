movieApp.controller('EditMovieDetailsController',
    function EditMovieDetailsController($scope, MovieService){
        $scope.saveMovie = function(movie, newEventForm) {
         if(newEventForm.$valid) {            
            window.alert(MovieService.SaveMovie(movie, newEventForm));
            }
        };
        
        $scope.cancelMovie = function() {
            window.location = '/MovieLibrary.html';
        }
    });
