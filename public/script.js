let scene, camera, renderer, rig, raycaster, mouse, container;

let ballPositions = [
    [0, 0, 2],
    [0, 0, -2],
    [0, 0, 6],
    [0, 0, -6],
    [0, 0, 10],
    [0, 0, -10],
    [3, 0, 4],
    [3, 0, -4],
    [-3, 0, 4],
    [-3, 0, -4],
    [3, 0, 8],
    [3, 0, -8],
    [-3, 0, 8],
    [-3, 0, -8]
];

let cylinderPositions = [
    [0, 0, 0],
    [3, 0, 6],
    [3, 0, -6],
    [-3, 0, 6],
    [-3, 0, -6],
    [-1.5, 0, 9, 'negative'],
    [-1.5, 0, -9, 'positive'],
    [1.5, 0, 9, 'positive'],
    [1.5, 0, -9, 'negative'],
    [-1.5, 0, 3, 'positive'],
    [-1.5, 0, -3, 'negative'],
    [1.5, 0, 3, 'negative'],
    [1.5, 0, -3, 'positive'],
];

function init() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor( 0xffffff, 0);
    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.2;
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    camera.position.z = 25;

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    const geometry = new THREE.BoxGeometry(20, 20, 20);
    const material = new THREE.MeshPhongMaterial( { color: 0x00ff00, wireframe: true } );
    container = new THREE.Mesh( geometry, material );
    scene.add(container);

    container.position.set(0, 0, 0);

    var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(20, 20, 20);
    scene.add( directionalLight );

    for (var i = 0; i < ballPositions.length; i++) {
        makeBalls(i);
    };

    for (var i = 0; i < cylinderPositions.length; i++) {
        makeCylinders(i);
    };

};

function makeBalls(i) {

    const geometry = new THREE.SphereGeometry(0.75, 32, 32);
    const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
    sphere = new THREE.Mesh( geometry, material );
    container.add(sphere);

    // sphere.yeet = true;
    // console.log(sphere.yeet);

    sphere.position.set(ballPositions[i][0], ballPositions[i][1], ballPositions[i][2])

};

function makeCylinders(i) {

    const geometry = new THREE.CylinderGeometry(0.3, 0.3, 4, 64);
    const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
    cylinder = new THREE.Mesh( geometry, material );
    container.add(cylinder);

    cylinder.rotation.x = Math.PI / 2;

    if (cylinderPositions[i][3]) {
        if (cylinderPositions[i][3] === 'positive') {
            cylinder.rotation.z = Math.PI / 4;
        } else {
            cylinder.rotation.z = Math.PI / -4;
        };
    };

    cylinder.position.set(cylinderPositions[i][0], cylinderPositions[i][1], cylinderPositions[i][2])

};

function onMouseMove( e ) {

	// calculate mouse position in normalized device coordinates
	// (-1 to +1) for both components

	mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;

};

function animate() {
	requestAnimationFrame( animate );

    // update the picking ray with the camera and mouse position
	raycaster.setFromCamera( mouse, camera );

	// calculate objects intersecting the picking ray
	const intersects = raycaster.intersectObjects( container.children );
    // console.log(intersects);

    for (var i = 0; i < container.children.length; i++) {
        if (container.children[i].type === 'Mesh') {
            container.children[i].material.color.set(0x00ff00);
        };
    };

    if (mouse.x !== 0 && mouse.y !== 0) {

        for ( let i = 0; i < intersects.length; i ++ ) {

            console.log('intersect!!');

    		intersects[ i ].object.material.color.set( 0x0000ff );

    	};

    };

    if (container) {
        container.rotation.x += 0.002;
    };

	renderer.render( scene, camera );
};

window.addEventListener( 'mousemove', onMouseMove, false );

init();
animate();
