$(document).ready(function () {	

// set the scene size
	var WIDTH = 1100,
	    HEIGHT = 600;

	// set some camera attributes
	var VIEW_ANGLE = 45,
	    ASPECT = WIDTH / HEIGHT,
	    NEAR = 0.1,
	    FAR = 10000;

	var $container = $('#container');
	var renderer = new THREE.WebGLRenderer();
	var camera = new THREE.PerspectiveCamera(  VIEW_ANGLE,
	                                ASPECT,
	                                NEAR,
	                                FAR  );
	var scene = new THREE.Scene();

	renderer.setSize(WIDTH, HEIGHT);
	$container.append(renderer.domElement);

	var radius = 100, segments = 16, rings = 16;
	var sphereMaterial = new THREE.MeshLambertMaterial(
	{
	    color: 0x0099FF
	});

	var sphere = new THREE.Mesh(
	   new THREE.SphereGeometry(radius, segments, rings),
	   sphereMaterial);

	var pointLight = new THREE.PointLight( 0xFFFFFF );

	pointLight.position.x = 10;
	pointLight.position.y = 50;
	pointLight.position.z = 160;

	scene.add(sphere);
	scene.add(pointLight);
	scene.add(camera);

	window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
	})();

	camera.position.z = 500;

	$(document).keydown(function(e) {
	  if (e.which == 81) {
	  	camera.position.z = camera.position.z + 5;
	  } 
	  if (e.which == 65){
	  	camera.position.z = camera.position.z - 5;
	  }
	});

	(function animloop(){
  	requestAnimFrame(animloop);
  	renderer.render(scene, camera);
	})();

	

})

	

	