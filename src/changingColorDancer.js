var ChangingColorDancer = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  Dancer.call(this, top, left, timeBetweenSteps);
  //var oldStep = this.prototype.step;
};

ChangingColorDancer.prototype = Object.create(Dancer.prototype);
ChangingColorDancer.prototype.constructor = ChangingColorDancer;
ChangingColorDancer.prototype.oldStep = Dancer.prototype.step;

var index = 0;
ChangingColorDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  debugger;
  var colorArray = ['yellow', 'blue', 'green', 'red'];
  this.$node.css('border-color', colorArray[index]);
  index++;
  if (index > 3) {
    index = 0;
  }
};

//changingColorDancer.prototype.oldStep = this.step;