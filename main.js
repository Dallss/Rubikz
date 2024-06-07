import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import * as THREE from 'three'
import { cameraPosition, instance, sqrt } from 'three/examples/jsm/nodes/Nodes.js'

//manual imports
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
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
{canvas: document.querySelector('#canvas'), }
)

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth*0.6, window.innerHeight*0.6)

//camera
cam.position.set(20,20,20)
const orbitcont = new OrbitControls(cam, renderer.domElement)

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
const axesHelper = new THREE.AxesHelper(25)
scene.add(axesHelper)

//utility functions
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









class Cube{
  constructor(scene){
    let radiuscorner = Math.sqrt(5**2 + 5**2)
  
    //I needed something to identify each and indivual piece to know the cube's state [solved, not]
    // So I used its solved state coordinate [i][j][k] and made a separate 3d array for the frame that the move functions

    this.piece = [];  // Declare this.piece as a global array
    this.cubeFrame = [];

    for (let i = 0, x = -5; i < 3; i++, x += 5) {
      this.piece[i] = []
      this.cubeFrame [i] = []

      for (let j = 0, y = -5; j < 3; j++, y += 5) {

        this.piece[i][j] = []
        this.cubeFrame[i][j] = []
        for (let k = 0, z = -5; k < 3; k++, z += 5) {

          this.piece[i][j][k] = new THREE.Mesh(cubePiece, color)
          this.piece[i][j][k].position.set(x,y,z)
          scene.add(this.piece[i][j][k])

          this.cubeFrame[i][j][k] = this.piece[i][j][k]
        }
      }
    }
  }

  turnY(degrees, layer){ //ylayer 2= top, 0=bottom

    for(let i=0; i<3; i++){
      for(let j=0; j<3; j++){
        if(i == 1 && j == 1)
          continue
        rotateOnYAxis(this.cubeFrame[i][layer][j],degrees)
      }
    }
    //mid
    const axis = new THREE.Vector3(0,1,0)
    this.cubeFrame[1][layer][1].rotateOnWorldAxis(axis,degToRad(-degrees))
  }
  turnX(degrees, layer){
    for(let i=0; i<3; i++){
      for(let j=0; j<3; j++){
        if(i == 1 && j == 1)
          continue
        rotateOnXAxis(this.cubeFrame[layer][i][j],degrees)
      }
    }
    //mid
    const axis = new THREE.Vector3(1,0,0)
    this.cubeFrame[layer][1][1].rotateOnWorldAxis(axis,degToRad(-degrees))
  
  }
  turnZ(degrees, layer){
    for(let i=0; i<3; i++){
      for(let j=0; j<3; j++){
        if(i == 1 && j == 1)
          continue
        rotateOnZAxis(this.cubeFrame[j][i][layer],degrees)
      }
    }
    //mid
    const axis = new THREE.Vector3(0,0,1)
    this.cubeFrame[1][1][layer].rotateOnWorldAxis(axis,degToRad(-degrees))
  }
  
  setZArray(direction, layer){
  
    if(direction > 0){
      let hold = this.cubeFrame[0][2][layer];  
      // Rotating the corners clockwise
      this.cubeFrame[0][2][layer] = this.cubeFrame[0][0][layer];
      this.cubeFrame[0][0][layer] = this.cubeFrame[2][0][layer];
      this.cubeFrame[2][0][layer] = this.cubeFrame[2][2][layer];
      this.cubeFrame[2][2][layer] = hold;
  
      // Save the initial edge this.cubeFrame
      hold = this.cubeFrame[0][1][layer];
  
      // Rotating the edges clockwise
      this.cubeFrame[0][1][layer] = this.cubeFrame[1][0][layer];
      this.cubeFrame[1][0][layer] = this.cubeFrame[2][1][layer];
      this.cubeFrame[2][1][layer] = this.cubeFrame[1][2][layer];
      this.cubeFrame[1][2][layer] = hold;
    }
    else {
      let hold = this.cubeFrame[0][2][layer];
      // Rotating the corners counterclockwise
      this.cubeFrame[0][2][layer] = this.cubeFrame[2][2][layer];
      this.cubeFrame[2][2][layer] = this.cubeFrame[2][0][layer];
      this.cubeFrame[2][0][layer] = this.cubeFrame[0][0][layer];
      this.cubeFrame[0][0][layer] = hold;
  
      // Save the initial edge this.cubeFrame
      hold = this.cubeFrame[0][1][layer];
  
      // Rotating the edges counterclockwise
      this.cubeFrame[0][1][layer] = this.cubeFrame[1][2][layer];
      this.cubeFrame[1][2][layer] = this.cubeFrame[2][1][layer];
      this.cubeFrame[2][1][layer] = this.cubeFrame[1][0][layer];
      this.cubeFrame[1][0][layer] = hold;
    }
    //for counter clockwise
  }
  setXArray(direction, layer){
  
    if (direction > 0) {
      //Rotating the corners clockwise
      let hold = this.cubeFrame[layer][0][0];  
      this.cubeFrame[layer][0][0] = this.cubeFrame[layer][2][0];
      this.cubeFrame[layer][2][0] = this.cubeFrame[layer][2][2];
      this.cubeFrame[layer][2][2] = this.cubeFrame[layer][0][2];
      this.cubeFrame[layer][0][2] = hold;
  
      // Save the initial edge this.cubeFrame
      hold = this.cubeFrame[layer][0][1];
  
      // Rotating the edges clockwise
      this.cubeFrame[layer][0][1] = this.cubeFrame[layer][1][0];
      this.cubeFrame[layer][1][0] = this.cubeFrame[layer][2][1];
      this.cubeFrame[layer][2][1] = this.cubeFrame[layer][1][2];
      this.cubeFrame[layer][1][2] = hold;
  
    }
    else {
      // Rotating the corners counterclockwise
      let hold = this.cubeFrame[layer][0][0];
      this.cubeFrame[layer][0][0] = this.cubeFrame[layer][0][2];
      this.cubeFrame[layer][0][2] = this.cubeFrame[layer][2][2];
      this.cubeFrame[layer][2][2] = this.cubeFrame[layer][2][0];
      this.cubeFrame[layer][2][0] = hold;
  
      // Save the initial edge this.cubeFrame
      hold = this.cubeFrame[layer][0][1];
  
      // Rotating the edges counterclockwise
      this.cubeFrame[layer][0][1] = this.cubeFrame[layer][1][2];
      this.cubeFrame[layer][1][2] = this.cubeFrame[layer][2][1];
      this.cubeFrame[layer][2][1] = this.cubeFrame[layer][1][0];
      this.cubeFrame[layer][1][0] = hold;
  }
  }
  setYArray(direction, layer){
   
    if (direction > 0) {
      // Rotating the corners clockwise
      let hold = this.cubeFrame[2][layer][2];  
  
      this.cubeFrame[2][layer][2] = this.cubeFrame[2][layer][0];
      this.cubeFrame[2][layer][0] = this.cubeFrame[0][layer][0];
      this.cubeFrame[0][layer][0] = this.cubeFrame[0][layer][2];
      this.cubeFrame[0][layer][2] = hold;
  
      // Save the initial edge this.cubeFrame
      hold = this.cubeFrame[1][layer][0];
  
      // Rotating the edges clockwise
      this.cubeFrame[1][layer][0] = this.cubeFrame[0][layer][1];
      this.cubeFrame[0][layer][1] = this.cubeFrame[1][layer][2];
      this.cubeFrame[1][layer][2] = this.cubeFrame[2][layer][1];
      this.cubeFrame[2][layer][1] = hold;
    }
    else{
      // Rotating the corners counterclockwise
      let hold = this.cubeFrame[2][layer][2];
  
      this.cubeFrame[2][layer][2] = this.cubeFrame[0][layer][2];
      this.cubeFrame[0][layer][2] = this.cubeFrame[0][layer][0];
      this.cubeFrame[0][layer][0] = this.cubeFrame[2][layer][0];
      this.cubeFrame[2][layer][0] = hold;
  
      // Save the initial edge this.cubeFrame
      hold = this.cubeFrame[1][layer][0];
  
      // Rotating the edges counterclockwise
      this.cubeFrame[1][layer][0] = this.cubeFrame[2][layer][1];
      this.cubeFrame[2][layer][1] = this.cubeFrame[1][layer][2];
      this.cubeFrame[1][layer][2] = this.cubeFrame[0][layer][1];
      this.cubeFrame[0][layer][1] = hold;
  }
  }


  rotateCubeXClockwise(){
    this.turnX(90,0)
    this.turnX(90,1)
    this.turnX(90,2)
  }


}





  
  










let myCube = new Cube(scene);


let c1 = myCube
c1.rotateCubeXClockwise()

function isAcceptedState(cube){



  for(let i=0; i<4; i++){
    for (let i = 0, x = -5; i < 3; i++, x += 5) {
      for (let j = 0, y = -5; j < 3; j++, y += 5) {
        for (let k = 0, z = -5; k < 3; k++, z += 5) {
          if(cube.cubeFrame[i][j][k] != c1.piece[i][j][k])
            return false
        }
      }
    }
    c1.rotateCubeXClockwise()
  }
  
  return true
}






function animate (cube){
  requestAnimationFrame(() => animate(cube));
  
  console.log(isAcceptedState(cube))
  if(turning > 0){
    switch(sidetoturn){
      case 'x0':
        console.log('cube.turnx ran')
        cube.turnX(vector, 0)
        if(turning == Math.abs(vector)){
          cube.setXArray(vector, 0)
        }
        break
      case 'x1':
        console.log('cube.turnx ran')
        cube.turnX(vector, 1)
        if(turning == Math.abs(vector)){
          cube.setXArray(vector, 1)
        }
        break
      case 'x2':
        console.log('cube.turnx ran')
        cube.turnX(vector, 2)
        if(turning == Math.abs(vector)){
          cube.setXArray(vector, 2)
        }
        break
      case 'y0':
        console.log('cube.turny ran')
        cube.turnY(vector, 0)
        if(turning == Math.abs(vector)){  
          cube.setYArray(vector, 0)
        }
        break

      case 'y1':
        console.log('cube.turny ran')
        cube.turnY(vector, 1)
        if(turning == Math.abs(vector)){  
          cube.setYArray(vector, 1)
        }
        break
      
      case 'y2':
        console.log('cube.turny ran')
        cube.turnY(vector, 2)
        if(turning == Math.abs(vector)){  
          cube.setYArray(vector, 2)
        }
        break
      
      case 'z0':
        console.log('cube.turnz ran')
        cube.turnZ(vector, 0)
        if(turning == Math.abs(vector)){
          cube.setZArray(vector, 0)
        }
        break

      case 'z1':
        console.log('cube.turnz ran')
        cube.turnZ(vector, 1)
        if(turning == Math.abs(vector)){
          cube.setZArray(vector, 1)
        }
        break

      case 'z2':
        console.log('cube.turnz ran')
        cube.turnZ(vector, 2)
        if(turning == Math.abs(vector)){
          cube.setZArray(vector, 2)
        }
        break
    }
    
    turning -= Math.abs(vector)
  }

  
  renderer.render(scene, cam)
}


//mao ni ang main hahaha
//global variables
let turning = 0
let sidetoturn = ''
let speed = 3
let vector = speed



animate(myCube);



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
document.addEventListener('DOMContentLoaded', (event) => {
  document.addEventListener('keydown', onKeydown);
});

