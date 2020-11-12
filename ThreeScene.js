function makeScene() {
  //get browser width and height
  var WIDTH = window.innerWidth;
  var HEIGHT = window.innerHeight;

  // make a scene
  scene = new THREE.Scene();

  // and a camera
  var aspectRatio = WIDTH / HEIGHT;
  var fieldOfView = 75;
  var near = 0.5;
  var far = 1000;

  camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    near,
    far
  );

  camera.position.z = 5;

  // create the renderer
  renderer = new THREE.WebGLRenderer();

  // and set its size to the dimensions of the window
  renderer.setSize(WIDTH, HEIGHT);

  // then attach the renderer to the div container in your HTML file
  var threeContainer = document.getElementById('threeContainer');
  threeContainer.appendChild(renderer.domElement);
}
