
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

	// start the renderer
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
	camera.position.z = 300;

	scene.add(sphere);
	scene.add(pointLight);
	scene.add(camera);
	// draw!
	renderer.render(scene, camera);