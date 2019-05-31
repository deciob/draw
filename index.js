window.onload = function() {
  // Get a reference to the canvas object
  var canvas = document.getElementById("draw-area");

  // Create an empty project and a view for the canvas:
  paper.setup(canvas);
  var path;
  var tool = new paper.Tool();

  tool.onMouseDown = function(event) {
    path = new paper.Path();
    path.strokeColor = 'black';
  }

  tool.onMouseDrag = function(event) {
    path.add(event.point);
    paper.view.draw();
  }
}


