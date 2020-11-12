window.addEventListener('load', setUp, false);

function setUp() {
  // scene, camera, and renderer
  makeScene();

  // add a light
  letThereBeLight();

  // and an object
  createBox();
}
