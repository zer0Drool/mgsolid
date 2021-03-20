let scene, camera, renderer, rig, raycaster, mouse, container;

let ballPositions = [
    {
        x: 0,
        y: 0,
        z: 2,
        r: 0.75
    },
    {
        x: 0,
        y: 0,
        z: -2,
        r: 0.75
    },
    {
        x: 0,
        y: 0,
        z: 6,
        r: 1.25
    },
    {
        x: 0,
        y: 0,
        z: -6,
        r: 1.25
    },
    {
        x: 0,
        y: 0,
        z: 10,
        r: 0.75
    },
    {
        x: 0,
        y: 0,
        z: -10,
        r: 0.75
    },
    {
        x: 3,
        y: 0,
        z: 4,
        r: 0.75
    },
    {
        x: 3,
        y: 0,
        z: -4,
        r: 0.75
    },
    {
        x: -3,
        y: 0,
        z: 4,
        r: 0.75
    },
    {
        x: -3,
        y: 0,
        z: -4,
        r: 0.75
    },
    {
        x: 3,
        y: 0,
        z: 8,
        r: 0.75
    },
    {
        x: 3,
        y: 0,
        z: -8,
        r: 0.75
    },
    {
        x: -3,
        y: 0,
        z: 8,
        r: 0.75
    },
    {
        x: -3,
        y: 0,
        z: -8,
        r: 0.75
    }
];

let cylinderPositions = [
    {
        x: 0,
        y: 0,
        z: 6,
        r: 0.3,
        l: 6,
        d: Math.PI / 2
    },
    {
        x: 0,
        y: 0,
        z: -6,
        r: 0.3,
        l: 6,
        d: Math.PI / 2
    },
    {
        x: 0,
        y: 0,
        z: 0,
        r: 0.3,
        l: 3,
        d: null
    },
    {
        x: 3,
        y: 0,
        z: 6,
        r: 0.3,
        l: 3,
        d: null
    },
    {
        x: 3,
        y: 0,
        z: -6,
        r: 0.3,
        l: 3,
        d: null
    },
    {
        x: -3,
        y: 0,
        z: 6,
        r: 0.3,
        l: 3,
        d: null
    },
    {
        x: -3,
        y: 0,
        z: -6,
        r: 0.3,
        l: 3,
        d: null
    },
    {
        x: -1.5,
        y: 0,
        z: 9,
        r: 0.3,
        l: 3,
        d: Math.PI / -3.5
    },
    {
        x: -1.5,
        y: 0,
        z: -9,
        r: 0.3,
        l: 3,
        d: Math.PI / 3.5
    },
    {
        x: 1.5,
        y: 0,
        z: 9,
        r: 0.3,
        l: 3,
        d: Math.PI / 3.5
    },
    {
        x: 1.5,
        y: 0,
        z: -9,
        r: 0.3,
        l: 3,
        d: Math.PI / -3.5
    },
    {
        x: -1.5,
        y: 0,
        z: 3,
        r: 0.3,
        l: 3,
        d: Math.PI / 3.5
    },
    {
        x: -1.5,
        y: 0,
        z: -3,
        r: 0.3,
        l: 3,
        d: Math.PI / -3.5
    },
    {
        x: 1.5,
        y: 0,
        z: 3,
        r: 0.3,
        l: 3,
        d: Math.PI / -3.5
    },
    {
        x: 1.5,
        y: 0,
        z: -3,
        r: 0.3,
        l: 3,
        d: Math.PI / 3.5
    },
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

    const geometry = new THREE.SphereGeometry(ballPositions[i].r, 32, 32);
    const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
    sphere = new THREE.Mesh( geometry, material );
    container.add(sphere);

    sphere.highlight = true;
    // console.log(sphere.highlight);

    sphere.position.set(ballPositions[i].x, ballPositions[i].y, ballPositions[i].z);

};

function makeCylinders(i) {

    const geometry = new THREE.CylinderGeometry(cylinderPositions[i].r, cylinderPositions[i].r, cylinderPositions[i].l, 64);
    const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
    cylinder = new THREE.Mesh( geometry, material );
    container.add(cylinder);

    cylinder.highlight = false;

    cylinder.rotation.x = Math.PI / 2;

    if (cylinderPositions[i].d) {
        cylinder.rotation.z = cylinderPositions[i].d;
    };

    cylinder.position.set(cylinderPositions[i].x, cylinderPositions[i].y, cylinderPositions[i].z);

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
	const intersects = raycaster.intersectObjects(container.children);

    for (var i = 0; i < container.children.length; i++) {
        if (container.children[i].highlight) {
            container.children[i].material.color.set(0x00ff00);
        };
    };

    if (mouse.x !== 0 && mouse.y !== 0) {

        for (let i = 0; i < intersects.length; i ++) {

            if (intersects[i].object.highlight) {
                console.log('intersect!!');
                intersects[i].object.material.color.set(0x0000ff);
            };

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
