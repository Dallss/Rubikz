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

        if(i==1 || j == 1 || k == 1){ piece[i][j][k].radius = 5} 
        else{piece[i][j][k].radius = radiuscorner}

        scene.add(piece[i][j][k])
      }
    }
  }
  
 
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
  let radius = piece.radius 
  let angle = getAngleOnXZPlane(piece) + degToRad(degrees)

  piece.position.z = piece.radius * Math.sin(angle)
  piece.position.x = piece.radius * Math.cos(angle)

  piece.rotation.y -= degToRad(degrees)
  
}

function rotateOnXAxis(piece,degrees){

  let angle = getAngleOnZYPlane(piece) + degToRad(degrees)
  
  piece.position.z = piece.radius * Math.cos(angle)
  piece.position.y = piece.radius * Math.sin(angle)

  piece.rotation.x -= degToRad(degrees)
  
}

function rotateOnZAxis(piece,degrees){


  let angle = getAngleOnXYPlane(piece) + degToRad(degrees)

  piece.position.y = piece.radius * Math.cos(angle)
  piece.position.x = piece.radius * Math.sin(angle)

  piece.rotation.z -= degToRad(degrees)

  
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
  piece[1][layer][1].rotation.y -= degToRad(degrees)
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
  piece[layer][1][1].rotation.x -= degToRad(degrees)

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
  piece[1][1][layer].rotation.z -= degToRad(degrees)


    let hold = piece[0][2][layer];

    // Rotating the corners clockwise
    piece[0][2][layer] = piece[2][2][layer];
    piece[2][2][layer] = piece[2][0][layer];
    piece[2][0][layer] = piece[0][0][layer];
    piece[0][0][layer] = hold;
  

    // Save the initial edge piece
    hold = piece[0][1][layer];

    // Rotating the edges clockwise
    piece[0][1][layer] = piece[1][0][layer];
    piece[1][0][layer] = piece[2][1][layer];
    piece[2][1][layer] = piece[1][2][layer];
    piece[1][2][layer] = hold;

  
}

let turning = 0
let sidetoturn = ''
let vector = 1

function animate (){
  requestAnimationFrame( animate )
  
  if(turning > 0){
    switch(sidetoturn){
      case 'x2':
        turnX(vector, 2)
        break
      case 'y2':
        turnY(vector, 2)
        break
      case 'z2':
        turnZ(vector, 2)
        break
    }
    turning -= 1
  }

  renderer.render(scene, cam)
}


//mao ni ang main hahaha
init()
animate()



//event listeners 0




document.querySelector('#x2').addEventListener("click", (e)=>{

  if(turning == 0){
    turning = 90
    sidetoturn = 'x2'

  }
})

document.querySelector('#y2').addEventListener("click", (e)=>{

  if(turning == 0){
    turning = 90
    sidetoturn = 'y2'

  }
})

document.querySelector('#z2').addEventListener("click", (e)=>{

  if(turning == 0){
    turning = 90
    sidetoturn = 'z2'

  }
})


///NOTESS: angle on axes should not be an attribute. should be derrived from xy values. 