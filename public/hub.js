let scene, camera, renderer, rig, raycaster, mouse, container, viewRotationX, viewRotationY;
let windowWidth, windowHeight;

let borderContainer = document.getElementById('border-container');
let nameLabel = document.getElementById('name');

let building = false;
let nFTWarningOpen = false;
let canvasShowing = false;

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
        eye: [ 25, 25, 25],
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
    borderContainer.style.opacity = 1;

    scene = new THREE.Scene();

    for ( let ii = 0; ii < views.length; ++ ii ) {

        const view = views[ ii ];
        const camera = new THREE.PerspectiveCamera( view.fov, window.innerWidth / window.innerHeight, 1, 10000 );
        if (building && !ii) {
            camera.position.x = 70;
            camera.position.y = 0;
            camera.position.z = 120;
            // camera.position.z = 0;
            // camera.rotation.z = Math.PI / 2;
        } else {
            // camera.position.x = 10;
            // camera.position.y = 40;
            // camera.position.z = 0;
            // console.log('fuk', ii, camera.position);
            camera.position.fromArray( view.eye );
        };

        // camera.up.fromArray( view.up )

        view.camera = camera;

    };

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.domElement.classList.add('canvasElement');
    renderer.setClearColor( 0xffffff, 0);
    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.2;
    renderer.shadowMapEnabled = true;
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    const geometry = new THREE.BoxGeometry(10, 10, 10);
    const material = new THREE.MeshPhongMaterial( { color: 0x00ff00, opacity: 0, transparent: true, wireframe: false } );
    container = new THREE.Mesh( geometry, material );
    scene.add(container);

    container.position.set(0, 0, 0);
    views[0].camera.lookAt(0, 0, -10);
    viewRotationX = views[0].camera.rotation.x;
    viewRotationY = views[0].camera.rotation.y;
    viewRotationZ = views[0].camera.rotation.z;

    // if (building) {
        // container.rotation.x = Math.PI;
        // container.rotation.y = Math.PI / -2;
        // container.rotation.z = Math.PI / 2;
    // } else {
        // container.rotation.x = Math.PI / 8;
        // container.rotation.y = Math.PI / -7;
    // }

    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(30, 80, 10);
    scene.add( directionalLight );

    directionalLight.castShadow = true;
    directionalLight.shadowDarkness = 0.5;
    directionalLight.shadowCameraVisible = true;

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


    setTimeout(() => {
        renderer.domElement.style.opacity = 1;
    }, 10);
};

function makeBalls(i) {

    const geometry = new THREE.SphereGeometry(balls[i].r, 32, 32);
    // const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
    const material = new THREE.MeshPhongMaterial( {
        color: 0xb62cae,
        specular: 0xffff00,
        // diffuse: 0xcd5a5a,
        ambient: 0x000a55,
        emissive: 0x6b1566,
        // envMap: envMap,
        // combine: THREE.MultiplyOperation,
        shininess: 20,
        // reflectivity: 1.0
    } );
    sphere = new THREE.Mesh( geometry, material );
    container.add(sphere);

    sphere.castShadow = true;
    sphere.receiveShadow = true;
    sphere.highlight = true;
    sphere.cam = balls[i].camera;
    sphere.name = balls[i].name;
    sphere.location = balls[i].location;
    // console.log(sphere.location);

    sphere.position.set(balls[i].x, balls[i].y, balls[i].z);

    // console.log(sphere);

};

function makeBoxes(i) {

    // const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
    // const geometry = new THREE.BoxGeometry(0.7, 0.7, boxes[i].l);
    const geometry = new THREE.SphereGeometry(1.1, 40, 40);
    const material = new THREE.MeshPhongMaterial( {
        color: 0xb62cae,
        specular: 0xffff00,
        // diffuse: 0xcd5a5a,
        ambient: 0x000a55,
        emissive: 0x6b1566,
        // envMap: envMap,
        // combine: THREE.MultiplyOperation,
        shininess: 20,
        // reflectivity: 1.0
    } );
    box = new THREE.Mesh( geometry, material );
    container.add(box);

    box.castShadow = true;
    box.receiveShadow = true;
    box.highlight = true;
    box.box = true;
    box.cam = boxes[i].camera;
    box.name = boxes[i].name;
    box.location = boxes[i].location;

    box.rotation.y = boxes[i].d;
    box.position.set(boxes[i].x, boxes[i].y, boxes[i].z);

    // let time = performance.now() * 0.003;
    // let k = rando(4.5, 2.2);
    // for (let i = 0; i < box.geometry.vertices.length; i++) {
    //     let p = box.geometry.vertices[i];
    //     p.normalize().multiplyScalar(noise.perlin3(p.x * time, p.y * k, p.z * time));
    // };
    // box.geometry.verticesNeedUpdate = true;
    // box.geometry.computeVertexNormals();
    // box.geometry.normalsNeedUpdate = true;

};

function makeConnectors(i) {
    const geometry = new THREE.CylinderGeometry(connectors[i].r, connectors[i].r, connectors[i].l, 64);
    // const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
    const material = new THREE.MeshPhongMaterial( {
        color: 0x0000ff,
        // color: 0xb62cae,
        specular: 0xffff00,
        // diffuse: 0xcd5a5a,
        ambient: 0x000a55,
        emissive: 0x6b1566,
        // envMap: envMap,
        // combine: THREE.MultiplyOperation,
        shininess: 20,
        // reflectivity: 1.0
    } );
    cylinder = new THREE.Mesh( geometry, material );
    container.add(cylinder);

    cylinder.castShadow = true;
    cylinder.receiveShadow = true;
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

    // const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
    const material = new THREE.MeshPhongMaterial( {
        color: 0x0000ff,
        // color: 0xb62cae,
        specular: 0xffff00,
        // diffuse: 0xcd5a5a,
        ambient: 0x000a55,
        emissive: 0x6b1566,
        // envMap: envMap,
        // combine: THREE.MultiplyOperation,
        shininess: 20,
        // reflectivity: 1.0
    } );
	const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, opacity: 0, wireframe: false, transparent: true });

    const geometry = new THREE.TubeGeometry( path, 100, curves[i].r, 20, false );

    const curve = new THREE.Mesh( geometry, material );
	const wireframe = new THREE.Mesh( geometry, wireframeMaterial );
	curve.add(wireframe);

	container.add(curve);

    curve.castShadow = true;
    curve.receiveShadow = false;

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
    if (nFTWarningOpen) return;

    const intersects = raycaster.intersectObjects(container.children);
    for (var i = 0; i < intersects.length; i++) {
        if (intersects[i].object.highlight) {
            moveCamera(intersects[i].object.position, intersects[i].object.location);
            nameLabel.innerText = intersects[i].object.name;
            // views[0].eye[0] = intersects[i].object.location + 25;
            // views[0].eye[1] = intersects[i].object.location + 25;
        };
    };

};

function moveCamera(ball, pos) {

    for (let i = 0; i < views.length; i++) {

        // save original rotation and position
        var startRotation = new THREE.Euler().copy(views[i].camera.rotation);
        var startPosition = new THREE.Vector3().copy(views[i].camera.position);
        // console.log('start', camera.rotation);

        console.log(ball.z);
        let posZ = 25;
        if (ball.z <= -10 && ball.z > -20) {
            console.log('one');
            posZ = 5;
        };
        if (ball.z <= -20 && ball.z > -30) {
            console.log('two');
            posZ = -15;
        };
        if (ball.z <= -30 && ball.z > -40) {
            console.log('three');
            posZ = -35;
        };
        if (ball.z <= -40 && ball.z > -50) {
            console.log('four');
            posZ = -55;
        };
        if (ball.z <= -50 && ball.z > -60) {
            console.log('five');
            posZ = -75;
        };
        if (ball.z <= -60 && ball.z > -70) {
            console.log('six');
            posZ = -95;
        };
        if (ball.z <= -70 && ball.z > -80) {
            console.log('seven');
            posZ = -115;
        };

        console.log('z', posZ);

        // final rotation (with lookAt)
        views[i].camera.position.set(
            i === 1 ? ball.x : 25,
            i === 1 ? 15 : 35,
            i === 1 ? ball.z : posZ
        );
        views[i].camera.lookAt(ball);
        var endRotation = new THREE.Euler().copy(views[i].camera.rotation);

        // revert to original rotation and position
        views[i].camera.rotation.copy(startRotation);
        views[i].camera.position.copy(startPosition);

        var tweenMove = new TWEEN.Tween(views[i].camera.position)
        .to({
            x: i === 1 ? ball.x : 25,
            y: i === 1 ? 15 : 35,
            z: i === 1 ? ball.z : posZ
        }, i === 1 ? 1000 : 2500)
        .easing(i === 1 ? TWEEN.Easing.Quartic.InOut : TWEEN.Easing.Cubic.InOut)
        .start();

        var tweenRotate = new TWEEN.Tween(views[i].camera.rotation)
        .to({x: endRotation.x, y: endRotation.y, z: endRotation.z}, i === 1 ? 1000 : 2500)
        .easing(TWEEN.Easing.Quartic.InOut)
        .start();

    };

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
            container.children[i].material.color.set(0xff1493);

            if (container.children[i].location == window.localStorage.location) {
                container.children[i].material.color.set(0xffffff);
            };
        };

    };

    if (!nFTWarningOpen && mouse.x !== 0 && mouse.y !== 0) {

        for (let i = 0; i < intersects.length; i ++) {

            if (intersects[i].object.highlight) {
                // console.log('intersect!!');
                intersects[i].object.material.color.set(0x0000ff);
            };

    	};

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
        // views[0].camera.position.x = views[0].camera.position.x + xAnim.val;
        // views[0].camera.position.y = views[0].camera.position.y + yAnim.val;
        // views[0].camera.rotation.x += xRot.val;
        // views[0].camera.rotation.y += yRot.val;
        // views[0].camera.rotation.z = viewRotationZ;
    };

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
let downloadButton = document.getElementById('download-button');
let chat = document.getElementById('chat');
let input = document.getElementsByTagName('input')[0];
let nFTWarning = document.getElementById('nft-warning-wrap');
let nFTWarningNo = document.getElementById('nft-no');
let nFTWarningYes = document.getElementById('nft-yes');

function rando(max, min){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// let socket = io.connect('http://localhost:8080');
let socket = io.connect('http://mgsolid.herokuapp.com/');

const openNFTwarning = () => {
    nFTWarningOpen = true;
    nFTWarning.style.display = 'flex';

    borderContainer.style.filter = 'blur(3px)';
    let canvasToBlur = document.getElementsByTagName('canvas')[0];
    if (canvasToBlur) canvasToBlur.style.filter = 'blur(3px)';

    setTimeout(() => {
        nFTWarning.style.opacity = 1;
    }, 10);

};

const clostNFTwarning = () => {
    nFTWarning.style.opacity = '0';

    borderContainer.style.filter = 'blur(0px)';
    let canvasToResolve = document.getElementsByTagName('canvas')[0];
    if (canvasToResolve) canvasToResolve.style.filter = 'blur(0px)';

    setTimeout(() => {
        nFTWarningOpen = false;
        nFTWarning.style.display = 'none';
    }, 350);
};

const download_NFTs = () => {
    let nFTarray = [
        'one',
        'two',
        'three',
        'four',
        'five'
    ];

    axios.get('/download-tokens', {
        params: {
            username: window.localStorage.user ? window.localStorage.user : false,
            nFTarray
        },
        responseType: 'blob'
    }).then(response => {
        let download_name = /attachment;\sfilename=(.+)/.test(response.headers['content-disposition']) ? response.headers['content-disposition'].match(/attachment;\sfilename=(.+)/)[1] : null;

        try {
            const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');

            link.href = downloadUrl;
            link.setAttribute('download', download_name);
            document.body.appendChild(link);
            link.click();
            link.remove();

            localStorage.clear();
            sessionStorage.clear();
            window.location.replace('/');
        } catch (error) {
            console.log('fail', error);
        };
    }).catch(error => {
        console.log('error @ download NFTs', error);
    });
};

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
        console.log('no local storage - redirecting back');
        // generateUser(socket.id);
        window.location.replace('/');
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

        let messages = document.getElementsByClassName('new-user-popup');

        if (messages.length > 15){
            messages[0].style.opacity = 0;
            setTimeout(() => {
                messages[0].style.display = 'none';
                setTimeout(() => {
                    messages[0].parentNode.removeChild(messages[0]);
                }, 10)
            }, 400);

        };
    });

});

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
downloadButton.addEventListener('click', openNFTwarning);
nFTWarningNo.addEventListener('click', clostNFTwarning);
nFTWarningYes.addEventListener('click', download_NFTs);
document.body.addEventListener('keypress', (e) => handleTyping(e));

// ==========================================================================================
