angular.module('ui.bootstrap').controller('CarouselCtrl', function ($scope) {
  console.log('Carousel Controller Loaded!');
  
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 1000 + slides.length + 1;
    slides.push({
      image: 'http://lorempixel.com/' + newWidth + '/450',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<10; i++) {
    $scope.addSlide();
  }
});
