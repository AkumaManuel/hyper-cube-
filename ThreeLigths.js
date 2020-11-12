function letThereBeLight() {

  //create your light - this one is white at almost full intensity
  var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.9 );

  // set the light direction
  directionalLight.position.set(150, 350, 350);

  //let it cast shadows
  directionalLight.castShadow = true;

  // and add it to the scene
  scene.add( directionalLight );
  
  controls = new THREE.OrbitControls(camera, renderer.domElement)
  animate();
}
