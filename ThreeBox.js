function createBox() {

  //create the box geometry
  var boxGeometry = new THREE.BoxGeometry( 1, 1, 1 );

  //create the material, this one is purple and affected by lights
  var boxMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff } )

  //smash them together in a mesh, and add to your scene
  box = new THREE.Mesh(boxGeometry, boxMaterial);
  scene.add(box);
}
