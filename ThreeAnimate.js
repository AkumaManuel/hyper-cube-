function animate() {
  //keep calling our animate function to keep the motion flowing
  requestAnimationFrame( animate );
  
  //finally render our scene
  renderer.render( scene, camera );

  //give our box a little twist
  box.rotation.x += 0.01;
  box.rotation.y += 0.01;
  
  //and update our camera controls for each frame
  controls.update();
}
