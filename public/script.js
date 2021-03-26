let scene, camera, renderer, rig, raycaster, mouse, container;
let windowWidth, windowHeight;

let nameLabel = document.getElementById('name');

let building = false;

const views = building ? [
    {
        left: 0,
        bottom: 0,
        width: 1,
        height: 1,
        eye: [ 10, 0, 10 ],
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
] : [
    {
        left: 0,
        bottom: 0,
        width: 1,
        height: 1,
        eye: [ 0, -1, 35 ],
        up: [ 0, -1, 0 ],
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
];

function init() {

    scene = new THREE.Scene();

    for ( let ii = 0; ii < views.length; ++ ii ) {

        const view = views[ ii ];
        const camera = new THREE.PerspectiveCamera( view.fov, window.innerWidth / window.innerHeight, 1, 10000 );
        if (building && !ii) {
            camera.position.x = 0;
            camera.position.y = 60;
            // camera.position.z = 0;
            camera.position.z = -40;
            camera.rotation.x = Math.PI / -2.0;
        } else {
            camera.position.x = 10;
            camera.position.y = 40;
            camera.position.z = 0;
            console.log('fuk', ii, camera.position);
            // camera.position.fromArray( view.eye );
        };

        camera.up.fromArray( view.up )

        view.camera = camera;

    };

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor( 0xffffff, 0);
    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.2;
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    const geometry = new THREE.BoxGeometry(20, 20, 20);
    const material = new THREE.MeshPhongMaterial( { color: 0x00ff00, opacity: 0, transparent: true } );
    container = new THREE.Mesh( geometry, material );
    scene.add(container);

    container.position.set(0, 0, 0);

    if (building) {
        container.rotation.x = 0;
        container.rotation.y = 0;
    } else {
        container.rotation.x = Math.PI / 8;
        container.rotation.y = Math.PI / -7;
    }

    var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(20, 20, 20);
    scene.add( directionalLight );

    for (var i = 0; i < balls.length; i++) {
        makeBalls(i);
    };

    for (var i = 0; i < boxes.length; i++) {
        makeBoxes(i);
    };

    for (var i = 0; i < connectors.length; i++) {
        makeConnectors(i);
    };

    for (var i = 0; i < curves.length; i++) {
        makeCurves(i);
    };

    // for (var i = 0; i < legs.length; i++) {
    //     makeLegs(i);
    // };

    console.log('end of init - camera 0 position', views[0].camera.position);
    console.log('end of init - camera 1 position', views[1].camera.position);

};

function makeBalls(i) {

    const geometry = new THREE.SphereGeometry(balls[i].r, 32, 32);
    const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
    sphere = new THREE.Mesh( geometry, material );
    container.add(sphere);

    sphere.highlight = true;
    sphere.cam = balls[i].camera;
    sphere.name = balls[i].name;
    sphere.location = balls[i].location;
    // console.log(sphere.location);

    sphere.position.set(balls[i].x, balls[i].y, balls[i].z);

    // console.log(sphere);

};

function makeBoxes(i) {

    const geometry = new THREE.BoxGeometry(0.7, 0.7, boxes[i].l);
    const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
    box = new THREE.Mesh( geometry, material );
    container.add(box);

    box.highlight = true;
    box.cam = boxes[i].camera;
    box.name = boxes[i].name;
    box.location = boxes[i].location;

    box.rotation.y = boxes[i].d;

    box.position.set(boxes[i].x, boxes[i].y, boxes[i].z);

};

function makeConnectors(i) {

    const geometry = new THREE.CylinderGeometry(connectors[i].r, connectors[i].r, connectors[i].l, 64);
    const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
    cylinder = new THREE.Mesh( geometry, material );
    container.add(cylinder);

    cylinder.highlight = false;

    cylinder.rotation.x = Math.PI / 2;
    cylinder.rotation.z = connectors[i].d;

    cylinder.position.set(connectors[i].x, connectors[i].y, connectors[i].z);

};

function makeCurves(i) {

    let vectors = [];

    for (let j = 0; j < curves[i].c.length; j++) {
        let vector = new THREE.Vector3(curves[i].c[j][0], curves[i].c[j][1], curves[i].c[j][2]);
        vectors.push(vector);
    };

    const path = new THREE.CatmullRomCurve3(vectors);

    const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
	const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, opacity: 0, wireframe: false, transparent: true });

    const geometry = new THREE.TubeGeometry( path, 100, curves[i].r, 20, false );

    const curve = new THREE.Mesh( geometry, material );
	const wireframe = new THREE.Mesh( geometry, wireframeMaterial );
	curve.add(wireframe);

	container.add(curve);

    // curve.rotation.z = curves[i].d;

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

function moveCamera(ball, pos) {

    // save original rotation and position
    var startRotation = new THREE.Euler().copy(views[1].camera.rotation);
    var startPosition = new THREE.Vector3().copy(views[1].camera.position);
    // console.log('start', camera.rotation);

    // final rotation (with lookAt)
    views[1].camera.position.set(ball.x + 10, 20, ball.z + 15);
    views[1].camera.lookAt(ball);
    var endRotation = new THREE.Euler().copy(views[1].camera.rotation);

    // revert to original rotation and position
    views[1].camera.rotation.copy(startRotation);
    views[1].camera.position.copy(startPosition);

    var tweenMove = new TWEEN.Tween(views[1].camera.position)
    .to({x: ball.x + 10, y: 20, z: ball.z + 15}, 1000)
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

let logInAnim = false;

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
            if (container.children[i].location == window.localStorage.location) {
                container.children[i].material.color.set(0xffffff);
            };
        };

    };

    if (mouse.x !== 0 && mouse.y !== 0) {

        for (let i = 0; i < intersects.length; i ++) {

            if (intersects[i].object.highlight) {
                // console.log('intersect!!');
                intersects[i].object.material.color.set(0x0000ff);
            };

    	};

    };

    if (container) {
        // container.rotation.x += 0.002;
    };

    if (!building) {
        xAnim.val += xAnim.forward ? xAnim.rate : -xAnim.rate;
        if (xAnim.forward && xAnim.val >= xAnim.max) xAnim.forward = false;
        if (!xAnim.forward && xAnim.val <= xAnim.min) xAnim.forward = true;


        yAnim.val += yAnim.forward ? yAnim.rate : yAnim.rate;
        if (yAnim.forward && yAnim.val >= yAnim.max) yAnim.forward = false;
        if (!yAnim.forward && yAnim.val <= yAnim.min) yAnim.forward = true;


        xRot.val += xRot.forward ? xRot.rate : -xRot.rate;
        if (xRot.forward && xRot.val >= xRot.max) xRot.forward = false;
        if (!xRot.forward && xRot.val <= xRot.min) xRot.forward = true;


        yRot.val += yRot.forward ? yRot.rate : -yRot.rate;
        if (yRot.forward && yRot.val >= yRot.max) yRot.forward = false;
        if (!yRot.forward && yRot.val <= yRot.min) yRot.forward = true;
    };

    if (!building) {
        views[0].camera.position.x = xAnim.val;
        views[0].camera.position.y = yAnim.val;
        views[0].camera.rotation.x = xRot.val;
        views[0].camera.rotation.y = yRot.val;
    }

    for ( let ii = 0; ii < views.length; ++ ii ) {
        const view = views[ ii ];
        const camera = view.camera;

        const left = view.left || !isNaN(view.left) ? Math.floor( window.innerWidth * view.left ) : false;
        const right = view.right || !isNaN(view.right) ? Math.floor(window.innerWidth - (window.innerWidth * view.right)) - (window.innerWidth * view.width) : false;
        const bottom = Math.floor( window.innerHeight * view.bottom );
        const width = Math.floor( window.innerWidth * view.width );
        const height = Math.floor( window.innerHeight * view.height );

        renderer.setViewport( right || left, bottom, width, height );
        renderer.setScissor( right || left, bottom, width, height );
        renderer.setScissorTest( true );
        renderer.setClearColor( 0xffffff, 0 );

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        if (!logInAnim) {
            logInAnim = true;
            console.log('in animate - camera 0 position', views[0].camera.position);
        }

        renderer.render( scene, camera );
    };

};

window.addEventListener('mousemove', onMouseMove, false);
window.addEventListener('click', onClick, false);

init();
animate();

// ==========================================================================================

let username = document.getElementById('username');
let currentLocation = document.getElementById('current-location');
let enterButton = document.getElementById('enter-button');
let chat = document.getElementById('chat');
let input = document.getElementsByTagName('input')[0];

function rando(max, min){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let socket = io.connect('http://localhost:8080');
// let socket = io.connect('http://mgsolid.herokuapp.com/');

socket.on('connect', () => {

    console.log(socket.id);

    if (window.localStorage.user) {
        username.innerText = `user: ${window.localStorage.user}`;

        for (let i = 0; i < balls.length; i++) {
            if (balls[i].location == window.localStorage.location) {
                currentLocation.innerText = `location: ${balls[i].name}`
            };
        };

        localStorage.setItem('id', socket.id);
        console.log(window.localStorage);

        emitUsername();
    } else {
        console.log('no local storage - generate user');
        generateUser(socket.id);
    };

    socket.on('newUserJoined', data => {
        let div = document.createElement('div');
        div.classList.add('new-user-popup');

        let p = document.createElement('p');
        p.innerText = `${data.user} joined the map`;

        div.appendChild(p);
        chat.appendChild(div);
    });

    socket.on('newChatMessage', data => {
        console.log(data);
        let div = document.createElement('div');
        div.classList.add('new-user-popup');

        let p = document.createElement('p');
        p.innerText = `[${data.user}] - ${data.text}`;

        div.appendChild(p);
        chat.appendChild(div);
    });

});

function generateUser(id) {
    let nameValueKeys = Object.keys(nameObj);
    let indexOne = rando(nameValueKeys.length - 1, 0);
    let poolOne = nameValueKeys[indexOne];

    let remainingNameValueKeys = nameValueKeys.filter(value => value !== poolOne);
    let indexTwo = rando(remainingNameValueKeys.length - 1, 0);
    let poolTwo = remainingNameValueKeys[indexTwo];

    let underscoring = Math.random() > 0.7;
    let capital = Math.random() > 0.3;
    let nameOne = nameObj[poolOne][rando(nameObj[poolOne].length - 1, 0)];
    let nameTwo = nameObj[poolTwo][rando(nameObj[poolTwo].length - 1, 0)];

    if (!underscoring && capital) nameTwo = nameTwo.charAt(0).toUpperCase() + nameTwo.slice(1);

    let user = `${nameOne}${underscoring ? '_' : ''}${nameTwo}${rando(1337, 0)}`;

    username.innerText = `user: ${user}`;

    localStorage.setItem('user', user);
    localStorage.setItem('id', id);
    localStorage.setItem('location', 0);
    for (let i = 0; i < balls.length; i++) {
        if (balls[i].location == window.localStorage.location) {
            currentLocation.innerText = `location: ${balls[i].name}`
        };
    };
    console.log('storage', window.localStorage);

    emitUsername();
};


function emitUsername() {
    socket.emit('new', {user: window.localStorage.user});
};

function enterClick() {
    window.location.href = '/wisdomsforlove';
};

function handleTyping(e) {
    if (e.key === 'Enter') {

        if (input.value) {
            socket.emit('message', {
                text: input.value,
                user: window.localStorage.user,
                id: window.localStorage.id
            });
            input.value = null;
        };

    };
};

enterButton.addEventListener('click', enterClick);
document.body.addEventListener('keypress', (e) => handleTyping(e));

// ==========================================================================================
