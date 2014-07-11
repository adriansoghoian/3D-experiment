var camera, container, scene, renderer, particles, materials = [], parameters = [], i, h, color;
var mouseX = 0, mouseY = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

function initialize() {
  container = document.createElement( 'div' );
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 3000 );
  camera.position.z = 500;

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2( 0x00000, 0.00022 );

  geometry = new THREE.Geometry();

  for ( i = 0; i < 150000; i ++ ) {
    var vertex = new THREE.Vector3();
    vertex.x = Math.random() * 1000;
    vertex.y = Math.random() * 1000;
    vertex.z = Math.random() * 1000;
    geometry.vertices.push(vertex);
  }

  for ( i = 0; i < 15; i ++ ) {
    materials[i] = new THREE.ParticleSystemMaterial( { size : i } );
    particles = new THREE.ParticleSystem(geometry);

    particles.rotation.x = Math.random();
    particles.rotation.y = Math.random();
    particles.rotation.z = Math.random();

    scene.add(particles);
  }

  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  container.appendChild(renderer.domElement);

  document.addEventListener( 'mousemove', onDocumentMouseMove, false );
  document.addEventListener( 'touchstart', onDocumentTouchStart, false );
  document.addEventListener( 'touchmove', onDocumentTouchMove, false );
}

function onDocumentMouseMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}

function onDocumentTouchStart(event) {
  if ( event.touches.length === 1 ) {
    event.preventDefault();
    mouseX = event.touches[ 0 ].pageX - windowHalfX;
    mouseY = event.touches[ 0 ].pageY - windowHalfY;
  }
}

function onDocumentTouchMove(event) {
  if ( event.touches.length === 1 ) {
    event.preventDefault();
    mouseX = event.touches[0].pageX - windowHalfX;
    mouseY = event.touches[0].pageY - windowHalfY;
  }
}

function render() {
  var time = Date.now() * 0.0000005;
  camera.position.x += ( mouseX - camera.position.x ) * 0.10;
  camera.position.y += ( - mouseY - camera.position.y ) * 0.10;
  camera.lookAt(scene.position);
  for ( i = 0; i < scene.children.length; i ++ ) {
    var object = scene.children[i];
    object.rotation.x = time * i*1;
    object.rotation.y = time * i*1;
    object.rotation.z = time * i*5;
  }
  renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}


initialize();
animate();
