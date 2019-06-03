// http://paperjs.org
//
// Exercise:
// Add a brush width picker, in a similar whay the brush colour picker is implemented.
// Use: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range

let brushColor = "black";
let brushWidth = 3;

function handleBrushColorChange(e) {
  // Check the event structure:
  // console.log(e);
  brushColor = e.target.value;
}

window.onload = function() {
  // Get a reference to the canvas object
  const canvas = document.getElementById("draw-area");

  // See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
  const brushColorPicker = document.querySelector("#color-picker");
  // Check if you have selected something:
  // console.log(brushColorPicker);

  // See: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
  brushColorPicker.addEventListener(
    "change" /*this is the event type*/,
    handleBrushColorChange /*this is the callback function, that gets called every time the 'change' event gets fired*/
  );

  // Create an empty project and a view for the canvas:
  paper.setup(canvas);
  var path;
  var tool = new paper.Tool();

  tool.onMouseDown = function(event) {
    path = new paper.Path();
    // See path methods: http://paperjs.org/reference/path/
    path.strokeColor = brushColor;
    path.strokeWidth = brushWidth;
  }

  tool.onMouseDrag = function(event) {
    path.add(event.point);
    paper.view.draw();
  }
}


