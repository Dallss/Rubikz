import * as THREE from 'three'
import { cameraPosition, instance, sqrt } from 'three/examples/jsm/nodes/Nodes.js'

//manual imports
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { degToRad, radToDeg } from 'three/src/math/MathUtils.js'
import { PoissonDenoiseShader } from 'three/examples/jsm/shaders/PoissonDenoiseShader.js'


//helper functions
function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180)
}

function distanceFromOrigin(x, y) {
  return Math.sqrt(x * x + y * y);
}
//preps
const scene = new THREE.Scene()
const cam = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, .01, 1000) 
//(sixe of angle perspective, aspect ratio, view frustum n, viem frustum m )

const renderer = new THREE.WebGLRenderer(
  {canvas: document.querySelector('#canvas') }
)
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(700, 500);

cam.aspect = 700 / 500;
cam.updateProjectionMatrix();

//camera
cam.position.set(15,15,15)
const orbitcont = new OrbitControls(cam, renderer.domElement);

//gemoetries
const cubePiece = new THREE.BoxGeometry(4.5,4.5,4.5)

//materials
const materialgray = new THREE.MeshBasicMaterial({color: 0x808080 ,wireframe: true })

const color = [
  new THREE.MeshBasicMaterial({ color: 0xFFFFFF }), // white     +x
  new THREE.MeshBasicMaterial({ color: 0xFFD500 }), // yellow    -x
  new THREE.MeshBasicMaterial({ color: 0xB90000 }), // red       +y
  new THREE.MeshBasicMaterial({ color: 0xFF5900 }), // Orange    -y
  new THREE.MeshBasicMaterial({ color: 0x0045AD }), // blue      +z
  new THREE.MeshBasicMaterial({ color: 0x009B48 })  // green     -z
]

//objects
// const axesHelper = new THREE.AxesHelper(25)
// scene.add(axesHelper)


function init(){
  let radiuscorner = Math.sqrt(5**2 + 5**2)
  
  window.piece = [];  // Declare piece as a global array
  for (let i = 0, x = -5; i < 3; i++, x += 5) {
    piece[i] = []
    for (let j = 0, y = -5; j < 3; j++, y += 5) {
      piece[i][j] = []
      for (let k = 0, z = -5; k < 3; k++, z += 5) {
        piece[i][j][k] = new THREE.Mesh(cubePiece, color)
        piece[i][j][k].position.set(x,y,z)

        scene.add(piece[i][j][k])
      }
    }
  }
  
 //
}

function getAngleOnXZPlane(piece){
  let x = piece.position.x
  let z = piece.position.z
  return Math.atan2(z,x)
}
function getAngleOnXYPlane(piece){
  let x = piece.position.x
  let y = piece.position.y
  return Math.atan2(x,y)
}
function getAngleOnZYPlane(piece){
  let z = piece.position.z
  let y = piece.position.y
  return Math.atan2(y,z)
}



function rotateOnYAxis(piece,degrees){
  
  let radius = distanceFromOrigin(piece.position.x, piece.position.z)
  let angle = getAngleOnXZPlane(piece) + degToRad(degrees)

  piece.position.z = radius * Math.sin(angle)
  piece.position.x = radius * Math.cos(angle)

  const axis = new THREE.Vector3(0,1,0)
  piece.rotateOnWorldAxis(axis,degToRad(-degrees))  
  
}
function rotateOnXAxis(piece,degrees){

  let radius = distanceFromOrigin(piece.position.y, piece.position.z)
  let angle = getAngleOnZYPlane(piece) + degToRad(degrees)
  
  piece.position.z = radius * Math.cos(angle)
  piece.position.y = radius * Math.sin(angle)

  const axis = new THREE.Vector3(1,0,0)
  piece.rotateOnWorldAxis(axis,degToRad(-degrees))
  
}
function rotateOnZAxis(piece,degrees){

  let radius = distanceFromOrigin(piece.position.x, piece.position.y)
  let angle = getAngleOnXYPlane(piece) + degToRad(degrees)

  piece.position.y = radius * Math.cos(angle)
  piece.position.x = radius * Math.sin(angle)

  const axis = new THREE.Vector3(0,0,1)
  piece.rotateOnWorldAxis(axis,degToRad(-degrees))
  // piece.rotation.z -= degToRad(degrees)
}



function turnY(degrees, layer){ //ylayer 2= top, 0=bottom

  for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
      if(i == 1 && j == 1)
        continue
      rotateOnYAxis(piece[i][layer][j],degrees)
    }
  }
  //mid
  const axis = new THREE.Vector3(0,1,0)
  piece[1][layer][1].rotateOnWorldAxis(axis,degToRad(-degrees))
}
function turnX(degrees, layer){
  for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
      if(i == 1 && j == 1)
        continue
      rotateOnXAxis(piece[layer][i][j],degrees)
    }
  }
  //mid
  const axis = new THREE.Vector3(1,0,0)
  piece[layer][1][1].rotateOnWorldAxis(axis,degToRad(-degrees))

}
function turnZ(degrees, layer){
  for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
      if(i == 1 && j == 1)
        continue
      rotateOnZAxis(piece[j][i][layer],degrees)
    }
  }
  //mid
  const axis = new THREE.Vector3(0,0,1)
  piece[1][1][layer].rotateOnWorldAxis(axis,degToRad(-degrees))
}



function setZArray(direction, layer){
  
  if(direction > 0){
    let hold = piece[0][2][layer];  
    // Rotating the corners clockwise
    piece[0][2][layer] = piece[0][0][layer];
    piece[0][0][layer] = piece[2][0][layer];
    piece[2][0][layer] = piece[2][2][layer];
    piece[2][2][layer] = hold;

    // Save the initial edge piece
    hold = piece[0][1][layer];

    // Rotating the edges clockwise
    piece[0][1][layer] = piece[1][0][layer];
    piece[1][0][layer] = piece[2][1][layer];
    piece[2][1][layer] = piece[1][2][layer];
    piece[1][2][layer] = hold;
  }
  else {
    let hold = piece[0][2][layer];
    // Rotating the corners counterclockwise
    piece[0][2][layer] = piece[2][2][layer];
    piece[2][2][layer] = piece[2][0][layer];
    piece[2][0][layer] = piece[0][0][layer];
    piece[0][0][layer] = hold;

    // Save the initial edge piece
    hold = piece[0][1][layer];

    // Rotating the edges counterclockwise
    piece[0][1][layer] = piece[1][2][layer];
    piece[1][2][layer] = piece[2][1][layer];
    piece[2][1][layer] = piece[1][0][layer];
    piece[1][0][layer] = hold;
  }
  //for counter clockwise
}
function setXArray(direction, layer){

  if (direction > 0) {
    //Rotating the corners clockwise
    let hold = piece[layer][0][0];  
    piece[layer][0][0] = piece[layer][2][0];
    piece[layer][2][0] = piece[layer][2][2];
    piece[layer][2][2] = piece[layer][0][2];
    piece[layer][0][2] = hold;

    // Save the initial edge piece
    hold = piece[layer][0][1];

    // Rotating the edges clockwise
    piece[layer][0][1] = piece[layer][1][0];
    piece[layer][1][0] = piece[layer][2][1];
    piece[layer][2][1] = piece[layer][1][2];
    piece[layer][1][2] = hold;

  }
  else {
    // Rotating the corners counterclockwise
    let hold = piece[layer][0][0];
    piece[layer][0][0] = piece[layer][0][2];
    piece[layer][0][2] = piece[layer][2][2];
    piece[layer][2][2] = piece[layer][2][0];
    piece[layer][2][0] = hold;

    // Save the initial edge piece
    hold = piece[layer][0][1];

    // Rotating the edges counterclockwise
    piece[layer][0][1] = piece[layer][1][2];
    piece[layer][1][2] = piece[layer][2][1];
    piece[layer][2][1] = piece[layer][1][0];
    piece[layer][1][0] = hold;
}
}
function setYArray(direction, layer){
 
  if (direction > 0) {
    // Rotating the corners clockwise
    let hold = piece[2][layer][2];  

    piece[2][layer][2] = piece[2][layer][0];
    piece[2][layer][0] = piece[0][layer][0];
    piece[0][layer][0] = piece[0][layer][2];
    piece[0][layer][2] = hold;

    // Save the initial edge piece
    hold = piece[1][layer][0];

    // Rotating the edges clockwise
    piece[1][layer][0] = piece[0][layer][1];
    piece[0][layer][1] = piece[1][layer][2];
    piece[1][layer][2] = piece[2][layer][1];
    piece[2][layer][1] = hold;
  }
  else{
    // Rotating the corners counterclockwise
    let hold = piece[2][layer][2];

    piece[2][layer][2] = piece[0][layer][2];
    piece[0][layer][2] = piece[0][layer][0];
    piece[0][layer][0] = piece[2][layer][0];
    piece[2][layer][0] = hold;

    // Save the initial edge piece
    hold = piece[1][layer][0];

    // Rotating the edges counterclockwise
    piece[1][layer][0] = piece[2][layer][1];
    piece[2][layer][1] = piece[1][layer][2];
    piece[1][layer][2] = piece[0][layer][1];
    piece[0][layer][1] = hold;
}
}



let turning = 0
let sidetoturn = ''
let speed = 5
let vector = speed



function animate (){
  requestAnimationFrame( animate )
  
  if(turning > 0){
    switch(sidetoturn){
      case 'x0':
        console.log('turnx ran')
        turnX(vector, 0)
        if(turning == Math.abs(vector)){
          setXArray(vector, 0)
        }
        break
      case 'x1':
        console.log('turnx ran')
        turnX(vector, 1)
        if(turning == Math.abs(vector)){
          setXArray(vector, 1)
        }
        break
      case 'x2':
        console.log('turnx ran')
        turnX(vector, 2)
        if(turning == Math.abs(vector)){
          setXArray(vector, 2)
        }
        break
      case 'y0':
        console.log('turny ran')
        turnY(vector, 0)
        if(turning == Math.abs(vector)){  
          setYArray(vector, 0)
        }
        break

      case 'y1':
        console.log('turny ran')
        turnY(vector, 1)
        if(turning == Math.abs(vector)){  
          setYArray(vector, 1)
        }
        break
      
      case 'y2':
        console.log('turny ran')
        turnY(vector, 2)
        if(turning == Math.abs(vector)){  
          setYArray(vector, 2)
        }
        break
      
      case 'z0':
        console.log('turnz ran')
        turnZ(vector, 0)
        if(turning == Math.abs(vector)){
          setZArray(vector, 0)
        }
        break

      case 'z1':
        console.log('turnz ran')
        turnZ(vector, 1)
        if(turning == Math.abs(vector)){
          setZArray(vector, 1)
        }
        break

      case 'z2':
        console.log('turnz ran')
        turnZ(vector, 2)
        if(turning == Math.abs(vector)){
          setZArray(vector, 2)
        }
        break
    }
    
    turning -= Math.abs(vector)
  }

  renderer.render(scene, cam)
}


//mao ni ang main hahaha
init()
animate()



//cont
function onKeydown(event){

  
  console.log(event)
  vector = event.shiftKey ? speed * -1 : speed;

  switch(event.keyCode){
    case 81:
      if(turning<=0){
        turning = 90
        sidetoturn = 'x0'  
      }
      break
    case 87:
      if(turning<=0){
        turning = 90
        sidetoturn = 'x1'
      }
      break
    case 69:
      if(turning<=0){
        turning = 90
        sidetoturn = 'x2'
      }
      break
    case 80:
      if(turning<=0){
        turning = 90
        sidetoturn = 'z0'
      }
      break
    case 79:
      if(turning<=0){
        turning = 90
        sidetoturn = 'z1'
      }
      break
    case 73:
      if(turning<=0){
        turning = 90
        sidetoturn = 'z2'
      }
      break
    case 70:
      if(turning<=0){
        turning = 90
        sidetoturn = 'y0'
      }
      break
    case 71:
      if(turning<=0){
        turning = 90
        sidetoturn = 'y1'
      }
      break
    case 72:
      if(turning<=0){
        turning = 90
        sidetoturn = 'y2'
      }
      break
  }
}

//event listeners 
window.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', onKeydown);
});
