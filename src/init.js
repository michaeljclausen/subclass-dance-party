$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() / 3 * Math.random() + 250,
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    // dancer.$node.mouseover(function() {
    //   $(this).remove();
    // });  

    $('body').append(dancer.$node);
  });
  $('.lineUpDancers').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].$node.addClass('lineUp');
      window.dancers[i].$node.animate({ left: 10 }, 1000, function() {});
    }
  });
  
  $('.pushApartDancers').on('click', function(event) {

    var currentClosestDistance;
    var closestIndexes;
    
    for (var i = 0; i < window.dancers.length; i++) {
      var firstLeftPosition = window.dancers[i].position().left;
      var firstTopPosition = window.dancers[i].position().top; 
      
      for (var j = i; j < window.dancers.length; j++) {
        var secondLeftPosition = window.dancers[j].position().left;
        var secondTopPosition = window.dancers[j].position().top; 
        var left = Math.abs(secondLeftPosition - firstLeftPosition);
        var top = Math.abs(secondTopPosition - firstTopPosition);
        
        if (currentClosest === undefined || Math.pow(top, 2) + Math.pow(left, 2) > currentClosestDistance) {
          currentClosestDistance = Math.pow(top, 2) + Math.pow(left, 2);
          closestIndexes = [i, j];
        }
      }
      window.dancers[i].$node.animate({ left: 10 }, 1000, function() {});
      window.dancers[j].$node.animate({ left: -10 }, 1000, function() {});
    }
  });  

});

