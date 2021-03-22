let scene, camera, renderer, rig, raycaster, mouse, container;

let balls = [
    {
        x: 0,
        y: 0,
        z: 2,
        r: 0.75,
        camera: [10, 10, 10]
    },
    {
        x: 0,
        y: 0,
        z: -2,
        r: 0.75,
        camera: [-10, 6, -10]
    },
    {
        x: 0,
        y: 0,
        z: 6,
        r: 1.25,
        camera: [10, 10, 10]
    },
    {
        x: 0,
        y: 0,
        z: -6,
        r: 1.25,
        camera: [10, 10, 10]
    },
    {
        x: 0,
        y: 0,
        z: 10,
        r: 0.75,
        camera: [10, 10, 10]
    },
    {
        x: 0,
        y: 0,
        z: -10,
        r: 0.75,
        camera: [10, 10, 10]
    },
    {
        x: 3,
        y: 0,
        z: 4,
        r: 0.75,
        camera: [10, 10, 10]
    },
    {
        x: 3,
        y: 0,
        z: -4,
        r: 0.75,
        camera: [10, 10, 10]
    },
    {
        x: -3,
        y: 0,
        z: 4,
        r: 0.75,
        camera: [10, 10, 10]
    },
    {
        x: -3,
        y: 0,
        z: -4,
        r: 0.75,
        camera: [10, 10, 10]
    },
    {
        x: 3,
        y: 0,
        z: 8,
        r: 0.75,
        camera: [10, 10, 10]
    },
    {
        x: 3,
        y: 0,
        z: -8,
        r: 0.75,
        camera: [10, 10, 10]
    },
    {
        x: -3,
        y: 0,
        z: 8,
        r: 0.75,
        camera: [10, 10, 10]
    },
    {
        x: -3,
        y: 0,
        z: -8,
        r: 0.75,
        camera: [10, 10, 10]
    }
];

let connectors = [
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

legs = [
    {
        x: 0,
        y: -1,
        z: 2,
        r: 0.3,
        l: 2
    },
    {
        x: 0,
        y: -1,
        z: -2,
        r: 0.3,
        l: 2
    },
    // {
    //     x: 0,
    //     y: -1.5,
    //     z: 6,
    //     r: 0.3,
    //     l: 3
    // },
    // {
    //     x: 0,
    //     y: -1.5,
    //     z: -6,
    //     r: 0.3,
    //     l: 3
    // },
    {
        x: 0,
        y: -1,
        z: 10,
        r: 0.3,
        l: 2
    },
    {
        x: 0,
        y: -1,
        z: -10,
        r: 0.3,
        l: 2
    },
    {
        x: 3,
        y: -1,
        z: 8,
        r: 0.3,
        l: 2
    },
    {
        x: 3,
        y: -1,
        z: -8,
        r: 0.3,
        l: 2
    },
    {
        x: -3,
        y: -1,
        z: 8,
        r: 0.3,
        l: 2
    },
    {
        x: -3,
        y: -1,
        z: -8,
        r: 0.3,
        l: 2
    },
    {
        x: 3,
        y: -1,
        z: 4,
        r: 0.3,
        l: 2
    },
    {
        x: 3,
        y: -1,
        z: -4,
        r: 0.3,
        l: 2
    },
    {
        x: -3,
        y: -1,
        z: 4,
        r: 0.3,
        l: 2
    },
    {
        x: -3,
        y: -1,
        z: -4,
        r: 0.3,
        l: 2
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

    camera.position.z = 20;

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    const geometry = new THREE.BoxGeometry(20, 20, 20);
    const material = new THREE.MeshPhongMaterial( { color: 0x00ff00, wireframe: true } );
    container = new THREE.Mesh( geometry, material );
    scene.add(container);

    container.position.set(0, 0, 0);
    container.rotation.x = Math.PI / 8;
    container.rotation.y = Math.PI / -7;

    var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(20, 20, 20);
    scene.add( directionalLight );

    for (var i = 0; i < balls.length; i++) {
        makeBalls(i);
    };

    for (var i = 0; i < connectors.length; i++) {
        makeConnectors(i);
    };

    for (var i = 0; i < legs.length; i++) {
        makeLegs(i);
    };

};

function makeBalls(i) {

    const geometry = new THREE.SphereGeometry(balls[i].r, 32, 32);
    const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
    sphere = new THREE.Mesh( geometry, material );
    container.add(sphere);

    sphere.highlight = true;
    sphere.cam = balls[i].camera;
    // console.log(sphere.highlight);

    sphere.position.set(balls[i].x, balls[i].y, balls[i].z);

    // console.log(sphere);

};

function makeConnectors(i) {

    const geometry = new THREE.CylinderGeometry(connectors[i].r, connectors[i].r, connectors[i].l, 64);
    const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
    cylinder = new THREE.Mesh( geometry, material );
    container.add(cylinder);

    cylinder.highlight = false;

    cylinder.rotation.x = Math.PI / 2;

    if (connectors[i].d) {
        cylinder.rotation.z = connectors[i].d;
    };

    cylinder.position.set(connectors[i].x, connectors[i].y, connectors[i].z);

};

function makeLegs(i) {

    const geometry = new THREE.CylinderGeometry(legs[i].r, legs[i].r, legs[i].l, 64);
    const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
    leg = new THREE.Mesh( geometry, material );
    container.add(leg);

    leg.highlight = false;

    // leg.rotation.x = Math.PI / 2;

    // if (legs[i].d) {
    //     leg.rotation.z = legs[i].d;
    // };

    leg.position.set(legs[i].x, legs[i].y, legs[i].z);

};

function onMouseMove(e) {

	// calculate mouse position in normalized device coordinates
	// (-1 to +1) for both components

	mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
	mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;

};

function onClick() {

    const intersects = raycaster.intersectObjects(container.children);
    for (var i = 0; i < intersects.length; i++) {
        if (intersects[i].object.highlight) {
            // console.log(intersects[i].object.position);
            let pos = intersects[i].object.position;
            moveCamera(intersects[i].object.position, intersects[i].object.cam);
            // camera.position.set(pos.x + 5, pos.y + 5, pos.z + 5);
            // camera.lookAt(pos);
        };
    };

};

function moveCamera(ball, pos) {

    console.log('move', pos);

    // save original rotation and position
    var startRotation = new THREE.Euler().copy(camera.rotation);
    var startPosition = new THREE.Vector3().copy(camera.position);
    // console.log('start', camera.rotation);

    // final rotation (with lookAt)
    camera.position.set(pos[0], pos[1], pos[2]);
    camera.lookAt(ball);
    var endRotation = new THREE.Euler().copy(camera.rotation);

    // revert to original rotation and position
    camera.rotation.copy(startRotation);
    camera.position.copy(startPosition);

    var tweenMove = new TWEEN.Tween(camera.position)
    .to({x: pos[0], y: pos[1], z: pos[2]}, 1000)
    .easing(TWEEN.Easing.Quartic.InOut)
    .start();

    var tweenRotate = new TWEEN.Tween(camera.rotation)
    .to({x: endRotation.x, y: endRotation.y, z: endRotation.z}, 1000)
    .easing(TWEEN.Easing.Quartic.InOut)
    .start();

};

function animate() {
	requestAnimationFrame(animate);

    TWEEN.update();

    // update the picking ray with the camera and mouse position
	raycaster.setFromCamera(mouse, camera);

	// calculate objects intersecting the picking ray
	const intersects = raycaster.intersectObjects(container.children);

    for (var i = 0; i < container.children.length; i++) {
        // update(container.children[i]);
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
        // container.rotation.x += 0.002;
    };

	renderer.render(scene, camera);
};

window.addEventListener('mousemove', onMouseMove, false);
window.addEventListener('click', onClick, false);

init();
animate();
