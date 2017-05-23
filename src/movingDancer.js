var MovingDancer = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  Dancer.call(this, top, left, timeBetweenSteps);
  //var oldStep = this.prototype.step;
};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;
MovingDancer.prototype.oldStep = Dancer.prototype.step;

var index = 0;
MovingDancer.prototype.step = function() {
  let left = Math.random() * 1500;
  let top = Math.random() * 1000;
  let colorR = Math.random() * 255;
  let colorG = Math.random() * 255;
  let colorB = Math.random() * 255;
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate({
    left: left,
    top: top,
  }, this.timeBetweenSteps, function() {
    // Animation complete.
  });
  
};

