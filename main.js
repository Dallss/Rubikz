import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import * as THREE from 'three';
import { cameraPosition, instance, sqrt } from 'three/examples/jsm/nodes/Nodes.js';

//manual imports
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { degToRad, radToDeg } from 'three/src/math/MathUtils.js';


//helper functions
function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}


//preps
const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, .01, 1000); //(sixe of angle perspective, aspect ratio, view frustum n, viem frustum m )

const renderer = new THREE.WebGLRenderer(
{canvas: document.querySelector('#canvas'), }
);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth*0.6, window.innerHeight*0.6);

//camera
cam.position.setZ(30);
const orbitcont = new OrbitControls(cam, renderer.domElement);

//gemoetries
const cubePiece = new THREE.BoxGeometry(4.5,4.5,4.5);

//materials
const materialgray = new THREE.MeshBasicMaterial({color: 0x808080 ,wireframe: true });

const color = [
  new THREE.MeshBasicMaterial({ color: 0xFFFFFF }), // white     +x
  new THREE.MeshBasicMaterial({ color: 0xFFD500 }), // yellow    -x
  new THREE.MeshBasicMaterial({ color: 0xB90000 }), // red       +y
  new THREE.MeshBasicMaterial({ color: 0xFF5900 }), // Orange    -y
  new THREE.MeshBasicMaterial({ color: 0x0045AD }), // blue      +z
  new THREE.MeshBasicMaterial({ color: 0x009B48 })  // green     -z
];

//objects
const axesHelper = new THREE.AxesHelper(25);
scene.add(axesHelper);


function init(){
  
  let piece = [];
  for (let i = 0, x = -5; i < 3; i++, x += 5) {
    piece[i] = [];
    for (let j = 0, y = -5; j < 3; j++, y += 5) {
      piece[i][j] = [];
      for (let k = 0, z = -5; k < 3; k++, z += 5) {
        piece[i][j][k] = new THREE.Mesh(cubePiece, color);
        piece[i][j][k].position.set(x,y,z);
        scene.add(piece[i][j][k]);
      }
    }
  }

  //corners init
  piece[0][0][0].angleOnXZPlane = 225
  piece[0][0][0].angleOnXZPlane = 225

  

}



//keep track of angle

let angle = 45

function turn(clockwise, cube){

  let initx = cube.piece[2][2][2].position.x
  let initz = cube.piece[2][2][2].position.z

  const radius = Math.sqrt(Math.pow(initx,2)+Math.pow(initz,2));

  //corners
  
  cube.piece[2][2][2].position.x = radius * Math.sin(degToRad(angle));
  cube.piece[2][2][2].position.z = radius * Math.cos(degToRad(angle));
  cube.piece[2][2][2].rotation.y = degToRad(angle-45);

  angle += 1 ;

}
let turning = false;


function animate (){
  requestAnimationFrame( animate );
  
  if(turning){
    turn(true,rubikz);
    if((angle-45) % 90 == 0){
      turn(true, rubikz)
      turning = false
    }
  }
  
  console.log(angle)

  renderer.render(scene, cam);
}

init()


//event listeners
document.addEventListener("DOMContentLoaded", () => {
  const rotateButton = document.querySelector(".rotate");
  rotateButton.addEventListener("click", onpress);

  function onpress() {
    if(!turning){
      console.log("Button clicked!");
      turning = true;
    }
  }
});