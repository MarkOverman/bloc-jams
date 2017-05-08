var pointsArray = document.getElementsByClassName('point');

var revealPoint = function(point) {
    point.style.opacity = 1;
    point.style.transform = "scaleX(1) translateY(0)";
    point.style.msTransform = "scaleX(1) translateY(0)";
    point.style.WebkitTransform = "scaleX(1) translateY(0)";
};

// I don't understand why points is here as it doesnt reference anything now
// that point above was changed from points to point 
var animatePoints = function(points) {
    forEach(points, revealPoint);
};

window.onload = function() {
    // Automatically animate the points on a tall screen where scrolling can't trigger the animation
     if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }
     // these variables are not in the end of video at end of assignment
     var sellingPoints = document.getElementsByClassName('selling-points')[0];
     var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

    window.addEventListener("scroll", function(event) {
        if (pointsArray[0].getBoundingClientRect().top <= 500) {
             animatePoints(pointsArray);
         }
    });
}
