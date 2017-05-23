var CarltonDancer = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  Dancer.call(this, top, left, timeBetweenSteps);
  //var oldStep = this.prototype.step;
};

CarltonDancer.prototype = Object.create(Dancer.prototype);
CarltonDancer.prototype.constructor = CarltonDancer;
CarltonDancer.prototype.oldStep = Dancer.prototype.step;

var index = 0;
CarltonDancer.prototype.step = function() {
  if (this.$node.hasClass('lineUp')) {
  
  } else {
    let left = Math.random() * 1500;
    // let colorR = Math.random() * 255;
    // let colorG = Math.random() * 255;
    // let colorB = Math.random() * 255;
    // call the old version of step at the beginning of any call to this new version of step
    this.oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.animate({
      left: left
    }, this.timeBetweenSteps, function() {
      // Animation complete.
    });
    this.$node.addClass('carltonDancer');
    this.$node.removeClass('dancer');
    
  }
  
};