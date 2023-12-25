// console.log(THREE);
function init() {
    var scene = new THREE.Scene(); //create scene object through Scene constructor

    var box = getBox(1, 1, 1, 0x00eddd);
    var plane = getPlane(4, 0xeeffdd);

    // box.position.y = 0.5;
    box.position.y = box.geometry.parameters.height/2;
    // plane.rotation.x = 90;
    plane.rotation.x = Math.PI/2;

    scene.add(box);
    scene.add(plane);

    var camera = new THREE.PerspectiveCamera( //create camera object through PerspectiveCamera constructor
        45, //depth of field
        window.innerWidth/window.innerHeight, //aspect ratio
        1,
        1000 // near and far clipping panes
    );

    camera.position.z = 5;
    camera.position.x = 2;
    camera.position.y = 1;

    camera.lookAt(new THREE.Vector3(0, 0, 0));

    var renderer = new THREE.WebGLRenderer(); //create renderer object through WebGLRenderer constructor
    renderer.setSize(window.innerWidth, window.innerHeight); //call to setSize function of the renderer object with 2 parameters/arguments
    document.getElementById('webgl').appendChild(renderer.domElement);
    renderer.render(
        scene,
        camera
    );
}

function getBox(w, h, d, color){
    var geometry = new THREE.BoxGeometry(w, h, d);
    var material = new THREE.MeshBasicMaterial({
        color: color
    });

    var mesh = new THREE.Mesh(
        geometry,
        material
    );

    return mesh;
}

function getPlane(size, color){
    var geometry = new THREE.PlaneGeometry(size, size);
    var material = new THREE.MeshBasicMaterial({
        color: color,
        side: THREE.DoubleSide
    });

    var mesh = new THREE.Mesh(
        geometry,
        material
    );

    return mesh;
}

init();