var scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 0.1, 1000 ); 
var renderer = new THREE.WebGLRenderer(); renderer.setSize( window.innerWidth, window.innerHeight ); 
camera.position.z = 50;

document.body.appendChild( renderer.domElement );

var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

var geometry = new THREE.CubeGeometry(5,5,5); 
var material = new THREE.MeshBasicMaterial( { color: 0xFF0000, wireframe: true } ); 
var cube = new THREE.Mesh( geometry, material ); 
scene.add( cube ); 

var torus_geometry = new THREE.TorusGeometry( 10, 3, 20, 100 );
var torus_material = new THREE.MeshBasicMaterial( { color: 0x00A2FA, wireframe: true } );
var torus = new THREE.Mesh( torus_geometry, torus_material );
scene.add( torus );





// var geometryr = new THREE.RingGeometry( 1, 5, 32 );
// var materialr = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
// var mesh = new THREE.Mesh( geometryr, materialr );
// scene.add( mesh );

function render() { 
	requestAnimationFrame(render); 
	cube.rotation.x += 0.01; cube.rotation.y += 0.01;
	torus.rotation.x += 0.01; torus.rotation.y += 0.03;
	renderer.render(scene, camera); 
} 
render();