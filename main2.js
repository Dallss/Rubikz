import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import * as THREE from 'three'
import { cameraPosition, instance, sqrt } from 'three/examples/jsm/nodes/Nodes.js'

//manual imports
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { degToRad, radToDeg } from 'three/src/math/MathUtils.js'

//helper functions
function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

//preps
const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .01, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#canvas') });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(700, 500);

cam.aspect = 700 / 500;
cam.updateProjectionMatrix();

//camera
cam.position.setZ(30);
const orbitcont = new OrbitControls(cam, renderer.domElement);

//gemoetries
const cubePiece = new THREE.BoxGeometry(4.5, 4.5, 4.5);

//materials
const materialgray = new THREE.MeshBasicMaterial({ color: 0x808080, wireframe: true });

const color = [
  new THREE.MeshBasicMaterial({ color: 0xFFFFFF }), // white     +x
  new THREE.MeshBasicMaterial({ color: 0xFFD500 }), // yellow    -x
  new THREE.MeshBasicMaterial({ color: 0xB90000 }), // red       +y
  new THREE.MeshBasicMaterial({ color: 0xFF5900 }), // Orange    -y
  new THREE.MeshBasicMaterial({ color: 0x0045AD }), // blue      +z
  new THREE.MeshBasicMaterial({ color: 0x009B48 })  // green     -z
];

//objects
function init() {
  window.piece = [];  // Declare piece as a global array
  for (let i = 0, x = -5; i < 3; i++, x += 5) {
    piece[i] = []
    for (let j = 0, y = -5; j < 3; j++, y += 5) {
      piece[i][j] = []
      for (let k = 0, z = -5; k < 3; k++, z += 5) {
        piece[i][j][k] = new THREE.Mesh(cubePiece, color)
        piece[i][j][k].position.set(x, y, z)
        scene.add(piece[i][j][k])
      }
    }
  }
  let initx = piece[2][2][2].position.x
  let initz = piece[2][2][2].position.z
  let radiuscorner = Math.sqrt(Math.pow(initx, 2) + Math.pow(initz, 2))

  for (let i = 0; i < 3; i++) {
    //y-edges init
    piece[0][i][0].angleOnXZPlane = 225
    piece[0][i][0].radius = radiuscorner

    piece[0][i][2].angleOnXZPlane = 315
    piece[0][i][2].radius = radiuscorner

    piece[2][i][0].angleOnXZPlane = 135
    piece[2][i][0].radius = radiuscorner

    piece[2][i][2].angleOnXZPlane = 45
    piece[2][i][2].radius = radiuscorner

    //y-sides init
    piece[2][i][1].angleOnXZPlane = 90
    piece[2][i][1].radius = 5

    piece[1][i][0].angleOnXZPlane = 180
    piece[1][i][0].radius = 5

    piece[0][i][1].angleOnXZPlane = 270
    piece[0][i][1].radius = 5

    piece[1][i][2].angleOnXZPlane = 0
    piece[1][i][2].radius = 5
  }

  for (let x = 0; x < 3; x++) {
    //x-edges init
    piece[x][0][0].angleOnYZPlane = 225
    piece[x][0][0].radius = radiuscorner

    piece[x][0][2].angleOnYZPlane = 315
    piece[x][0][2].radius = radiuscorner

    piece[x][2][0].angleOnYZPlane = 135
    piece[x][2][0].radius = radiuscorner

    piece[x][2][2].angleOnYZPlane = 45
    piece[x][2][2].radius = radiuscorner

    //x-sides init
    piece[x][2][1].angleOnYZPlane = 90
    piece[x][2][1].radius = 5

    piece[x][1][0].angleOnYZPlane = 180
    piece[x][1][0].radius = 5

    piece[x][0][1].angleOnYZPlane = 270
    piece[x][0][1].radius = 5

    piece[x][1][2].angleOnYZPlane = 0
    piece[x][1][2].radius = 5
  }

  for (let z = 0; z < 3; z++) {
    //z-edges init
    piece[0][0][z].angleOnXYPlane = 225
    piece[0][0][z].radius = radiuscorner

    piece[0][2][z].angleOnXYPlane = 315
    piece[0][2][z].radius = radiuscorner

    piece[2][0][z].angleOnXYPlane = 135
    piece[2][0][z].radius = radiuscorner

    piece[2][2][z].angleOnXYPlane = 45
    piece[2][2][z].radius = radiuscorner

    //z-sides init
    piece[2][1][z].angleOnXYPlane = 90
    piece[2][1][z].radius = 5

    piece[1][0][z].angleOnXYPlane = 180
    piece[1][0][z].radius = 5

    piece[0][1][z].angleOnXYPlane = 270
    piece[0][1][z].radius = 5

    piece[1][2][z].angleOnXYPlane = 0
    piece[1][2][z].radius = 5
  }
}

function rotateOnYAxis(piece, degrees) {
  let angle = piece.angleOnXZPlane
  piece.position.x = piece.radius * Math.sin(degToRad(angle))
  piece.position.z = piece.radius * Math.cos(degToRad(angle))
  piece.rotation.y += degToRad(degrees)
  piece.angleOnXZPlane += degrees
}

function rotateOnXAxis(piece, degrees) {
  let angle = piece.angleOnYZPlane
  piece.position.y = piece.radius * Math.cos(degToRad(angle))
  piece.position.z = piece.radius * Math.sin(degToRad(angle))
  piece.rotation.x += degToRad(degrees)
  piece.angleOnYZPlane += degrees
}

function rotateOnZAxis(piece, degrees) {
  let angle = piece.angleOnXYPlane
  piece.position.x = piece.radius * Math.cos(degToRad(angle))
  piece.position.y = piece.radius * Math.sin(degToRad(angle))
  piece.rotation.z += degToRad(degrees)
  piece.angleOnXYPlane += degrees
}

function turnY(degrees, layer) { //ylayer 2= top, 0=bottom
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i == 1 && j == 1)
        continue
      rotateOnYAxis(piece[i][layer][j], degrees)
    }
  }
  //mid
  piece[1][layer][1].rotation.y += degToRad(degrees)
}

function turnX(degrees, layer) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i == 1 && j == 1)
        continue
      rotateOnXAxis(piece[layer][i][j], degrees)
    }
  }
  //mid
  piece[layer][1][1].rotation.x += degToRad(degrees)
}

function turnZ(degrees, layer) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i == 1 && j == 1)
        continue
      rotateOnZAxis(piece[j][i][layer], degrees)
    }
  }
  //mid
  piece[1][1][layer].rotation.z += degToRad(degrees)
}

let turning = false;
let turnby = 0;
let ylayer = 0;
let degreesTurnPerAnim = 1;
let sidetoturn = '';

function animate() {
  requestAnimationFrame(animate);

  if (turning) {
    if (turnby === 0) {
      turning = false;
    } else {
      if (turning > 0) {
        switch (sidetoturn) {
          case 'x':
            turnX(degreesTurnPerAnim, ylayer);
            break;
          case 'y':
            turnY(degreesTurnPerAnim, ylayer);
            break;
          case 'z':
            turnZ(degreesTurnPerAnim, ylayer);
            break;
          default:
            console.log('Unknown axis');
            turning = false;
            break;
        }
        turnby -= degreesTurnPerAnim;
      }
    }
  }

  renderer.render(scene, cam);
}

// Initialize scene and animation
init();
animate();

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".buttons button");

  buttons.forEach(button => {
    button.addEventListener("click", onpress);
  });

  function onpress(event) {
    if (!turning) {
      turning = true;
      const buttonClass = event.target.className;
      console.log("Button clicked!");

      switch (buttonClass) {
        case 'f':
            console.log('Case: Front face rotation');
            turnby = 90;
            ylayer = 0; // Example value for front face
            degreesTurnPerAnim = 1;
            sidetoturn = 'z';
            break;
          case 'r':
            console.log('Case: Right face rotation');
            turnby = 90;
            sidetoturn = 'x';
            ylayer = 0; // Example value for right face
            // degreesTurnPerAnim = 1;
            break;
          case 'u':
            console.log('Case: Up face rotation');
            turnby = 90;
            ylayer = 2; // Example value for up face
            degreesTurnPerAnim = 1;
            sidetoturn = 'y';
            break;
          case 'b':
            console.log('Case: Back face rotation');
            turnby = 90;
            ylayer = 2; // Example value for back face
            degreesTurnPerAnim = 1;
            sidetoturn = 'z';
            break;
          case 'l':
            console.log('Case: Left face rotation');
            turnby = 90;
            sidetoturn = 'x';
            ylayer = 2;
            //degreesTurnPerAnim = -1;
            break;
          case 'd':
            console.log('Case: Down face rotation');
            turnby = 90;
            ylayer = 0; // Example value for down face
            // degreesTurnPerAnim = -1;
            sidetoturn = 'y';
            break;
          case 'fp':
            console.log('Case: Front face inverse rotation');
            turnby = -90;
            ylayer = 0; // Example value for front face inverse
            degreesTurnPerAnim = -1;
            sidetoturn = 'z';
            break;
          case 'rp':
            console.log('Case: Right face inverse rotation');
            turnby = -90;
            ylayer = 1; // Example value for right face inverse
            degreesTurnPerAnim = -1;
            break;
          case 'up':
            console.log('Case: Up face inverse rotation');
            turnby = -90;
            ylayer = 2; // Example value for up face inverse
            degreesTurnPerAnim = -1;
            break;
          case 'bp':
            console.log('Case: Back face inverse rotation');
            turnby = -90;
            ylayer = 0; // Example value for back face inverse
            degreesTurnPerAnim = 1;
            break;
          case 'lp':
            console.log('Case: Left face inverse rotation');
            turnby = -90;
            ylayer = 1; // Example value for left face inverse
            degreesTurnPerAnim = 1;
            break;
          case 'dp':
            console.log('Case: Down face inverse rotation');
            turnby = -90;
            ylayer = 2; // Example value for down face inverse
            degreesTurnPerAnim = 1;
            break;
          default:
            console.log('Unknown button pressed');
            turning = false;
            break;
        }
    }
  }
});
