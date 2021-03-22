let scene, camera, renderer, rig, raycaster, mouse, container;
let windowWidth, windowHeight;

let nameLabel = document.getElementById('name');

let cameraDirection = {
    x: ['positive', 'negative'],
    y: ['positive', 'negative'],
    z: ['positive', 'negative'],
};

let balls = [
    {
        x: 0,
        y: 0,
        z: 2,
        r: 0.75,
        camera: [10, 6, 10],
        name: 'Strut D - Sediment Pool'
    },
    {
        x: 0,
        y: 0,
        z: -2,
        r: 0.75,
        camera: [10, 6, 10],
        name: 'Strut G - Oil Pressure Facility'
    },
    {
        x: 0,
        y: 0,
        z: 6,
        r: 1.25,
        camera: [10, 6, 10],
        name: 'Shell 1 Core'
    },
    {
        x: 0,
        y: 0,
        z: -6,
        r: 1.25,
        camera: [10, 6, 10],
        name: 'Shell 2 Core'
    },
    {
        x: 0,
        y: 0,
        z: 10,
        r: 0.75,
        camera: [10, 6, 10],
        name: 'Strut A - Pump Room'
    },
    {
        x: 0,
        y: 0,
        z: -10,
        r: 0.75,
        camera: [10, 6, 10],
        name: 'Strut J - Power Plant'
    },
    {
        x: 3,
        y: 0,
        z: 4,
        r: 0.75,
        camera: [10, 6, 10],
        name: 'Strut E - Heliport and Parcel Room'
    },
    {
        x: 3,
        y: 0,
        z: -4,
        r: 0.75,
        camera: [10, 6, 10],
        name: 'Strut L - Sewage Treatment Facility'
    },
    {
        x: -3,
        y: 0,
        z: 4,
        r: 0.75,
        camera: [10, 6, 10],
        name: 'Strut C - Dining Hall'
    },
    {
        x: -3,
        y: 0,
        z: -4,
        r: 0.75,
        camera: [10, 6, 10],
        name: 'Strut H - Warehouse and Heliport'
    },
    {
        x: 3,
        y: 0,
        z: 8,
        r: 0.75,
        camera: [10, 6, 10],
        name: 'Strut F - Warehouse'
    },
    {
        x: 3,
        y: 0,
        z: -8,
        r: 0.75,
        camera: [10, 6, 10],
        name: 'Strut K - Biochem Lab'
    },
    {
        x: -3,
        y: 0,
        z: 8,
        r: 0.75,
        camera: [10, 6, 10],
        name: 'Strut B - Transformer Room'
    },
    {
        x: -3,
        y: 0,
        z: -8,
        r: 0.75,
        camera: [10, 6, 10],
        name: 'Strut I - Assembley Facility'
    }
];

let connectors = [
    {
        x: 0,
        y: 0,
        z: 6,
        r: 0.2,
        l: 6,
        d: Math.PI / 2
    },
    {
        x: 0,
        y: 0,
        z: -6,
        r: 0.2,
        l: 6,
        d: Math.PI / 2
    },
    {
        x: 0,
        y: 0,
        z: 0,
        r: 0.2,
        l: 3,
        d: null
    },
    {
        x: 3,
        y: 0,
        z: 6,
        r: 0.2,
        l: 3,
        d: null
    },
    {
        x: 3,
        y: 0,
        z: -6,
        r: 0.2,
        l: 3,
        d: null
    },
    {
        x: -3,
        y: 0,
        z: 6,
        r: 0.2,
        l: 3,
        d: null
    },
    {
        x: -3,
        y: 0,
        z: -6,
        r: 0.2,
        l: 3,
        d: null
    },
    {
        x: -1.5,
        y: 0,
        z: 9,
        r: 0.2,
        l: 3,
        d: Math.PI / -3.5
    },
    {
        x: -1.5,
        y: 0,
        z: -9,
        r: 0.2,
        l: 3,
        d: Math.PI / 3.5
    },
    {
        x: 1.5,
        y: 0,
        z: 9,
        r: 0.2,
        l: 3,
        d: Math.PI / 3.5
    },
    {
        x: 1.5,
        y: 0,
        z: -9,
        r: 0.2,
        l: 3,
        d: Math.PI / -3.5
    },
    {
        x: -1.5,
        y: 0,
        z: 3,
        r: 0.2,
        l: 3,
        d: Math.PI / 3.5
    },
    {
        x: -1.5,
        y: 0,
        z: -3,
        r: 0.2,
        l: 3,
        d: Math.PI / -3.5
    },
    {
        x: 1.5,
        y: 0,
        z: 3,
        r: 0.2,
        l: 3,
        d: Math.PI / -3.5
    },
    {
        x: 1.5,
        y: 0,
        z: -3,
        r: 0.2,
        l: 3,
        d: Math.PI / 3.5
    },
];

legs = [
    {
        x: 0,
        y: -1,
        z: 2,
        r: 0.2,
        l: 2
    },
    {
        x: 0,
        y: -1,
        z: -2,
        r: 0.2,
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
        r: 0.2,
        l: 2
    },
    {
        x: 0,
        y: -1,
        z: -10,
        r: 0.2,
        l: 2
    },
    {
        x: 3,
        y: -1,
        z: 8,
        r: 0.2,
        l: 2
    },
    {
        x: 3,
        y: -1,
        z: -8,
        r: 0.2,
        l: 2
    },
    {
        x: -3,
        y: -1,
        z: 8,
        r: 0.2,
        l: 2
    },
    {
        x: -3,
        y: -1,
        z: -8,
        r: 0.2,
        l: 2
    },
    {
        x: 3,
        y: -1,
        z: 4,
        r: 0.2,
        l: 2
    },
    {
        x: 3,
        y: -1,
        z: -4,
        r: 0.2,
        l: 2
    },
    {
        x: -3,
        y: -1,
        z: 4,
        r: 0.2,
        l: 2
    },
    {
        x: -3,
        y: -1,
        z: -4,
        r: 0.2,
        l: 2
    },
];

const views = [
    {
        left: 0,
        bottom: 0,
        width: 1,
        height: 1,
        eye: [ 0, -1, 45 ],
        up: [ 0, 1, 0 ],
        fov: 25
    },
    {
        right: 0.07,
        bottom: 0.07,
        width: 0.2,
        height: 0.2,
        eye: [ 0, 0, 15 ],
        up: [ 0, 1, 0],
        fov: 25
    }
]

function init() {

    scene = new THREE.Scene();
    // camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 0.1, 1000 );
    // scene.add(camera);

    // orthographic cameras
	// mapCamera = new THREE.OrthographicCamera(
    // window.innerWidth / -2,		// Left
    // window.innerWidth / 2,		// Right
    // window.innerHeight / 2,		// Top
    // window.innerHeight / -2,	// Bottom
    // -5000,            			// Near
    // 10000 );           			// Far
    // mapCamera.up = new THREE.Vector3(0,0,-1);
    // mapCamera.lookAt( new THREE.Vector3(0,-1,0) );
    // scene.add(mapCamera);

    // mapCamera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 0.1, 1000 );
    // scene.add(mapCamera);

    for ( let ii = 0; ii < views.length; ++ ii ) {

        const view = views[ ii ];
        const camera = new THREE.PerspectiveCamera( view.fov, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.fromArray( view.eye );
        camera.up.fromArray( view.up );
        view.camera = camera;

    }

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor( 0xffffff, 0);
    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.2;
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    // camera.position.z = 50;

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    const geometry = new THREE.BoxGeometry(20, 20, 20);
    const material = new THREE.MeshPhongMaterial( { color: 0x00ff00, opacity: 0, transparent: true } );
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
    sphere.name = balls[i].name;
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
            moveCamera(intersects[i].object.position, intersects[i].object.cam);
            nameLabel.innerText = intersects[i].object.name;
        };
    };

};

// function moveCamera(ball, pos) {

//     console.log('move', pos);

    // save original rotation and position
    // var startRotation = new THREE.Euler().copy(camera.rotation);
    // var startPosition = new THREE.Vector3().copy(camera.position);
    // // console.log('start', camera.rotation);

    // // final rotation (with lookAt)
    // camera.position.set(pos[0], pos[1], pos[2]);
    // camera.lookAt(ball);
    // var endRotation = new THREE.Euler().copy(camera.rotation);

    // // revert to original rotation and position
    // camera.rotation.copy(startRotation);
    // camera.position.copy(startPosition);

    // var tweenMove = new TWEEN.Tween(container.rotation)
    // .to({x:container.rotation.x, y: Math.PI / 4, z: container.rotation.z}, 1000)
    // .easing(TWEEN.Easing.Quartic.InOut)
    // .start();

    // var tweenRotate = new TWEEN.Tween(camera.rotation)
    // .to({x: endRotation.x, y: endRotation.y, z: endRotation.z}, 1000)
    // .easing(TWEEN.Easing.Quartic.InOut)
    // .start();

// };

function moveCamera(ball, pos) {

    console.log('move', pos);

    // save original rotation and position
    var startRotation = new THREE.Euler().copy(views[1].camera.rotation);
    var startPosition = new THREE.Vector3().copy(views[1].camera.position);
    // console.log('start', camera.rotation);

    // final rotation (with lookAt)
    views[1].camera.position.set(pos[0], pos[1], pos[2]);
    views[1].camera.lookAt(ball);
    var endRotation = new THREE.Euler().copy(views[1].camera.rotation);

    // revert to original rotation and position
    views[1].camera.rotation.copy(startRotation);
    views[1].camera.position.copy(startPosition);

    var tweenMove = new TWEEN.Tween(views[1].camera.position)
    .to({x: pos[0], y: pos[1], z: pos[2]}, 1000)
    .easing(TWEEN.Easing.Quartic.InOut)
    .start();

    var tweenRotate = new TWEEN.Tween(views[1].camera.rotation)
    .to({x: endRotation.x, y: endRotation.y, z: endRotation.z}, 1000)
    .easing(TWEEN.Easing.Quartic.InOut)
    .start();

};

let xAnim = {
    min: -0.001,
    max: 0.001,
    rate: 0.00002,
    val: 0,
    forward: true
};

let yAnim = {
    min: -0.006,
    max: 0.006,
    rate: 0.000002,
    val: 0,
    forward: true
};

let xRot = {
    min: -0.004,
    max: 0.004,
    rate: 0.000001,
    val: 0,
    forward: true
};

let yRot = {
    min: -0.04,
    max: 0.04,
    rate: 0.00002,
    val: 0,
    forward: true
};

function animate() {
	requestAnimationFrame(animate);

    TWEEN.update();

    // update the picking ray with the camera and mouse position

	raycaster.setFromCamera(mouse, views[0].camera);

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

    // main camera anim
    xAnim.val += xAnim.forward ? xAnim.rate : -xAnim.rate;
    if (xAnim.forward && xAnim.val >= xAnim.max) xAnim.forward = false;
    if (!xAnim.forward && xAnim.val <= xAnim.min) xAnim.forward = true;

    views[0].camera.position.x = xAnim.val;

    yAnim.val += yAnim.forward ? yAnim.rate : yAnim.rate;
    if (yAnim.forward && yAnim.val >= yAnim.max) yAnim.forward = false;
    if (!yAnim.forward && yAnim.val <= yAnim.min) yAnim.forward = true;

    views[0].camera.position.y = yAnim.val;

    xRot.val += xRot.forward ? xRot.rate : -xRot.rate;
    if (xRot.forward && xRot.val >= xRot.max) xRot.forward = false;
    if (!xRot.forward && xRot.val <= xRot.min) xRot.forward = true;

    views[0].camera.rotation.x = xRot.val;

    yRot.val += yRot.forward ? yRot.rate : -yRot.rate;
    if (yRot.forward && yRot.val >= yRot.max) yRot.forward = false;
    if (!yRot.forward && yRot.val <= yRot.min) yRot.forward = true;

    views[0].camera.rotation.y = yRot.val;

    // console.log('xAnim.val', xAnim.val);
    // console.log('yAnim.val', yAnim.val);

    for ( let ii = 0; ii < views.length; ++ ii ) {

        const view = views[ ii ];
        const camera = view.camera;

        const left = view.left || !isNaN(view.left) ? Math.floor( window.innerWidth * view.left ) : false;
        const right = view.right || !isNaN(view.right) ? Math.floor(window.innerWidth - (window.innerWidth * view.right)) - (window.innerWidth * view.width) : false;
        const bottom = Math.floor( window.innerHeight * view.bottom );
        const width = Math.floor( window.innerWidth * view.width );
        const height = Math.floor( window.innerHeight * view.height );

        // console.log('left', left);
        // console.log('right', right);

        renderer.setViewport( right || left, bottom, width, height );
        renderer.setScissor( right || left, bottom, width, height );
        renderer.setScissorTest( true );
        renderer.setClearColor( 0xffffff, 0 );

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.render( scene, camera );

    };

};

window.addEventListener('mousemove', onMouseMove, false);
window.addEventListener('click', onClick, false);

init();
animate();
